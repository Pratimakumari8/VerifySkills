import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const TermsOfService = () => {
  const terms = [
    {
      title: "Acceptance of Terms",
      text: "By accessing or using VerifySkills, users agree to follow these terms and use the platform responsibly.",
    },
    {
      title: "Purpose of VerifySkills",
      text: "VerifySkills is designed to help institutions issue secure certificates and help employers verify credentials instantly.",
    },
    {
      title: "User Responsibilities",
      text: "Users must provide accurate information and must not upload fake, misleading, or unauthorized certificates.",
    },
    {
      title: "Certificate Verification",
      text: "Verification results are based on the information issued or stored through the platform. Users should ensure submitted data is correct.",
    },
    {
      title: "Data Security",
      text: "VerifySkills uses secure digital methods and blockchain concepts to support transparency, integrity, and tamper-resistant verification.",
    },
    {
      title: "Limitation of Liability",
      text: "VerifySkills is not responsible for misuse of credentials outside the platform or actions taken by unauthorized third parties.",
    },
    {
      title: "Changes to Terms",
      text: "These terms may be updated when needed. Continued use of the platform means acceptance of the updated terms.",
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <Header />

      <section className="px-6 pt-36 pb-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[0.9fr_1.4fr] gap-16">

          <div className="md:sticky md:top-32 h-fit">
            <p className="text-sm uppercase tracking-[0.35em] text-[var(--primary)] mb-6">
              Legal
            </p>

            <h1 className="text-5xl md:text-7xl font-semibold text-[var(--text-h)] leading-tight">
              Terms of Service
            </h1>

            <p className="mt-8 text-lg leading-relaxed max-w-md">
              Clear guidelines for using VerifySkills safely, responsibly, and transparently.
            </p>

            <div className="mt-10 h-[1px] w-32 bg-[var(--primary)]"></div>

            <p className="mt-6 text-sm text-[var(--primary)]">
              Last updated — May 2026
            </p>
          </div>

          <div className="relative border-l border-[var(--border)] pl-8 md:pl-12 space-y-14">
            {terms.map((item, index) => (
              <div key={index} className="relative group">
                <span className="absolute -left-[43px] md:-left-[59px] top-1 w-5 h-5 rounded-full bg-[var(--bg)] border border-[var(--primary)] group-hover:bg-[var(--primary)] transition"></span>

                <p className="text-sm text-[var(--primary)] mb-3">
                  0{index + 1}
                </p>

                <h2 className="text-2xl md:text-3xl font-semibold text-[var(--text-h)] mb-4">
                  {item.title}
                </h2>

                <p className="text-lg leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="px-6 pb-28">
        <div className="max-w-6xl mx-auto border-t border-[var(--border)] pt-14">
          <h2 className="text-3xl md:text-5xl font-semibold text-[var(--text-h)] max-w-3xl leading-tight">
            Our terms are built around trust, security, and responsible verification.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed">
            VerifySkills aims to reduce fake certificates, speed up verification, and create confidence between learners, institutions, and employers.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsOfService;