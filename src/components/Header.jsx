import React from "react";

const Header = () => {
  return (
    <header className="w-full border-b border-[var(--border)] bg-[var(--surface)]">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <h1 className="text-xl font-semibold text-[var(--primary)]">
          VerifySkills
        </h1>

        {/* Nav */}
        <nav className="hidden md:flex gap-6 text-[var(--text)]">
          <a href="#" className="hover:text-[var(--primary)]">Home</a>
          <a href="#" className="hover:text-[var(--primary)]">Features</a>
          <a href="#" className="hover:text-[var(--primary)]">How it Works</a>
        </nav>

        {/* CTA */}
        <button className="bg-[var(--accent)] text-white px-4 py-2 rounded-lg hover:opacity-90 transition">
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Header;