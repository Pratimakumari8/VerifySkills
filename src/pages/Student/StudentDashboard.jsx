import React, { useState } from "react";
import StudentSidebar from "../../components/Student/StudentSidebar";

const Dashboard = () => {
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

        <h1
          className="text-3xl font-semibold mb-6"
          style={{ color: "var(--text-h)" }}
        >
          Dashboard
        </h1>

        {/* STATS CARDS */}
       {/* STATS CARDS */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

  {/* TOTAL CREDENTIALS */}
  <div
    className="p-6 rounded-3xl border relative"
    style={{
      background: "var(--surface)",
      borderColor: "var(--border)",
    }}
  >
    {/* ICON */}
    <div
      className="absolute top-6 right-6"
      style={{ color: "#f59e0b" }}
    >
      <svg
        className="w-7 h-7"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 5v14M9 5v14M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
        />
      </svg>
    </div>

    <p
      className="text-lg"
      style={{ color: "var(--text)" }}
    >
      Total Credentials
    </p>

    <h2
      className="text-5xl font-bold mt-6"
      style={{ color: "var(--text-h)" }}
    >
      12
    </h2>

    <p
      className="mt-3 text-sm"
     style={{ color: "#f59e0b" }}
    >
      Uploaded credentials
    </p>
  </div>

  {/* VERIFIED */}
  <div
    className="p-6 rounded-3xl border relative"
    style={{
      background: "var(--surface)",
      borderColor: "var(--border)",
    }}
  >
    {/* ICON */}
    <div
      className="absolute top-6 right-6"
      style={{ color: "#22c55e" }}
    >
      <svg
        className="w-7 h-7"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4"
        />
        <path
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 12c0 1.66-.67 3.16-1.76 4.24A5.98 5.98 0 0 1 15 18H9a6 6 0 1 1 0-12h6a6 6 0 0 1 6 6Z"
        />
      </svg>
    </div>

    <p
      className="text-lg"
      style={{ color: "var(--text)" }}
    >
      Verified
    </p>

    <h2
      className="text-5xl font-bold mt-6"
      style={{ color: "var(--text-h)" }}
    >
      9
    </h2>

    <p
      className="mt-3 text-sm"
      style={{ color: "#22c55e" }}
    >
      Successfully verified
    </p>
  </div>

  {/* PENDING */}
  <div
    className="p-6 rounded-3xl border relative"
    style={{
      background: "var(--surface)",
      borderColor: "var(--border)",
    }}
  >
    {/* ICON */}
    <div
      className="absolute top-6 right-6"
      style={{ color: "#f59e0b" }}
    >
      <svg
        className="w-7 h-7"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8v4l3 3"
        />
        <circle
          cx="12"
          cy="12"
          r="9"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    </div>

    <p
      className="text-lg"
      style={{ color: "var(--text)" }}
    >
      Pending
    </p>

    <h2
      className="text-5xl font-bold mt-6"
      style={{ color: "var(--text-h)" }}
    >
      3
    </h2>

    <p
      className="mt-3 text-sm"
      style={{ color: "#f59e0b" }}
    >
      Awaiting verification
    </p>
  </div>

</div>
{/* RECENT CREDENTIALS */}
<div
  className="mt-8 rounded-3xl border overflow-hidden"
  style={{
    background: "var(--surface)",
    borderColor: "var(--border)",
  }}
>

  {/* HEADER */}
  <div className="px-6 py-5 border-b"
    style={{ borderColor: "var(--border)" }}
  >
    <h2
      className="text-2xl font-semibold"
      style={{ color: "var(--text-h)" }}
    >
      Recent Credentials
    </h2>
  </div>

  {/* TABLE */}
  <div className="overflow-x-auto">
    <table className="w-full text-left">

      {/* TABLE HEAD */}
      <thead
        style={{
          background: "rgba(255,255,255,0.03)",
          color: "var(--text)",
        }}
      >
        <tr>
          <th className="px-6 py-4 font-medium">
            Credential
          </th>

          <th className="px-6 py-4 font-medium">
            Issued By
          </th>

          <th className="px-6 py-4 font-medium">
            Status
          </th>

          <th className="px-6 py-4 font-medium">
            Date
          </th>
        </tr>
      </thead>

      {/* TABLE BODY */}
      <tbody>

        {/* ROW 1 */}
        <tr
          className="border-t"
          style={{ borderColor: "var(--border)" }}
        >
          <td
            className="px-6 py-5 font-medium"
            style={{ color: "var(--text-h)" }}
          >
            React Development Certificate
          </td>

          <td
            className="px-6 py-5"
            style={{ color: "var(--text)" }}
          >
            Coursera
          </td>

          <td className="px-6 py-5">
            <span className="px-3 py-1 rounded-full text-sm bg-green-500/10 text-green-400">
              Verified
            </span>
          </td>

          <td
            className="px-6 py-5"
            style={{ color: "var(--text)" }}
          >
            12 Aug 2025
          </td>
        </tr>

        {/* ROW 2 */}
        <tr
          className="border-t"
          style={{ borderColor: "var(--border)" }}
        >
          <td
            className="px-6 py-5 font-medium"
            style={{ color: "var(--text-h)" }}
          >
            AWS Cloud Practitioner
          </td>

          <td
            className="px-6 py-5"
            style={{ color: "var(--text)" }}
          >
            AWS Academy
          </td>

          <td className="px-6 py-5">
            <span className="px-3 py-1 rounded-full text-sm bg-yellow-500/10 text-yellow-400">
              Pending
            </span>
          </td>

          <td
            className="px-6 py-5"
            style={{ color: "var(--text)" }}
          >
            5 Aug 2025
          </td>
        </tr>

        {/* ROW 3 */}
        <tr
          className="border-t"
          style={{ borderColor: "var(--border)" }}
        >
          <td
            className="px-6 py-5 font-medium"
            style={{ color: "var(--text-h)" }}
          >
            Java Programming Masterclass
          </td>

          <td
            className="px-6 py-5"
            style={{ color: "var(--text)" }}
          >
            Udemy
          </td>

          <td className="px-6 py-5">
            <span className="px-3 py-1 rounded-full text-sm bg-green-500/10 text-green-400">
              Verified
            </span>
          </td>

          <td
            className="px-6 py-5"
            style={{ color: "var(--text)" }}
          >
            28 Jul 2025
          </td>
        </tr>

      </tbody>
    </table>
  </div>
</div>
      </div>
    </div>
  );
};

export default Dashboard;