import React from "react";
import { Link } from "react-router-dom";
import hero from "../assets/login_Signup.jpg"; // same as landing

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bg)] p-6">

      <div className="w-full max-w-6xl flex rounded-3xl overflow-hidden border"
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
          
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full md:w-1/2 p-10"
          style={{ background: "var(--bg)" }}
        >

        

          {/* TITLE */}
          <h2 className="text-3xl text-[var(--text-h)] mb-6">
            Create An Account
          </h2>

          {/* INPUTS */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input className="p-3 rounded-lg bg-[var(--surface)] border border-[var(--border)]" placeholder="First name" />
            <input className="p-3 rounded-lg bg-[var(--surface)] border border-[var(--border)]" placeholder="Last name" />
          </div>

          <input className="w-full p-3 mb-4 rounded-lg bg-[var(--surface)] border border-[var(--border)]" placeholder="Enter your email" />

          <input className="w-full p-3 mb-4 rounded-lg bg-[var(--surface)] border border-[var(--border)]" placeholder="Password" />

          <input className="w-full p-3 mb-6 rounded-lg bg-[var(--surface)] border border-[var(--border)]" placeholder="Confirm Password" />

          {/* BUTTON */}
          <button
            className="w-full py-3 rounded-xl font-medium"
            style={{
              background: "var(--accent)",
              color: "black",
            }}
          >
            Create an Account
          </button>

          {/* OR */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-[1px] bg-[var(--border)]"></div>
            <span className="text-sm text-[var(--text)]">or</span>
            <div className="flex-1 h-[1px] bg-[var(--border)]"></div>
          </div>

          {/* SOCIAL BUTTONS */}
          <div className="flex justify-center gap-4">

            <button className="p-3 rounded-lg bg-[var(--surface)] hover:scale-130 transition">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" className="w-5" />
            </button>

          </div>

          {/* LINK */}
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