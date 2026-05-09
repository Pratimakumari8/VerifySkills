import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { ShieldAlert, Blocks, Code2, FileCheck2, Users } from "lucide-react";

import member1 from "../assets/member1.jpeg";
import member2 from "../assets/member2.jpeg";
import member3 from "../assets/member3.jpeg";
import member4 from "../assets/member4.jpeg";

const AboutUs = () => {
  const team = [
    {
      name: "Pratima Kumari",
      role: "Blockchain Developer",
      image: member1,
      points: [
        "Led the blockchain-based technical development of the project.",
        "Designed and implemented secure blockchain components.",
        "Managed system architecture and guided technical decisions.",
        "Ensured secure and efficient credential data handling.",
      ],
    },
    {
      name: "Akshat Agrawal",
      role: "Web Developer",
      image: member2,
      points: [
        "Supported frontend/backend implementation and debugging.",
        "Developed backend features for the platform.",
        "Assisted in integrating application components.",
    
      ],
    },
    {
      name: "Radhika Chaturvedi",
      role: "Web Developer",
      image: member3,
      points: [
        "Developed frontend and backend features for the platform.",
        "Contributed to UI development and feature implementation.",
        "Contributed to coding tasks and feature development.",
        "Helped improve user experience and application flow.",
      ],
    },
    {
      name: "Priyanshee Manter",
      role: "Documentation & Report Manager",
      image: member4,
      points: [
        "Managed project documentation and report writing.",
        "Prepared content for project presentation.",
        "Conducted testing support and helped organize project details.",
      ],
    },
  ];

  const values = [
    {
      title: "Our Mission",
      desc: "To make certificate verification instant, secure, and reliable for every stakeholder.",
      icon: <Blocks size={26} />,
    },
    {
      title: "Our Vision",
      desc: "To build a trusted digital credential ecosystem for students, institutes, and employers.",
      icon: <Users size={26} />,
    },
    {
      title: "Our Approach",
      desc: "We use blockchain concepts to prevent tampering and enable transparent verification.",
      icon: <ShieldAlert size={26} />,
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <Header />

      {/* HERO */}
      <section className="px-6 pt-36 pb-24">
        <div className="max-w-6xl mx-auto">
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
            className="text-4xl md:text-7xl font-semibold text-[var(--text-h)] max-w-5xl leading-tight"
          >
            We are building trust into every skill certificate.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="mt-8 max-w-3xl text-lg leading-relaxed"
          >
            We found that many companies struggle with fake certificates and
            manual verification. Recruiters have to verify candidate documents
            manually, which takes too much time and slows down hiring.
            VerifySkills was created to solve this problem with instant, secure,
            and blockchain-based certificate verification.
          </motion.p>
        </div>
      </section>

      {/* STORY */}
      <section className="px-6 pb-28">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-[var(--primary)] mb-4">
              Why we started
            </p>

            <h2 className="text-3xl md:text-5xl font-semibold text-[var(--text-h)] leading-tight">
              Fake certificates create trust issues between candidates and companies.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-5 text-lg leading-relaxed"
          >
            <p>
              Almost every company faces challenges with fake certificates.
              Manual verification is slow, repetitive, and difficult to manage
              when many candidates apply.
            </p>

            <p>
              Our goal is to make certificate verification simple. Institutes
              issue verified credentials, students own and share them, and
              employers verify them instantly.
            </p>

            <p>
              With blockchain concepts, VerifySkills helps make certificates
              tamper-proof, transparent, and trustworthy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* VALUES */}
      <section className="px-6 pb-28">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {values.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border-t border-[var(--border)] pt-8"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{
                  background: "var(--accent-bg)",
                  border: "1px solid var(--accent-border)",
                  color: "var(--primary)",
                }}
              >
                {item.icon}
              </div>

              <h3 className="text-2xl font-semibold text-[var(--text-h)] mb-3">
                {item.title}
              </h3>

              <p className="leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="px-6 pb-32">
        <div className="max-w-6xl mx-auto mb-20">
          <p className="text-sm text-[var(--primary)] mb-4">Our Team</p>

          <h2 className="text-4xl md:text-6xl font-semibold text-[var(--text-h)] leading-tight max-w-4xl">
            The people building VerifySkills.
          </h2>

          <p className="mt-6 max-w-2xl leading-relaxed">
            We are a focused team working together to solve fake certificate
            verification through blockchain-based solutions and modern web
            technologies.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-24">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 !== 0 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <img
                  src={member.image}
                  alt={member.name}
                 className="w-[260px] md:w-[320px] h-[320px] md:h-[380px] object-cover rounded-3xl mx-auto"
                />
              </div>

              <div>
                <p className="text-sm text-[var(--primary)] mb-3">
                  0{index + 1}
                </p>

                <h3 className="text-4xl font-semibold text-[var(--text-h)]">
                  {member.name}
                </h3>

                <p className="text-lg text-[var(--primary)] mt-2 mb-6">
                  {member.role}
                </p>

                <div className="space-y-4 leading-relaxed">
                  {member.points.map((point) => (
                    <p key={point}>{point}</p>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;