import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const TrustCenter = () => {
  const stats = [
    {
      number: "99.9%",
      label: "Verification Reliability",
    },
    {
      number: "24/7",
      label: "Platform Monitoring",
    },
    {
      number: "Secure",
      label: "Credential Validation",
    },
  ];

  const sections = [
    {
      title: "Secure Verification Infrastructure",
      desc: "VerifySkills is designed with secure credential validation systems and tamper-resistant verification workflows.",
    },
    {
      title: "Transparent Credential Validation",
      desc: "Employers and institutions can instantly verify certificate authenticity through transparent verification processes.",
    },
    {
      title: "Privacy & Responsible Data Usage",
      desc: "We minimize unnecessary personal data collection and prioritize responsible handling of verification-related information.",
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <Header />

      {/* HERO */}
      <section className="px-6 pt-36 pb-28">
        <div className="max-w-7xl mx-auto">

          <p className="text-sm uppercase tracking-[0.35em] text-[var(--primary)] mb-6">
            Trust Center
          </p>

          <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-16 items-end">

            <h1 className="text-5xl md:text-7xl font-semibold text-[var(--text-h)] leading-[1.05] max-w-5xl">
              Building trust into every verification.
            </h1>

            <p className="text-lg leading-relaxed max-w-xl">
              VerifySkills combines secure verification practices,
              transparency, and blockchain concepts to create a trusted
              credential ecosystem.
            </p>

          </div>

        </div>
      </section>

      {/* TRUST METRICS */}
      <section className="px-6 pb-28">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 border border-[var(--border)]">

          {stats.map((item, index) => (
            <div
              key={index}
              className={`p-10 md:p-14 ${
                index !== 2 ? "border-b md:border-b-0 md:border-r border-[var(--border)]" : ""
              }`}
            >
              <h2 className="text-5xl md:text-6xl font-semibold text-[var(--text-h)]">
                {item.number}
              </h2>

              <p className="mt-4 text-lg">
                {item.label}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* MAIN SECTIONS */}
      <section className="px-6 py-10">
        <div className="max-w-7xl mx-auto">

          {sections.map((item, index) => (
            <div
              key={index}
              className="grid md:grid-cols-[0.9fr_1.1fr] gap-16 py-20 border-t border-[var(--border)]"
            >

              <div>
                <p className="text-sm text-[var(--primary)] mb-5">
                  0{index + 1}
                </p>

                <h2 className="text-4xl md:text-5xl font-semibold text-[var(--text-h)] leading-tight">
                  {item.title}
                </h2>
              </div>

              <div className="flex items-center">
                <p className="text-xl leading-relaxed max-w-2xl">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* SECURITY GRID */}
      <section className="px-6 py-28">
        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-2 gap-[1px] bg-[var(--border)]">

            {[
              "Tamper-resistant verification",
              "Transparent validation process",
              "Controlled access systems",
              "Responsible credential handling",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[var(--bg)] p-10 md:p-14"
              >
                <p className="text-sm text-[var(--primary)] mb-6">
                  0{index + 1}
                </p>

                <h3 className="text-3xl md:text-4xl font-semibold text-[var(--text-h)] leading-tight max-w-md">
                  {item}
                </h3>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto border-t border-[var(--border)] pt-16">

          <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-16">

            <h2 className="text-4xl md:text-6xl font-semibold text-[var(--text-h)] leading-tight">
              Trust is not claimed. It is built through secure systems and transparency.
            </h2>

            <p className="text-lg leading-relaxed max-w-xl">
              VerifySkills aims to reduce credential fraud and create confidence
              between students, institutions, and employers through reliable verification.
            </p>

          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TrustCenter;