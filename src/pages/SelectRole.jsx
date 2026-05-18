import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getDashboardPath } from "../utils/redirectByRole";

const SelectRole = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const idToken = location.state?.idToken;

  const handleRoleSelect = async (role) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ idToken, role }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Role selection failed");
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      navigate(getDashboardPath(data.user.role));
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bg)] px-6">
      <div className="max-w-xl w-full rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 text-center">
        <h1 className="text-3xl font-semibold text-[var(--text-h)] mb-3">
          Select Your Role
        </h1>

        <p className="text-[var(--text)] mb-8">
          Choose how you want to use VerifySkills.
        </p>

        <div className="grid gap-4">
          <button
            onClick={() => handleRoleSelect("Certificate holder")}
            className="py-4 rounded-xl bg-[var(--accent)] text-black font-medium"
          >
            Certificate Holder
          </button>

          <button
            onClick={() => handleRoleSelect("Institute")}
            className="py-4 rounded-xl bg-[var(--accent)] text-black font-medium"
          >
            Institute
          </button>

          <button
            onClick={() => handleRoleSelect("Employer")}
            className="py-4 rounded-xl bg-[var(--accent)] text-black font-medium"
          >
            Employer
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectRole;