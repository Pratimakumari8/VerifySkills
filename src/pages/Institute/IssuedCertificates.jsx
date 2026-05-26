import React, { useEffect, useState } from "react";
import InstituteSidebar from "../../components/Institute/InstituteSidebar";
import { Eye, Trash2, RefreshCw } from "lucide-react";

const IssuedCertificates = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCertificates = async () => {
    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      const res = await fetch(
        "http://localhost:5000/api/certificates/institute/my-certificates",
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

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this certificate?"
    );

    if (!confirmDelete) return;

    try {
      const token = localStorage.getItem("token");

      const res = await fetch(`http://localhost:5000/api/certificates/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to delete certificate");
      }

      alert("Certificate deleted successfully");
      fetchCertificates();
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    fetchCertificates();
  }, []);

  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      <InstituteSidebar collapsed={collapsed} setCollapsed={setCollapsed} />

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
              Issued Certificates
            </h1>

            <p style={{ color: "var(--text)" }}>
              View all certificates uploaded by your institute.
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

        <div
          className="rounded-3xl border overflow-hidden"
          style={{
            background: "var(--surface)",
            borderColor: "var(--border)",
          }}
        >
          {loading ? (
            <div className="p-8 text-center" style={{ color: "var(--text)" }}>
              Loading certificates...
            </div>
          ) : certificates.length === 0 ? (
            <div className="p-8 text-center" style={{ color: "var(--text)" }}>
              No certificates uploaded yet.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1100px]">
                <thead style={{ background: "var(--accent-bg)" }}>
                  <tr>
                    <Th>Student Name</Th>
                    <Th>Email</Th>
                    <Th>Course</Th>
                    <Th>Certificate ID</Th>
                    <Th>Institute</Th>
                    <Th>Issue Date</Th>
                    <Th>Certificate Hash</Th>
                    <Th>Blockchain Tx</Th>
                    <Th>Actions</Th>
                  </tr>
                </thead>

                <tbody>
                  {certificates.map((cert) => (
                    <tr
                      key={cert._id}
                      className="border-t"
                      style={{ borderColor: "var(--border)" }}
                    >
                      <Td>{cert.studentName}</Td>
                      <Td>{cert.studentEmail}</Td>
                      <Td>{cert.courseName}</Td>
                      <Td>{cert.certificateId}</Td>
                      <Td>{cert.instituteName}</Td>
                      <Td>
                        {cert.issueDate
                          ? new Date(cert.issueDate).toLocaleDateString()
                          : "N/A"}
                      </Td>
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
                      <Td>
                        <div className="flex items-center gap-3">
                          <a
                            href={cert.certificateUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium"
                            style={{
                              background: "var(--primary)",
                              color: "#fff",
                            }}
                          >
                            <Eye size={16} />
                            View
                          </a>

                          <button
                            onClick={() => handleDelete(cert._id)}
                            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium bg-red-500/10 text-red-400"
                          >
                            <Trash2 size={16} />
                            Delete
                          </button>
                        </div>
                      </Td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Th = ({ children }) => (
  <th
    className="px-5 py-4 text-left text-sm font-semibold whitespace-nowrap"
    style={{ color: "var(--text-h)" }}
  >
    {children}
  </th>
);

const Td = ({ children }) => (
  <td
    className="px-5 py-4 text-sm whitespace-nowrap"
    style={{ color: "var(--text)" }}
  >
    {children || "N/A"}
  </td>
);

export default IssuedCertificates;