import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import bgImage from "../assets/blockchain.jpg";
import {
  UserPlus,
  FileCheck,
  Database,
  QrCode,
  SearchCheck,
  ShieldCheck,
  GraduationCap,
  Building2,
  BriefcaseBusiness,
} from "lucide-react";
import { motion } from "framer-motion";

const HowItWorks = () => {
  const steps = [
    {
      title: "Register",
      subtitle: "Institute joins VerifySkills",
      icon: <UserPlus size={26} />,
      desc: "The institute registers on VerifySkills and gets verified as an authorized certificate issuer.",
    },
    {
      title: "Issue Certificate",
      subtitle: "Student credential is created",
      icon: <FileCheck size={26} />,
      desc: "After course completion, the institute uploads student certificate details securely.",
    },
    {
      title: "Store on Blockchain",
      subtitle: "Credential becomes tamper-proof",
      icon: <Database size={26} />,
      desc: "Certificate data is stored on blockchain, making it immutable and protected from fraud.",
    },
    {
      title: "Share QR / ID",
      subtitle: "Student owns the credential",
      icon: <QrCode size={26} />,
      desc: "The student receives a unique QR code or verification ID to share with employers.",
    },
    {
      title: "Verify Instantly",
      subtitle: "Employer checks authenticity",
      icon: <SearchCheck size={26} />,
      desc: "Employers scan the QR code or enter the ID to verify certificate authenticity in seconds.",
    },
    {
      title: "Build Trust",
      subtitle: "Fraud-free hiring ecosystem",
      icon: <ShieldCheck size={26} />,
      desc: "Students, institutes, and employers stay connected through a trusted credential network.",
    },
  ];

  const roles = [
    {
      title: "Student",
      icon: <GraduationCap size={26} />,
      desc: "Receives, owns, and shares verified digital certificates anytime.",
    },
    {
      title: "Institute",
      icon: <Building2 size={26} />,
      desc: "Issues trusted skill certificates and stores them securely on blockchain.",
    },
    {
      title: "Employer",
      icon: <BriefcaseBusiness size={26} />,
      desc: "Verifies certificates instantly before hiring or shortlisting candidates.",
    },
  ];

  return (
    
       <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
<Header/>
      {/* HERO */}
        {/* HERO */}
<section className="relative w-full h-[80vh] flex items-center justify-center text-center">
  <img
    src={bgImage}
    alt="background"
    className="absolute inset-0 w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-black/60"></div>

  <div className="relative z-10 px-6 max-w-4xl">
    <motion.p
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-sm text-[var(--primary)] mb-4"
    >
  
    </motion.p>

    <motion.h1
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="text-4xl md:text-6xl font-semibold text-[var(--text-h)] leading-tight"
    >
      A simple flow for issuing, sharing, and verifying skill certificates.
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9 }}
      className="mt-6 text-[var(--text)] max-w-2xl mx-auto"
    >
      VerifySkills connects institutes, students, and employers through a secure
      blockchain-based credential verification system.
    </motion.p>
  </div>
</section>

    
      {/* STEP NAV */}
      <section className="px-6 pb-14">
        <div
          className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-6 gap-3 rounded-2xl border p-3"
          style={{
            background: "var(--surface)",
            borderColor: "var(--border)",
          }}
        >
          {steps.map((step, index) => (
            <a
              key={step.title}
              href={`#step-${index + 1}`}
              className="text-center rounded-xl px-3 py-3 text-sm hover:bg-[var(--accent-bg)] hover:text-[var(--text-h)] transition"
            >
              {index + 1}. {step.title}
            </a>
          ))}
        </div>
      </section>

      {/* MAIN PROCESS */}
      <section className="px-6 pb-28">
        <div className="max-w-6xl mx-auto space-y-20">
          {steps.map((step, index) => (
            <motion.div
              id={`step-${index + 1}`}
              key={step.title}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`grid md:grid-cols-2 gap-10 items-center ${
                index % 2 !== 0 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* TEXT */}
              <div>
                <p className="text-sm text-[var(--primary)] mb-3">
                  Step {index + 1}
                </p>

                <h2 className="text-3xl md:text-5xl font-semibold text-[var(--text-h)] mb-4">
                  {step.title}
                </h2>

                <h3 className="text-xl text-[var(--text-h)] mb-4">
                  {step.subtitle}
                </h3>

                <p className="text-[var(--text)] leading-relaxed max-w-xl">
                  {step.desc}
                </p>
              </div>

              {/* BLOCKCHAIN CARD */}
              <div
                className="relative rounded-[2rem] p-[1px] overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, var(--accent), transparent 40%, var(--border))",
                }}
              >
                <div
                  className="relative min-h-[280px] rounded-[2rem] border p-8 flex flex-col justify-between overflow-hidden"
                  style={{
                    background: "var(--surface)",
                    borderColor: "var(--border)",
                  }}
                >
                  {/* blockchain pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-10 left-10 w-3 h-3 rounded-full bg-[var(--primary)]"></div>
                    <div className="absolute top-24 right-20 w-3 h-3 rounded-full bg-[var(--primary)]"></div>
                    <div className="absolute bottom-16 left-28 w-3 h-3 rounded-full bg-[var(--primary)]"></div>
                    <div className="absolute bottom-10 right-10 w-3 h-3 rounded-full bg-[var(--primary)]"></div>
                    <div className="absolute top-12 left-12 w-52 h-[1px] bg-[var(--primary)] rotate-12"></div>
                    <div className="absolute bottom-20 right-16 w-56 h-[1px] bg-[var(--primary)] -rotate-12"></div>
                  </div>

                  <div
                    className="relative w-16 h-16 rounded-2xl flex items-center justify-center"
                    style={{
                      background: "var(--accent-bg)",
                      border: "1px solid var(--accent-border)",
                      color: "var(--primary)",
                    }}
                  >
                    {step.icon}
                  </div>

                  <div className="relative">
                    <p className="text-sm text-[var(--primary)] mb-2">
                      VerifySkills Process
                    </p>
                    <h3 className="text-2xl font-semibold text-[var(--text-h)]">
                      {step.title}
                    </h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ROLE CONNECTION */}
      <section className="px-6 pb-32">
        <div className="max-w-6xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-semibold text-[var(--text-h)]">
            How all three are connected
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-[var(--text)]">
            Institute issues the certificate, student owns it, and employer verifies it.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {roles.map((role, index) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-[2rem] p-[1px]"
              style={{
                background:
                  "linear-gradient(135deg, var(--accent), transparent 45%, var(--border))",
              }}
            >
              <div
                className="h-full rounded-[2rem] border p-8"
                style={{
                  background: "var(--surface)",
                  borderColor: "var(--border)",
                }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 mx-auto"
                  style={{
                    background: "var(--accent-bg)",
                    border: "1px solid var(--accent-border)",
                    color: "var(--primary)",
                  }}
                >
                  {role.icon}
                </div>

                <h3 className="text-2xl font-semibold text-[var(--text-h)] mb-3">
                  {role.title}
                </h3>

                <p className="text-sm leading-relaxed">{role.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HowItWorks;