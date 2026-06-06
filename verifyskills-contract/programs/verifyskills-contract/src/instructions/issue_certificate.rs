use anchor_lang::prelude::*;
use crate::state::Certificate;

#[derive(Accounts)]
pub struct IssueCertificate<'info> {

    #[account(
        init,
        payer = issuer,
        space = 8 + Certificate::MAX_SIZE
    )]
    pub certificate: Account<'info, Certificate>,

    #[account(mut)]
    pub issuer: Signer<'info>,

    pub system_program: Program<'info, System>,
}

pub fn handler(
    ctx: Context<IssueCertificate>,
    certificate_hash: String,
    student_id: String,
) -> Result<()> {

    let certificate = &mut ctx.accounts.certificate;

    certificate.certificate_hash = certificate_hash;
    certificate.student_id = student_id;
    certificate.issuer = ctx.accounts.issuer.key();
    certificate.issue_date = Clock::get()?.unix_timestamp;
    certificate.status = true;

    Ok(())
}