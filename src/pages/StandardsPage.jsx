import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  ShieldCheck,
  LockKeyhole,
  ScanQrCode,
  Globe2,
  Database,
  FileCheck2,
} from "lucide-react";

const StandardsPage = () => {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <Header />

      {/* HERO */}
      <section className="relative px-6 pt-36 pb-24 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-[var(--accent)]/20 blur-[120px] rounded-full" />

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <p className="uppercase tracking-[0.35em] text-sm text-[var(--primary)] mb-5">
              Standards & Trust
            </p>

            <h1 className="text-5xl md:text-7xl font-semibold leading-tight text-[var(--text-h)]">
              Built for verified digital trust.
            </h1>
          </div>

          <div className="border-l border-[var(--border)] pl-8">
            <p className="text-lg leading-relaxed">
              VerifySkills is designed around secure credential verification,
              blockchain immutability, QR-based validation, and learner-owned
              digital certificates.
            </p>
          </div>
        </div>
      </section>

      {/* BIG STANDARD STRIP */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto border-y border-[var(--border)] py-10">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {["NCVET Ready", "Blockchain Secured", "QR Verified", "Globally Portable"].map(
              (item, index) => (
                <div key={index}>
                  <h2 className="text-3xl font-semibold text-[var(--text-h)]">
                    0{index + 1}
                  </h2>
                  <p className="mt-2 text-[var(--primary)]">{item}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* SPLIT SECTIONS */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto space-y-28">

          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div className="text-[var(--primary)]">
              <ShieldCheck size={70} />
            </div>

            <div>
              <h2 className="text-4xl font-semibold text-[var(--text-h)] mb-5">
                Credential Authenticity
              </h2>
              <p className="leading-relaxed">
                Every certificate issued through VerifySkills gets a unique
                identity, making it easier for employers and institutions to
                confirm whether the credential is real or fake.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div className="md:order-2 text-[var(--primary)]">
              <Database size={70} />
            </div>

            <div className="md:order-1">
              <h2 className="text-4xl font-semibold text-[var(--text-h)] mb-5">
                Blockchain Immutability
              </h2>
              <p className="leading-relaxed">
                Certificate records are stored in a tamper-resistant manner so
                that once a credential is issued, its proof cannot be silently
                changed or duplicated.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div className="text-[var(--primary)]">
              <ScanQrCode size={70} />
            </div>

            <div>
              <h2 className="text-4xl font-semibold text-[var(--text-h)] mb-5">
                Instant QR Verification
              </h2>
              <p className="leading-relaxed">
                Employers can scan a QR code or enter a unique certificate ID to
                verify the certificate instantly without long manual processes.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="px-6 py-28 border-y border-[var(--border)]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-semibold text-[var(--text-h)] text-center mb-16">
            Standard Verification Flow
          </h2>

          <div className="relative border-l border-[var(--border)] pl-10 space-y-12">
            {[
              "Institution uploads verified certificate data",
              "System generates unique credential hash",
              "Certificate proof is stored on blockchain",
              "Learner receives QR-based digital certificate",
              "Employer verifies authenticity instantly",
            ].map((step, index) => (
              <div key={index} className="relative">
                <span className="absolute -left-[52px] top-1 w-5 h-5 rounded-full bg-[var(--accent)]" />
                <p className="text-sm text-[var(--primary)] mb-1">
                  Step {index + 1}
                </p>
                <h3 className="text-xl text-[var(--text-h)] font-medium">
                  {step}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPLIANCE STYLE BLOCK */}
      <section className="px-6 py-28">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 rounded-3xl p-10 bg-[var(--surface)] border border-[var(--border)]">
            <FileCheck2 className="text-[var(--primary)] mb-6" size={44} />
            <h2 className="text-4xl font-semibold text-[var(--text-h)] mb-5">
              Designed for trusted ecosystems.
            </h2>
            <p className="leading-relaxed">
              VerifySkills can align with national digital credential platforms
              such as Skill India Digital, DigiLocker, and Academic Bank of
              Credits by keeping credentials secure, portable, and easy to verify.
            </p>
          </div>

          <div className="rounded-3xl p-10 bg-[var(--accent-bg)] border border-[var(--accent-border)]">
            <LockKeyhole className="text-[var(--primary)] mb-6" size={44} />
            <h3 className="text-2xl font-semibold text-[var(--text-h)] mb-4">
              Privacy First
            </h3>
            <p>
              Learners control access to their credentials while verification
              remains simple for trusted parties.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StandardsPage;