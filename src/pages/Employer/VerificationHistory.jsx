import React, { useEffect, useState } from "react";
import EmployerSidebar from "../../components/Employer/EmployerSidebar";

const VerificationHistory = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [history, setHistory] = useState([]);

  const fetchHistory = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await fetch(
        "http://localhost:5000/api/certificates/verification-history",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await res.json();
      setHistory(data.history || []);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      <EmployerSidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      <div
        className={`p-6 transition-all duration-300 ${
          collapsed ? "sm:ml-20" : "sm:ml-64"
        }`}
      >
        <h1
          className="text-3xl font-semibold mb-6"
          style={{ color: "var(--text-h)" }}
        >
          Verification History
        </h1>

        <div
          className="rounded-3xl border overflow-hidden"
          style={{
            background: "var(--surface)",
            borderColor: "var(--border)",
          }}
        >
          <table className="w-full text-left">
            <thead style={{ background: "var(--accent-bg)" }}>
              <tr>
                <Th>Hash</Th>
                <Th>Status</Th>
                <Th>Date</Th>
              </tr>
            </thead>

            <tbody>
              {history.map((item, index) => (
                <tr
                  key={index}
                  className="border-t"
                  style={{ borderColor: "var(--border)" }}
                >
                  <Td>{item.hash}</Td>
                  <Td>
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        item.valid
                          ? "bg-green-500/10 text-green-400"
                          : "bg-red-500/10 text-red-400"
                      }`}
                    >
                      {item.valid ? "Valid" : "Invalid"}
                    </span>
                  </Td>
                  <Td>
                    {new Date(item.createdAt).toLocaleDateString()}
                  </Td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const Th = ({ children }) => (
  <th className="px-6 py-4 text-sm font-semibold text-[var(--text-h)]">
    {children}
  </th>
);

const Td = ({ children }) => (
  <td className="px-6 py-4 text-sm text-[var(--text)]">{children}</td>
);

export default VerificationHistory;