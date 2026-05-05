import React, { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav
      className="flex items-center justify-between max-w-6xl mx-auto mt-6 px-6 py-4 rounded-full border text-sm"
      style={{
        background: "var(--surface)",
        borderColor: "var(--border)",
        color: "var(--text)",
      }}
    >
      {/* LOGO + NAME */}
      <a href="#" className="flex items-center gap-3">
        <svg width="40" height="40" viewBox="0 0 32 32" fill="none">
          <circle cx="4.706" cy="16" r="4.706" fill="var(--primary)" />
          <circle cx="16.001" cy="4.706" r="4.706" fill="var(--primary)" />
          <circle cx="16.001" cy="27.294" r="4.706" fill="var(--primary)" />
          <circle cx="27.294" cy="16" r="4.706" fill="var(--primary)" />
        </svg>
        <span className="font-semibold text-[var(--text-h)] text-2xl">
          VerifySkills
        </span>
      </a>

      {/* NAV LINKS */}
      <div className="hidden md:flex items-center gap-8 ml-7">
        {["Home", "How it works", "About us"].map((item) => (
          <a key={item} href="#" className="relative overflow-hidden h-6 group">
            <span className="block group-hover:-translate-y-full transition-transform duration-300 text-[var(--text)]">
              {item}
            </span>
            <span className="block absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-300 text-[var(--primary)]">
              {item}
            </span>
          </a>
        ))}
      </div>

      {/* BUTTONS */}
      <div className="flex items-center gap-3">
       <Link to="/login">
  <button
    className="px-3 py-2 md:px-4 rounded-full text-sm font-medium transition border cursor-pointer hover:bg-[var(--primary)] hover:text-black"
    style={{ borderColor: "var(--border)", color: "var(--text)" }}
  >
    Login
  </button>
</Link>

       <div className="relative">
  <Link to="/signup">
  <button
    className="px-3 py-2 md:px-4 rounded-full text-sm font-medium transition cursor-pointer hover:brightness-150"
    style={{ background: "var(--accent)", color: "white" }}
  >
    Sign Up 
  </button>
</Link>
  {open && (
    <div
      className="absolute right-0 mt-2 w-44 rounded-xl shadow-lg z-50 overflow-hidden"
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
      }}
    >
      {["Student", "Institute", "Employer"].map((role) => (
        <div
          key={role}
          className="px-4 py-2 text-sm cursor-pointer transition hover:bg-[var(--accent-bg)]"
        >
          {role}
        </div>
      ))}
    </div>
  )}
</div>
      </div>
    </nav>
  );
};

export default Header;