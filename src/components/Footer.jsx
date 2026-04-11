import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)] mt-16">
      <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-[var(--text)] flex flex-col md:flex-row justify-between items-center gap-4">
        
        <p>© 2026 VerifySkills. All rights reserved.</p>

        <div className="flex gap-4">
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;