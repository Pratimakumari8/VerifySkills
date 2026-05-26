import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import EmployerSidebar from "../../components/Employer/EmployerSidebar";
import { ShieldCheck, ShieldX, Search, Upload } from "lucide-react";
import jsQR from "jsqr";

const VerifyCertificate = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [hash, setHash] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [qrLoading, setQrLoading] = useState(false);

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const hashFromUrl = searchParams.get("hash");

    if (hashFromUrl) {
      setHash(hashFromUrl);
      verifyHash(hashFromUrl);
    }
  }, [searchParams]);

  const verifyHash = async (hashValue) => {
    if (!hashValue.trim()) {
      alert("Please enter certificate hash");
      return;
    }

    try {
      setLoading(true);

     const token = localStorage.getItem("token");

const res = await fetch(
  `http://localhost:5000/api/certificates/verify/${hashValue.trim()}`,
  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
);

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Verification failed");
      }

      setResult(data);
    } catch (err) {
      setResult({
        valid: false,
        verified: false,
        message: err.message,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = async () => {
    verifyHash(hash);
  };

  const extractHashFromQrText = (text) => {
    try {
      const url = new URL(text);
      return url.searchParams.get("hash") || text;
    } catch {
      return text;
    }
  };

  const handleQrUpload = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setQrLoading(true);

    const reader = new FileReader();

    reader.onload = () => {
      const img = new Image();

      img.onload = () => {
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");

        canvas.width = img.width;
        canvas.height = img.height;

        context.drawImage(img, 0, 0, img.width, img.height);

        const imageData = context.getImageData(0, 0, img.width, img.height);

        const qrCode = jsQR(
          imageData.data,
          imageData.width,
          imageData.height
        );

        if (!qrCode) {
          alert("QR code not detected. Please upload a clear QR image.");
          setQrLoading(false);
          return;
        }

        const scannedHash = extractHashFromQrText(qrCode.data);

        setHash(scannedHash);
        setQrLoading(false);
        verifyHash(scannedHash);
      };

      img.onerror = () => {
        alert("Invalid image file");
        setQrLoading(false);
      };

      img.src = reader.result;
    };

    reader.onerror = () => {
      alert("Failed to read QR image");
      setQrLoading(false);
    };

    reader.readAsDataURL(file);
  };

  const isVerified = result?.valid || result?.verified;

  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      <EmployerSidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      <div
        className={`p-6 transition-all duration-300 ${
          collapsed ? "sm:ml-20" : "sm:ml-64"
        }`}
      >
        <h1
          className="text-3xl font-semibold mb-2"
          style={{ color: "var(--text-h)" }}
        >
          Verify Certificate
        </h1>

        <p className="mb-8" style={{ color: "var(--text)" }}>
          Enter certificate hash or upload QR code to verify authenticity using
          blockchain.
        </p>

        <div
          className="rounded-3xl border p-6 mb-6"
          style={{
            background: "var(--surface)",
            borderColor: "var(--border)",
          }}
        >
          <div className="flex gap-4">
            <input
              value={hash}
              onChange={(e) => setHash(e.target.value)}
              placeholder="Enter Certificate Hash..."
              className="flex-1 p-3 rounded-xl bg-black border border-[var(--border)] text-[var(--text-h)]"
            />

            <button
              onClick={handleVerify}
              className="px-6 py-3 rounded-xl flex items-center gap-2"
              style={{ background: "var(--primary)", color: "#fff" }}
            >
              <Search size={18} />
              Verify
            </button>
          </div>

          <div className="mt-5">
            <label
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl cursor-pointer font-medium"
              style={{ background: "var(--accent-bg)", color: "var(--text-h)" }}
            >
              <Upload size={18} />
              {qrLoading ? "Scanning QR..." : "Upload QR Image"}

              <input
                type="file"
                accept="image/*"
                onChange={handleQrUpload}
                className="hidden"
              />
            </label>
          </div>
        </div>

        {loading ? (
          <div
            className="p-6 rounded-3xl border text-center"
            style={{
              background: "var(--surface)",
              borderColor: "var(--border)",
            }}
          >
            Verifying certificate on Solana blockchain...
          </div>
        ) : (
          result && (
            <div
              className="p-6 rounded-3xl border"
              style={{
                background: "var(--surface)",
                borderColor: "var(--border)",
              }}
            >
              {isVerified ? (
                <>
                  <div className="flex items-center gap-3 text-green-400 mb-4">
                    <ShieldCheck />
                    <span className="text-lg font-semibold">
                      Certificate Verified
                    </span>
                  </div>

                  <p className="mb-5" style={{ color: "var(--text)" }}>
                    {result.message}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Info
                      label="Student"
                      value={result.certificate.studentName}
                    />
                    <Info
                      label="Course"
                      value={result.certificate.courseName}
                    />
                    <Info
                      label="Institute"
                      value={result.certificate.instituteName}
                    />
                    <Info
                      label="Issue Date"
                      value={new Date(
                        result.certificate.issueDate
                      ).toLocaleDateString()}
                    />
                    <Info
                      label="Certificate Hash"
                      value={result.certificate.certificateHash}
                    />
                    <Info
                      label="Blockchain Tx"
                      value={result.certificate.blockchainTxHash}
                    />
                  </div>

                  <a
                    href={result.certificate.certificateUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mt-6 px-5 py-3 rounded-xl"
                    style={{ background: "var(--primary)", color: "#fff" }}
                  >
                    View Certificate
                  </a>
                </>
              ) : (
                <div>
                  <div className="flex items-center gap-3 text-red-400 mb-3">
                    <ShieldX />
                    <span className="text-lg font-semibold">
                      Invalid Certificate
                    </span>
                  </div>

                  <p style={{ color: "var(--text)" }}>
                    {result.message || "Certificate could not be verified."}
                  </p>
                </div>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
};

const Info = ({ label, value }) => (
  <div>
    <p className="text-sm text-[var(--text)]">{label}</p>
    <p className="font-medium text-[var(--text-h)] break-all">
      {value || "N/A"}
    </p>
  </div>
);

export default VerifyCertificate;