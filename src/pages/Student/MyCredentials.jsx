import React, { useEffect, useState } from "react";
import StudentSidebar from "../../components/Student/StudentSidebar";
import { Eye, RefreshCw, ShieldCheck, QrCode, Copy } from "lucide-react";
import emptyState from "../../assets/refresh.png";

const MyCredentials = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCertificates = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");

      const res = await fetch(
        "http://localhost:5000/api/certificates/student/my-certificates",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to fetch certificates");
      }

      setCertificates(data.certificates || []);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const copyHash = (hash) => {
    navigator.clipboard.writeText(hash);
    alert("Certificate hash copied!");
  };

  useEffect(() => {
    fetchCertificates();
  }, []);

  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      <StudentSidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      <div
        className={`p-6 transition-all duration-300 ${
          collapsed ? "sm:ml-20" : "sm:ml-64"
        }`}
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1
              className="text-3xl font-semibold mb-2"
              style={{ color: "var(--text-h)" }}
            >
              My Credentials
            </h1>
            <p style={{ color: "var(--text)" }}>
              Certificates issued to your registered email.
            </p>
          </div>

          <button
            onClick={fetchCertificates}
            className="flex items-center gap-2 px-5 py-3 rounded-xl font-medium"
            style={{ background: "var(--primary)", color: "#fff" }}
          >
            <RefreshCw size={18} />
            Refresh
          </button>
        </div>

        {loading ? (
          <div
            className="rounded-3xl border p-10 text-center"
            style={{
              background: "var(--surface)",
              borderColor: "var(--border)",
              color: "var(--text)",
            }}
          >
            Loading certificates...
          </div>
        ) : certificates.length === 0 ? (
          <div
            className="max-w-3xl mx-auto rounded-3xl border p-10 flex flex-col items-center text-center"
            style={{
              background: "var(--surface)",
              borderColor: "var(--border)",
              boxShadow: "var(--shadow)",
            }}
          >
            <img
              src={emptyState}
              alt="No credentials"
              className="w-72 mb-8 opacity-90"
            />

            <h2
              className="text-3xl font-semibold mb-3"
              style={{ color: "var(--text-h)" }}
            >
              No credentials issued yet
            </h2>

            <p
              className="max-w-lg text-lg leading-relaxed"
              style={{ color: "var(--text)" }}
            >
              When an institute uploads a certificate using your registered
              email, it will appear here automatically.
            </p>
          </div>
        ) : (
          <div
            className="rounded-3xl border overflow-hidden"
            style={{
              background: "var(--surface)",
              borderColor: "var(--border)",
            }}
          >
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1150px] text-left">
                <thead style={{ background: "var(--accent-bg)" }}>
                  <tr>
                    <Th>Course</Th>
                    <Th>Certificate ID</Th>
                    <Th>Issued By</Th>
                    <Th>Issue Date</Th>
                    <Th>Status</Th>
                    <Th>Certificate Hash</Th>
                    <Th>Blockchain Tx</Th>
                    <Th>Action</Th>
                  </tr>
                </thead>

                <tbody>
                  {certificates.map((cert) => (
                    <tr
                      key={cert._id}
                      className="border-t"
                      style={{ borderColor: "var(--border)" }}
                    >
                      <Td strong>{cert.courseName}</Td>
                      <Td>{cert.certificateId}</Td>
                      <Td>{cert.instituteName}</Td>
                      <Td>
                        {cert.issueDate
                          ? new Date(cert.issueDate).toLocaleDateString()
                          : "N/A"}
                      </Td>

                      <td className="px-6 py-5">
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm bg-green-500/10 text-green-400">
                          <ShieldCheck size={15} />
                          Verified
                        </span>
                      </td>

                      <Td>
                        <span className="block max-w-[170px] truncate">
                          {cert.certificateHash}
                        </span>
                      </Td>

                      <Td>
                        <span className="block max-w-[170px] truncate">
                          {cert.blockchainTxHash}
                        </span>
                      </Td>

                      <td className="px-6 py-5">
                        <div className="flex items-center gap-3">
                          <a
                            href={cert.certificateUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium"
                            style={{
                              background: "var(--primary)",
                              color: "#fff",
                            }}
                          >
                            <Eye size={16} />
                            View
                          </a>

                          {cert.qrCodeUrl && (
                            <a
                              href={cert.qrCodeUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium"
                              style={{
                                background: "var(--primary)",
                                color: "#fff",
                              }}
                            >
                              <QrCode size={16} />
                              QR
                            </a>
                          )}

                          <button
                            onClick={() => copyHash(cert.certificateHash)}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium border"
                            style={{
                              borderColor: "var(--border)",
                              color: "var(--text-h)",
                            }}
                          >
                            <Copy size={16} />
                            Copy Hash
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Th = ({ children }) => (
  <th
    className="px-6 py-4 text-sm font-semibold whitespace-nowrap"
    style={{ color: "var(--text-h)" }}
  >
    {children}
  </th>
);

const Td = ({ children, strong }) => (
  <td
    className={`px-6 py-5 text-sm whitespace-nowrap ${
      strong ? "font-medium" : ""
    }`}
    style={{ color: strong ? "var(--text-h)" : "var(--text)" }}
  >
    {children || "N/A"}
  </td>
);

export default MyCredentials;