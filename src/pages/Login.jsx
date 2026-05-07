import React from "react";
import { Link } from "react-router-dom";
import hero from "../assets/login_Signup.jpg"; // same image as landing

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bg)] p-6">

      <div
        className="w-full max-w-6xl flex rounded-3xl overflow-hidden border"
        style={{ borderColor: "var(--border)" }}
      >

        {/* LEFT SIDE */}
        <div className="hidden md:block w-1/2 relative">

          {/* BACKGROUND IMAGE */}
          <img
            src={hero}
            alt="hero"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/60"></div>

          {/* LOGO */}
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

          {/* TEXT */}
          <div className="absolute bottom-10 left-8 text-white z-10">
            <h1 className="text-4xl font-semibold">Welcome Back</h1>
            <p className="text-sm text-[var(--text)] mt-2">
              Login to continue your journey
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div
          className="w-full md:w-1/2 p-10"
          style={{ background: "var(--bg)" }}
        >

          

          {/* TITLE */}
          <h2 className="text-3xl text-[var(--text-h)] mb-6">
            Login
          </h2>

          {/* INPUTS */}
          <input
            className="w-full p-3 mb-4 rounded-lg bg-[var(--surface)] border border-[var(--border)]"
            placeholder="Enter your email"
          />

          <input
            className="w-full p-3 mb-6 rounded-lg bg-[var(--surface)] border border-[var(--border)]"
            placeholder="Password"
            type="password"
          />

          {/* BUTTON */}
          <button
            className="w-full py-3 rounded-xl font-medium"
            style={{
              background: "var(--accent)",
              color: "black",
            }}
          >
            Login
          </button>

          {/* OR */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-[1px] bg-[var(--border)]"></div>
            <span className="text-sm text-[var(--text)]">or</span>
            <div className="flex-1 h-[1px] bg-[var(--border)]"></div>
          </div>

          {/* SOCIAL LOGIN */}
          <div className="flex justify-center gap-4">

            {/* GOOGLE */}
            <button className="p-3 rounded-lg bg-[var(--surface)] hover:scale-140 transition">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                className="w-5"
              />
            </button>

           

          </div>

          {/* LINK */}
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