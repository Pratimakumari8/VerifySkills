import React, { useState } from "react";
import InstituteSidebar from "../../components/Institute/InstituteSidebar";
import { useNavigate } from "react-router-dom";

const InstituteDashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
const navigate = useNavigate();
  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      <InstituteSidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      <div className={`p-6 transition-all duration-300 ${collapsed ? "sm:ml-20" : "sm:ml-64"}`}>
        <h1 className="text-3xl font-semibold mb-2" style={{ color: "var(--text-h)" }}>
          Institute Dashboard
        </h1>

        <p className="mb-8" style={{ color: "var(--text)" }}>
          Upload certificates, generate hashes, and manage issued credentials.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard title="Total Certificates" value="0" text="Certificates uploaded" color="#f59e0b" />
          <StatCard title="Blockchain Stored" value="0" text="Hashes stored on chain" color="#22c55e" />
          <StatCard title="Pending Uploads" value="0" text="Waiting for processing" color="#ef4444" />
        </div>

        <div
          className="mt-8 rounded-3xl border p-8"
          style={{ background: "var(--surface)", borderColor: "var(--border)" }}
        >
          <h2 className="text-2xl font-semibold mb-4" style={{ color: "var(--text-h)" }}>
            Certificate Upload Flow
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {["Upload Certificate", "Generate Hash", "Store in Blockchain", "Save in Database"].map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border p-5 text-center"
                style={{ borderColor: "var(--border)", background: "rgba(255,255,255,0.03)" }}
              >
                <div className="text-3xl mb-3">{index + 1}</div>
                <p style={{ color: "var(--text-h)" }}>{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="mt-8 rounded-3xl border p-8 text-center"
          style={{ background: "var(--surface)", borderColor: "var(--border)" }}
        >
          <h2 className="text-2xl font-semibold mb-3" style={{ color: "var(--text-h)" }}>
            Ready to issue a new certificate?
          </h2>

          <p className="mb-6" style={{ color: "var(--text)" }}>
            Upload learner certificate details and send them to backend for hash generation.
          </p>

         <button
  onClick={() => navigate("/upload-certificate")}
  className="px-6 py-3 rounded-xl font-medium"
  style={{ background: "var(--primary)", color: "#fff" }}
>
  + Upload Certificate
</button>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, text, color }) => (
  <div
    className="p-6 rounded-3xl border"
    style={{ background: "var(--surface)", borderColor: "var(--border)" }}
  >
    <p className="text-lg" style={{ color: "var(--text)" }}>{title}</p>
    <h2 className="text-5xl font-bold mt-6" style={{ color: "var(--text-h)" }}>{value}</h2>
    <p className="mt-3 text-sm" style={{ color }}>{text}</p>
  </div>
);

export default InstituteDashboard;