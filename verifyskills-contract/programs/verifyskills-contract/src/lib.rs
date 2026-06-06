pub mod constants;
pub mod error;
pub mod instructions;
pub mod state;

use anchor_lang::prelude::*;

pub use constants::*;
pub use instructions::*;
pub use state::*;

declare_id!("Db5UP4RJdvubepNdsQN6Cgk8sGocmzZiqgZTrVHhDwcR");

#[program]
pub mod verifyskills_contract {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
    initialize::handler(ctx)
}

pub fn issue_certificate(
    ctx: Context<IssueCertificate>,
    certificate_hash: String,
    student_id: String,
) -> Result<()> {
    issue_certificate::handler(
        ctx,
        certificate_hash,
        student_id,
    )
}
}
