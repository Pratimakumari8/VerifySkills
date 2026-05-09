import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Careers = () => {
  const values = [
    "Build with purpose",
    "Move with transparency",
    "Protect user trust",
    "Learn fast together",
  ];

  const roles = [
    ["Frontend Developer", "Remote", "Internship"],
    ["Blockchain Developer", "Hybrid", "Internship"],
    ["Backend Developer", "Remote", "Internship"],
    ["UI/UX Designer", "Remote", "Part Time"],
    ["Documentation Manager", "Remote", "Internship"],
  ];

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <Header />

      {/* HERO */}
      <section className="px-6 pt-40 pb-28">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm uppercase tracking-[0.35em] text-[var(--primary)] mb-6">
            Careers
          </p>

            <h1 className="text-4xl md:text-6xl font-semibold text-[var(--text-h)] leading-[1.08] max-w-4xl">
            Build the future of trusted digital credentials.
          </h1>

          <p className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed">
            Join VerifySkills and help us solve fake certificate verification
            through blockchain, security, and modern web technology.
          </p>

          <a
            href="#open-roles"
            className="inline-block mt-10 px-7 py-3 rounded-full text-white font-medium transition hover:scale-105"
            style={{ background: "var(--accent)" }}
          >
            View Open Positions
          </a>
        </div>
      </section>

      {/* MISSION */}
      <section className="px-6 py-28 border-y border-[var(--border)]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <h2 className="text-4xl md:text-6xl font-semibold text-[var(--text-h)] leading-tight">
            We are not just building software. We are building trust.
          </h2>

          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              Every year, students earn certificates, but companies still
              struggle to verify them quickly and confidently.
            </p>
            <p>
              VerifySkills is creating a secure platform where institutions can
              issue credentials and employers can verify them instantly.
            </p>
          </div>
        </div>
      </section>

      {/* WHY JOIN */}
      <section className="px-6 py-28">
        <div className="max-w-6xl mx-auto space-y-20">
          {[
            {
              title: "Work on real problems.",
              desc: "Help reduce fake certificates, manual verification delays, and trust issues in hiring.",
            },
            {
              title: "Build with modern technology.",
              desc: "Work with blockchain concepts, secure credential systems, React, and scalable web architecture.",
            },
            {
              title: "Grow with a focused team.",
              desc: "Learn, experiment, and contribute directly to a product that solves a meaningful problem.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="grid md:grid-cols-[0.8fr_1.2fr] gap-10 border-t border-[var(--border)] pt-10"
            >
              <p className="text-sm text-[var(--primary)]">0{index + 1}</p>

              <div>
                <h3 className="text-3xl md:text-5xl font-semibold text-[var(--text-h)] mb-5">
                  {item.title}
                </h3>
                <p className="text-lg leading-relaxed max-w-3xl">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="px-6 py-28 border-y border-[var(--border)]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[0.8fr_1.2fr] gap-16">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--primary)] mb-5">
              Values
            </p>
            <h2 className="text-4xl md:text-6xl font-semibold text-[var(--text-h)] leading-tight">
              Principles that guide our work.
            </h2>
          </div>

          <div className="space-y-8">
            {values.map((value, index) => (
              <div
                key={value}
                className="flex items-center gap-6 border-b border-[var(--border)] pb-6"
              >
                <span className="text-[var(--primary)]">0{index + 1}</span>
                <h3 className="text-2xl md:text-3xl text-[var(--text-h)]">
                  {value}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPEN ROLES */}
      <section id="open-roles" className="px-6 py-28">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--primary)] mb-5">
            Open Positions
          </p>

          <h2 className="text-4xl md:text-6xl font-semibold text-[var(--text-h)] mb-14">
            Join our team.
          </h2>

          <div className="border-t border-[var(--border)]">
            {roles.map((role, index) => (
              <div
                key={index}
                className="grid md:grid-cols-[1.4fr_0.6fr_0.6fr_0.4fr] gap-6 items-center py-7 border-b border-[var(--border)] group"
              >
                <h3 className="text-2xl font-semibold text-[var(--text-h)] group-hover:text-[var(--primary)] transition">
                  {role[0]}
                </h3>

                <p>{role[1]}</p>
                <p>{role[2]}</p>

                <button
                  className="w-fit px-5 py-2 rounded-full text-sm font-medium border transition hover:bg-[var(--primary)] hover:text-black"
                  style={{ borderColor: "var(--border)" }}
                >
                  Apply
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CULTURE */}
      <section className="px-6 pb-32">
        <div
          className="max-w-6xl mx-auto min-h-[420px] rounded-[36px] p-10 md:p-16 flex items-end overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(163,94,71,0.28), rgba(0,0,0,0.95))",
            border: "1px solid var(--accent-border)",
          }}
        >
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--primary)] mb-5">
              Culture
            </p>

            <h2 className="text-4xl md:text-6xl font-semibold text-[var(--text-h)] leading-tight max-w-4xl">
              Small team. Big mission. Real impact.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed">
              We believe in ownership, clean design, secure systems, and
              building technology that creates confidence between students,
              institutions, and employers.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;