import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import hero from "../assets/login_Signup.jpg";
import { getDashboardPath } from "../utils/redirectByRole";
import Alert from "../components/Alert";

const Signup = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const [selectedRole, setSelectedRole] = useState(
  location.state?.role || "Certificate holder"
);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async () => {
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
          role: selectedRole,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Signup failed");
        return;
      }

      localStorage.setItem("user", JSON.stringify(data.user));

setAlertMessage("Account created successfully!");
setShowAlert(true);

setTimeout(() => {
  navigate(getDashboardPath(data.user.role));
}, 1000);
    } catch (error) {
      console.log(error);
      alert("Backend not connected. Please check server.");
    }
  };

  const handleGoogleSignup = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const idToken = await result.user.getIdToken();

      const response = await fetch("http://localhost:5000/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ idToken }),
      });

      const data = await response.json();

if (data.needsRole) {
  navigate("/select-role", { state: { idToken } });
  return;
}

if (!response.ok) {
  alert(data.message || "Google signup failed");
  return;
}

localStorage.setItem("token", data.token);
localStorage.setItem("user", JSON.stringify(data.user));

navigate(getDashboardPath(data.user.role));
    } catch (error) {
      console.log(error);
      alert("Google signup failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bg)] p-6">
      {showAlert && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50">
          <Alert message={alertMessage} onClose={() => setShowAlert(false)} />
        </div>
      )}

      <div
        className="w-full max-w-6xl flex rounded-3xl overflow-hidden border"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="hidden md:block w-1/2 relative">
          <img
            src={hero}
            alt="hero"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/60"></div>

          <div className="absolute top-6 left-6 flex items-center gap-2 z-10">
            <svg width="35" height="35" viewBox="0 0 32 32">
              <circle cx="4.7" cy="16" r="4.7" fill="var(--primary)" />
              <circle cx="16" cy="4.7" r="4.7" fill="var(--primary)" />
              <circle cx="16" cy="27.3" r="4.7" fill="var(--primary)" />
              <circle cx="27.3" cy="16" r="4.7" fill="var(--primary)" />
            </svg>

            <span className="text-xl text-[var(--text-h)] font-semibold">
              VerifySkills
            </span>
          </div>

          <div className="absolute bottom-10 left-8 text-white z-10">
            <h1 className="text-4xl font-semibold">Join VerifySkills</h1>
            <p className="text-sm text-[var(--text)] mt-2">
              Create your {selectedRole} account and start using VerifySkills
            </p>
          </div>
        </div>

        <div
          className="w-full md:w-1/2 p-10"
          style={{ background: "var(--bg)" }}
        >
          <h2 className="text-3xl text-[var(--text-h)] mb-6">
            Create An Account
          </h2>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="p-3 rounded-lg bg-[var(--surface)] border border-[var(--border)]"
              placeholder="First name"
            />

            <input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="p-3 rounded-lg bg-[var(--surface)] border border-[var(--border)]"
              placeholder="Last name"
            />
          </div>

          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 mb-4 rounded-lg bg-[var(--surface)] border border-[var(--border)]"
            placeholder="Enter your email"
          />

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 mb-4 rounded-lg bg-[var(--surface)] border border-[var(--border)]"
            placeholder="Password"
          />

          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full p-3 mb-6 rounded-lg bg-[var(--surface)] border border-[var(--border)]"
            placeholder="Confirm Password"
          />

          <button
            onClick={handleSignup}
            className="w-full py-3 rounded-xl font-medium"
            style={{
              background: "var(--accent)",
              color: "black",
            }}
          >
            Create an Account
          </button>

          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-[1px] bg-[var(--border)]"></div>
            <span className="text-sm text-[var(--text)]">or</span>
            <div className="flex-1 h-[1px] bg-[var(--border)]"></div>
          </div>

          <div className="flex justify-center gap-4">
            <button
              onClick={handleGoogleSignup}
              className="p-3 rounded-lg bg-[var(--surface)] hover:scale-130 transition"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                className="w-5"
                alt="Google"
              />
            </button>
          </div>

          <p className="text-center text-sm mt-6 text-[var(--text)]">
            Already have account?{" "}
            <Link to="/login" className="text-[var(--primary)]">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;