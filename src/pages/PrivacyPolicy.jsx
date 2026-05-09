import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import privacyIcon from "../assets/privacyPolish.png";

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "Information We Collect",
      text: "VerifySkills may collect account details, credential information, verification activity, and limited technical data required to improve platform security and reliability.",
    },
    {
      title: "How We Use Information",
      text: "We use collected information to verify certificates, prevent fraud, improve platform functionality, and maintain secure credential validation systems.",
    },
    {
      title: "Blockchain Transparency",
      text: "Some credential-related records may be stored using blockchain concepts to ensure transparency and tamper resistance. Sensitive personal information is minimized whenever possible.",
    },
    {
      title: "Data Security",
      text: "We implement secure access controls, encrypted communication methods, and responsible storage practices to protect user information and verification records.",
    },
    {
      title: "User Rights",
      text: "Users may request updates, corrections, or deletion of personal information where applicable and permitted by law.",
    },
    {
      title: "Policy Updates",
      text: "This Privacy Policy may be updated periodically to reflect improvements, legal requirements, or platform changes.",
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <Header />

        {/* HERO */}
<section className="px-6 pt-36 pb-24 border-b border-[var(--border)]">
  
  <div className="max-w-6xl mx-auto grid md:grid-cols-[0.9fr_1.3fr] gap-16">

    {/* LEFT */}
     
       <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-30 w-full">

  <h1 className="text-5xl md:text-7xl font-semibold text-[var(--text-h)] leading-tight max-w-4xl">
    Privacy matters. Transparency matters more.
  </h1>

     <img
  src={privacyIcon}
  alt="privacy"
  className="w-82 h-82 md:w-[540px] md:h-[540px] object-contain ml-auto md:mr-[-200px]"
/>

</div>
    

    {/* RIGHT */}
    <div className="flex items-end">
      <p className="text-lg leading-relaxed max-w-2xl">
        VerifySkills is designed to protect credential integrity while
        respecting user privacy, security, and transparency.
      </p>
    </div>

  </div>

</section>
        

      {/* CONTENT */}
      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[0.8fr_1.2fr] gap-16">

          {/* LEFT */}
          <div className="md:sticky md:top-32 h-fit">
            <p className="text-sm text-[var(--primary)] mb-4 uppercase tracking-[0.3em]">
              Policy Overview
            </p>

            <div className="space-y-5">
              {sections.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 text-sm"
                >
                  <span className="text-[var(--primary)]">
                    0{index + 1}
                  </span>

                  <p>{item.title}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 h-[1px] w-24 bg-[var(--primary)]"></div>

            <p className="mt-6 text-sm text-[var(--primary)]">
              Last updated — May 2026
            </p>
          </div>

          {/* RIGHT */}
          <div className="border-l border-[var(--border)] pl-8 md:pl-14 space-y-20">

            {sections.map((item, index) => (
              <div key={index} className="relative">

                <span className="absolute -left-[41px] md:-left-[57px] top-2 w-4 h-4 rounded-full border border-[var(--primary)] bg-[var(--bg)]"></span>

                <p className="text-sm text-[var(--primary)] mb-4">
                  0{index + 1}
                </p>

                <h2 className="text-3xl md:text-5xl font-semibold text-[var(--text-h)] leading-tight mb-6">
                  {item.title}
                </h2>

                <p className="text-lg leading-relaxed max-w-3xl">
                  {item.text}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* FINAL SECTION */}
      <section className="px-6 pb-32">
        <div className="max-w-6xl mx-auto border-t border-[var(--border)] pt-16">

          <h2 className="text-4xl md:text-6xl font-semibold text-[var(--text-h)] leading-tight max-w-4xl">
            Trust is built through transparency, security, and responsible data handling.
          </h2>

          <p className="mt-8 text-lg leading-relaxed max-w-3xl">
            VerifySkills aims to create a secure and reliable ecosystem where
            students, institutions, and employers can interact with confidence.
          </p>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;