import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployerSidebar from "../../components/Employer/EmployerSidebar";

const EmployerDashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      <EmployerSidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      <div
        className={`p-6 transition-all duration-300 ${
          collapsed ? "sm:ml-20" : "sm:ml-64"
        }`}
      >
        <h1
          className="text-3xl font-semibold mb-2"
          style={{ color: "var(--text-h)" }}
        >
          Employer Dashboard
        </h1>

        <p className="mb-8" style={{ color: "var(--text)" }}>
          Verify student certificates instantly using certificate hash or QR code.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard
            title="Verified Certificates"
            value="0"
            text="Successfully verified"
            color="#22c55e"
          />
          <StatCard
            title="Invalid Certificates"
            value="0"
            text="Failed verification"
            color="#ef4444"
          />
          <StatCard
            title="Total Checks"
            value="0"
            text="Verification attempts"
            color="#f59e0b"
          />
        </div>

        <div
          className="mt-8 rounded-3xl border p-8"
          style={{
            background: "var(--surface)",
            borderColor: "var(--border)",
          }}
        >
          <h2
            className="text-2xl font-semibold mb-4"
            style={{ color: "var(--text-h)" }}
          >
            Employer Verification Flow
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              "Enter Certificate Hash",
              "Check Database Record",
              "Verify Blockchain Hash",
              "Show Valid / Invalid Result",
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border p-5 text-center"
                style={{
                  borderColor: "var(--border)",
                  background: "rgba(255,255,255,0.03)",
                }}
              >
                <div className="text-3xl mb-3">{index + 1}</div>
                <p style={{ color: "var(--text-h)" }}>{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="mt-8 rounded-3xl border p-8 text-center"
          style={{
            background: "var(--surface)",
            borderColor: "var(--border)",
          }}
        >
          <h2
            className="text-2xl font-semibold mb-3"
            style={{ color: "var(--text-h)" }}
          >
            Ready to verify a certificate?
          </h2>

          <p className="mb-6" style={{ color: "var(--text)" }}>
            Enter the certificate hash or scan QR code to check authenticity.
          </p>

          <button
            onClick={() => navigate("/verify-certificate")}
            className="px-6 py-3 rounded-xl font-medium"
            style={{ background: "var(--primary)", color: "#fff" }}
          >
            Verify Certificate
          </button>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, text, color }) => (
  <div
    className="p-6 rounded-3xl border"
    style={{
      background: "var(--surface)",
      borderColor: "var(--border)",
    }}
  >
    <p className="text-lg" style={{ color: "var(--text)" }}>
      {title}
    </p>
    <h2
      className="text-5xl font-bold mt-6"
      style={{ color: "var(--text-h)" }}
    >
      {value}
    </h2>
    <p className="mt-3 text-sm" style={{ color }}>
      {text}
    </p>
  </div>
);

export default EmployerDashboard;