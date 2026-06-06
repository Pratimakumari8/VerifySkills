use anchor_lang::prelude::*;

#[account]
pub struct Certificate {
    pub certificate_hash: String,
    pub student_id: String,
    pub issuer: Pubkey,
    pub issue_date: i64,
    pub status: bool,
}

impl Certificate {
    pub const MAX_SIZE: usize =
        4 + 64 +   // certificate_hash
        4 + 50 +   // student_id
        32 +       // issuer
        8 +        // issue_date
        1;         // status
}