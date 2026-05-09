import React, { useState } from "react";
import StudentSidebar from "../../components/Student/StudentSidebar";

// IMPORT IMAGE
import emptyState from "../../assets/refresh.png";

const MyCredentials = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className="min-h-screen"
      style={{ background: "var(--bg)" }}
    >
      {/* SIDEBAR */}
      <StudentSidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />

      {/* MAIN CONTENT */}
      <div
        className={`p-6 transition-all duration-300 ${
          collapsed ? "sm:ml-20" : "sm:ml-64"
        }`}
      >
        {/* PAGE TITLE */}
        <h1
          className="text-3xl font-semibold mb-8"
          style={{ color: "var(--text-h)" }}
        >
          My Credentials
        </h1>

        {/* EMPTY STATE CARD */}
        <div
          className="max-w-3xl mx-auto rounded-3xl border p-10 flex flex-col items-center text-center"
          style={{
            background: "var(--surface)",
            borderColor: "var(--border)",
            boxShadow: "var(--shadow)",
          }}
        >
          {/* IMAGE */}
          <img
            src={emptyState}
            alt="No credentials"
            className="w-72 mb-8 opacity-90"
          />

          {/* HEADING */}
          <h2
            className="text-3xl font-semibold mb-3"
            style={{ color: "var(--text-h)" }}
          >
            No credentials uploaded yet
          </h2>

          {/* DESCRIPTION */}
          <p
            className="max-w-lg text-lg leading-relaxed mb-8"
            style={{ color: "var(--text)" }}
          >
            Upload your first credential to start managing
            and verifying your achievements.
          </p>

          {/* BUTTON */}
          <button
            className="px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-[1.02]"
            style={{
              background: "var(--primary)",
              color: "#fff",
            }}
          >
            + Upload Credential
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyCredentials;