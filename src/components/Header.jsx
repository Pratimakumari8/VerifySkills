import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/prologo.png";

const Header = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "How it Works", path: "/how-it-works" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav
      className="flex items-center justify-between max-w-6xl mx-auto mt-6 px-5 py-0.5 rounded-full border text-sm"
      style={{
        background: "var(--surface)",
        borderColor: "var(--border)",
        color: "var(--text)",
      }}
    >
          <Link to="/" className="flex items-center gap-4">
        
          <img
            src={logo}
            alt="VerifySkills Logo"
            className="w-50 h-18 object-contain mix-blend-lighten"
          />
        
          <span className="font-semibold text-[var(--text-h)] text-2xl tracking-tight">
            
          </span>
        
        </Link>

      <div className="hidden md:flex items-center gap-8 ml-7">
        {navLinks.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className="relative overflow-hidden h-6 group"
          >
            <span className="block group-hover:-translate-y-full transition-transform duration-300 text-[var(--text)]">
              {item.name}
            </span>
            <span className="block absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-300 text-[var(--primary)]">
              {item.name}
            </span>
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-3">

        {/* LOGIN */}
        <Link to="/login">
          <button
            className="px-3 py-2 md:px-4 rounded-full text-sm font-medium transition border cursor-pointer hover:bg-[var(--primary)] hover:text-black"
            style={{ borderColor: "var(--border)", color: "var(--text)" }}
          >
            Login
          </button>
        </Link>

        {/* SIGNUP WITH ROLE */}
        <div className="relative">

          {/* BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="px-3 py-2 md:px-4 rounded-full text-sm font-medium transition cursor-pointer hover:brightness-150"
            style={{ background: "var(--accent)", color: "white" }}
          >
            Sign Up
          </button>

          {open && (
            <div
              className="absolute right-0 mt-2 w-44 rounded-xl shadow-lg z-50 overflow-hidden"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
              }}
            >
              {["Certificate holder", "Institute", "Employer"].map((role) => (
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