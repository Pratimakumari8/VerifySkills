import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import hero from "../assets/heropage3.jpg";
import ProblemCard from "../components/ProblemCard";
import { ShieldX, Clock, AlertTriangle,Upload, Database, QrCode, CheckCircle} from "lucide-react";
import arrow from "../assets/arrow.png";
import feature from "../assets/feature.jpg";
const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[var(--bg)]">

      <Header />

      {/* HERO SECTION */}
       
      <section className="relative w-full h-[90vh] flex items-center justify-center text-center">

  {/* BACKGROUND IMAGE */}
  <img
    src= {hero}// 👉 put your image in public folder
    alt="Hero"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* CONTENT */}
  <div className="relative z-10 px-6 max-w-3xl">
    <h1 className="text-4xl md:text-6xl font-semibold text-[var(--text-h)]">
      Verify Skills. Instantly. Securely.
    </h1>

    <p className="mt-4 text-lg text-[var(--text)]">
      Blockchain-powered credential verification for students, institutes, and employers.
    </p>
  </div>

</section>
<section className="px-6 py-24 md:py-32">
  <h2 className="text-3xl font-semibold text-center text-[var(--text-h)] mb-4">
    Problems We Solve
  </h2>

  <p className="text-center text-[var(--text)] mb-12 max-w-2xl mx-auto">
    Traditional credential systems are slow, unreliable, and prone to fraud. 
    We fix that with secure, instant verification.
  </p>

  <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
    
 <ProblemCard
  title="Fake Certificates"
  description="Employers struggle to verify authenticity, leading to hiring risks."
  icon={<ShieldX size={22} color="var(--primary)" />}
/>

<ProblemCard
  title="Slow Verification"
  description="Manual verification takes days, slowing hiring decisions."
  icon={<Clock size={22} color="var(--primary)" />}
/>

<ProblemCard
  title="Lack of Trust"
  description="No tamper-proof system exists to ensure credibility."
  icon={<AlertTriangle size={22} color="var(--primary)" />}
/>
  </div>
</section>
<section className="relative w-full py-32">

  {/* BACKGROUND IMAGE */}
  <img
    src={feature}  // replace with your blockchain image if different
    alt="Blockchain"
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/70"></div>

  {/* CONTENT */}
  <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

    {/* HEADING */}
    <h2 className="text-3xl md:text-4xl font-semibold text-[var(--text-h)] mb-4">
       Features
    </h2>

    <p className="text-[var(--text)] mb-16 max-w-2xl mx-auto">
      Built with cutting-edge blockchain technology to ensure trust, security, and speed.
    </p>

    {/* GLASS CARD CONTAINER */}
<div className="grid md:grid-cols-3 gap-6 bg-transparent backdrop-blur-[1px] p-6 md:p-8 rounded-2xl border border-white/10 max-w-4xl mx-auto shadow-[0_0_40px_rgba(163,94,71,0.2)]">      {[
        {
          title: "Tamper-Proof",
          desc: "Certificates cannot be altered once stored on blockchain.",
        },
        {
          title: "Instant Verification",
          desc: "Verify credentials in seconds without manual processes.",
        },
        {
          title: "Secure Storage",
          desc: "Decentralized storage ensures maximum security.",
        },
        {
          title: "Unique ID / QR",
          desc: "Each certificate has a unique identity for validation.",
        },
        {
          title: "Decentralized",
          desc: "No single authority controls your data.",
        },
        {
          title: "Transparent",
          desc: "All records are verifiable and traceable.",
        },
      ].map((feature, i) => (
        <div
          key={i}
          className="p-6 rounded-xl transition-all duration-300 hover:scale-105 border border-[var(--border)]"
          style={{ background: "var(--surface)" }}
        >
          <h3 className="text-lg font-semibold text-[var(--text-h)] mb-2">
            {feature.title}
          </h3>
          <p className="text-sm text-[var(--text)]">
            {feature.desc}
          </p>
        </div>
      ))}

    </div>
  </div>
</section>

{/* SOLUTION SECTION */}
<section className="px-6 py-20">
  <h2 className="text-3xl font-semibold text-center text-[var(--text-h)] mb-4">
    How VerifySkills Works
  </h2>

  <p className="text-center text-[var(--text)] mb-16 max-w-2xl mx-auto">
    A seamless and secure process designed to eliminate fraud and enable instant verification.
  </p>

  <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">

    {[
      {
        title: "Upload Certificate",
        desc: "Institutions upload verified credentials securely.",
        icon: <Upload size={28} />,
      },
      {
        title: "Store on Blockchain",
        desc: "Data is stored immutably and cannot be altered.",
        icon: <Database size={28} />,
      },
      {
        title: "Generate ID / QR",
        desc: "Each certificate gets a unique verification identity.",
        icon: <QrCode size={28} />,
      },
      {
        title: "Instant Verification",
        desc: "Employers verify instantly with zero delay.",
        icon: <CheckCircle size={28} />,
      },
    ].map((step, index) => (
      <div
        key={index}
        className="relative p-6 rounded-xl cursor-pointer transition-all duration-300 hover:scale-105"
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
        }}
      >
        {/* ICON */}
        <div
          className="mb-4 flex items-center justify-center w-12 h-12 rounded-lg"
          style={{
            background: "var(--accent-bg)",
            border: "1px solid var(--accent-border)",
            color: "var(--primary)",
          }}
        >
          {step.icon}
        </div>

        {/* TITLE */}
        <h3 className="text-lg font-semibold text-[var(--text-h)] mb-2">
          {step.title}
        </h3>

        {/* DESCRIPTION */}
        <p className="text-sm text-[var(--text)]">
          {step.desc}
        </p>

        {/* ARROW */}
        {index !== 3 && (
 <img
  src={arrow}
  alt="arrow"
  className="hidden md:block absolute top-1/2 right-[-0px]   w-6 opacity-70"
 />
)}
      </div>
    ))}

  </div>
</section>

<main className="max-w-6xl mx-auto px-6">
</main>
      <Footer />
    </div>
  );
};

export default LandingPage;