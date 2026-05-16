import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import hero from "../assets/login_Signup.jpg";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      navigate("/dashboard");
    } catch (error) {
      alert("Login failed. Please try again.");
      console.log(error);
    }
  };

  const handleGoogleLogin = async () => {
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

      if (!response.ok) {
        alert(data.message || "Google login failed");
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      navigate("/dashboard");
    } catch (error) {
      alert("Google login failed. Please try again.");
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bg)] p-6">
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
            <h1 className="text-4xl font-semibold">Welcome Back</h1>
            <p className="text-sm text-[var(--text)] mt-2">
              Login to continue your journey
            </p>
          </div>
        </div>

        <div
          className="w-full md:w-1/2 p-10"
          style={{ background: "var(--bg)" }}
        >
          <h2 className="text-3xl text-[var(--text-h)] mb-6">Login</h2>

          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 mb-4 rounded-lg bg-[var(--surface)] border border-[var(--border)]"
            placeholder="Enter your email"
          />

          <input
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 mb-6 rounded-lg bg-[var(--surface)] border border-[var(--border)]"
            placeholder="Password"
            type="password"
          />

          <button
            onClick={handleLogin}
            className="w-full py-3 rounded-xl font-medium"
            style={{
              background: "var(--accent)",
              color: "black",
            }}
          >
            Login
          </button>

          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-[1px] bg-[var(--border)]"></div>
            <span className="text-sm text-[var(--text)]">or</span>
            <div className="flex-1 h-[1px] bg-[var(--border)]"></div>
          </div>

          <div className="flex justify-center gap-4">
            <button
              onClick={handleGoogleLogin}
              className="p-3 rounded-lg bg-[var(--surface)] hover:scale-140 transition"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                className="w-5"
                alt="Google"
              />
            </button>
          </div>

          <p className="text-center text-sm mt-6 text-[var(--text)]">
            Don’t have account?{" "}
            <Link to="/signup" className="text-[var(--primary)]">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;