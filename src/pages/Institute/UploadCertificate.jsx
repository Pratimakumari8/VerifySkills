import React, { useState } from "react";
import InstituteSidebar from "../../components/Institute/InstituteSidebar";
import { uploadCertificate } from "../../api/certificateApi";

const UploadCertificate = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [certificateFile, setCertificateFile] = useState(null);

  const savedUser = JSON.parse(localStorage.getItem("user")) || {};

  const [form, setForm] = useState({
    studentName: "",
    studentEmail: "",
    courseName: "",
    certificateId: "",
    instituteName: savedUser.instituteName || savedUser.firstName || "VerifySkills Institute",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setCertificateFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!certificateFile) {
      alert("Please select certificate file");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("studentName", form.studentName);
      formData.append("studentEmail", form.studentEmail);
      formData.append("courseName", form.courseName);
      formData.append("certificateId", form.certificateId);
      formData.append("instituteName", form.instituteName);

      // important: backend multer expects name "certificate"
      formData.append("certificate", certificateFile);

      const result = await uploadCertificate(formData);

      alert("Certificate uploaded successfully!");

      console.log("Uploaded Certificate:", result);

      setForm({
        studentName: "",
        studentEmail: "",
        courseName: "",
        certificateId: "",
        instituteName: form.instituteName,
      });
      setCertificateFile(null);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      <InstituteSidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      <div className={`p-6 transition-all duration-300 ${collapsed ? "sm:ml-20" : "sm:ml-64"}`}>
        <h1 className="text-3xl font-semibold mb-2" style={{ color: "var(--text-h)" }}>
          Upload Certificate
        </h1>

        <p className="mb-8" style={{ color: "var(--text)" }}>
          Upload certificate details. Backend will generate hash, store on Solana, and save in MongoDB.
        </p>

        <form
          onSubmit={handleSubmit}
          className="max-w-3xl rounded-3xl border p-8"
          style={{ background: "var(--surface)", borderColor: "var(--border)" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <Input
              label="Student Name"
              name="studentName"
              value={form.studentName}
              onChange={handleChange}
            />

            <Input
              label="Student Email"
              name="studentEmail"
              type="email"
              value={form.studentEmail}
              onChange={handleChange}
            />

            <Input
              label="Course Name"
              name="courseName"
              value={form.courseName}
              onChange={handleChange}
            />

            <Input
              label="Certificate ID"
              name="certificateId"
              value={form.certificateId}
              onChange={handleChange}
            />

            <Input
              label="Institute Name"
              name="instituteName"
              value={form.instituteName}
              onChange={handleChange}
            />

            <div>
              <label className="text-sm" style={{ color: "var(--text)" }}>
                Certificate File
              </label>

              <input
                type="file"
                accept=".pdf,.png,.jpg,.jpeg"
                onChange={handleFileChange}
                className="w-full mt-2 p-3 rounded-xl border bg-transparent"
                style={{ borderColor: "var(--border)", color: "var(--text-h)" }}
              />

              {certificateFile && (
                <p className="text-sm mt-2" style={{ color: "var(--primary)" }}>
                  Selected: {certificateFile.name}
                </p>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-8 px-7 py-3 rounded-xl font-medium disabled:opacity-60"
            style={{ background: "var(--primary)", color: "#fff" }}
          >
            {loading ? "Uploading..." : "Upload Certificate"}
          </button>
        </form>
      </div>
    </div>
  );
};

const Input = ({ label, name, value, onChange, type = "text" }) => (
  <div>
    <label className="text-sm" style={{ color: "var(--text)" }}>
      {label}
    </label>

    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required
      className="w-full mt-2 p-3 rounded-xl border bg-transparent outline-none"
      style={{ borderColor: "var(--border)", color: "var(--text-h)" }}
    />
  </div>
);

export default UploadCertificate;