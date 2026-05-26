import {
  Connection,
  Keypair,
  PublicKey,
  Transaction,
  TransactionInstruction,
  sendAndConfirmTransaction,
} from "@solana/web3.js";

const MEMO_PROGRAM_ID = new PublicKey(
  "MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr"
);

const connection = new Connection(
  process.env.SOLANA_RPC_URL || "https://api.devnet.solana.com",
  "confirmed"
);

const getPayer = () => {
  if (!process.env.SOLANA_SECRET_KEY) {
    throw new Error("SOLANA_SECRET_KEY missing in .env");
  }

  const secretKey = Uint8Array.from(JSON.parse(process.env.SOLANA_SECRET_KEY));
  return Keypair.fromSecretKey(secretKey);
};

export const storeHashOnBlockchain = async (certificateHash) => {
  const payer = getPayer();

  const memo = JSON.stringify({
    app: "VerifySkills",
    type: "CERTIFICATE_HASH",
    hash: certificateHash,
    timestamp: new Date().toISOString(),
  });

  const instruction = new TransactionInstruction({
    keys: [],
    programId: MEMO_PROGRAM_ID,
    data: Buffer.from(memo, "utf8"),
  });

  const transaction = new Transaction().add(instruction);

  const signature = await sendAndConfirmTransaction(
    connection,
    transaction,
    [payer]
  );

  return signature;
};

export const verifyHashOnBlockchain = async (certificateHash, txSignature) => {
  try {
    const tx = await connection.getParsedTransaction(txSignature, {
      commitment: "confirmed",
      maxSupportedTransactionVersion: 0,
    });

    if (!tx) {
      return {
        valid: false,
        message: "Blockchain transaction not found",
      };
    }

    const instructions = tx.transaction.message.instructions;

    for (const instruction of instructions) {
      if (instruction.programId?.toString() === MEMO_PROGRAM_ID.toString()) {
        const memoText = instruction.parsed || instruction.data;

        if (!memoText) {
          continue;
        }

        try {
          const memoData = JSON.parse(memoText);

          if (
            memoData.app === "VerifySkills" &&
            memoData.type === "CERTIFICATE_HASH" &&
            memoData.hash === certificateHash
          ) {
            return {
              valid: true,
              message: "Hash verified on Solana blockchain",
              blockchainData: memoData,
            };
          }
        } catch {
          if (String(memoText).includes(certificateHash)) {
            return {
              valid: true,
              message: "Hash verified on Solana blockchain",
              blockchainData: memoText,
            };
          }
        }
      }
    }

    return {
      valid: false,
      message: "Certificate hash not found in blockchain transaction",
    };
  } catch (error) {
    console.log("Blockchain verification error:", error.message);

    return {
      valid: false,
      message: "Blockchain verification failed",
      error: error.message,
    };
  }
};