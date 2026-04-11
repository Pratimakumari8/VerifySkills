import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">

      <Header />

      {/* HERO SECTION */}
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl md:text-6xl font-semibold text-[var(--text-h)]">
          Verify Skills. Instantly. Securely.
        </h1>

        <p className="mt-4 text-lg text-[var(--text)] max-w-2xl mx-auto">
          Blockchain-powered credential verification for students, institutes, and employers.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="bg-[var(--accent)] text-white px-6 py-3 rounded-lg">
            Get Started
          </button>
          <button className="border border-[var(--border)] px-6 py-3 rounded-lg">
            Verify Certificate
          </button>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="px-6 py-16 bg-[var(--surface)]">
        <h2 className="text-2xl font-semibold text-center mb-10">
          Problems We Solve
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="p-6 border border-[var(--border)] rounded-xl">
            Fake certificates are increasing
          </div>
          <div className="p-6 border border-[var(--border)] rounded-xl">
            Manual verification is slow
          </div>
          <div className="p-6 border border-[var(--border)] rounded-xl">
            No trusted centralized system
          </div>
        </div>
      </section>

      {/* SOLUTION SECTION */}
      <section className="px-6 py-16">
        <h2 className="text-2xl font-semibold text-center mb-10">
          Our Solution
        </h2>

        <div className="max-w-4xl mx-auto text-center text-[var(--text)] space-y-4">
          <p>Upload certificates securely</p>
          <p>Store them on blockchain</p>
          <p>Verify instantly using unique ID or QR code</p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="px-6 py-16 bg-[var(--surface)]">
        <h2 className="text-2xl font-semibold text-center mb-10">
          Features
        </h2>

        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="p-6 border rounded-xl">Tamper-proof</div>
          <div className="p-6 border rounded-xl">Instant Verification</div>
          <div className="p-6 border rounded-xl">Secure</div>
          <div className="p-6 border rounded-xl">Accessible</div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 py-16">
        <h2 className="text-2xl font-semibold text-center mb-10">
          How It Works
        </h2>

        <div className="max-w-4xl mx-auto space-y-4 text-center">
          <p>1. Institution uploads certificate</p>
          <p>2. Stored securely on blockchain</p>
          <p>3. User shares ID/QR</p>
          <p>4. Employer verifies instantly</p>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-16">
        <h2 className="text-2xl font-semibold">
          Start verifying skills the smart way
        </h2>

        <button className="mt-6 bg-[var(--accent)] text-white px-6 py-3 rounded-lg">
          Get Started
        </button>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;