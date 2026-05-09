import React from "react";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/LinkedIn.png";
import x from "../assets/twitter.png";
import github from "../assets/github.png";
import logo from "../assets/prologo.png";
const Footer = () => {
  return (
    <footer className="relative mt-32 border-t border-[var(--border)] overflow-hidden pb-32">

      {/* TOP CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-20 text-[var(--text)]">

        {/* LOGO */}
        <div>
          <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="VerifySkills Logo"
            className="w-34 h-11 object-contain"
          />
          </div>
  {/* SOCIAL ICONS */}
          <p className="text-sm mt-0 opacity-90">
            © 2026 VerifySkills
          </p>
          <div className="flex items-center gap-4 mt-4">

  <a href="#" className="hover:opacity-80 transition">
    <img src={linkedin} alt="linkedin"className="w-7 h-7 filter invert opacity-70 hover:opacity-100 hover:scale-110 transition duration-300" />
  </a>

  <a href="#" className="hover:opacity-80 transition">
    <img src={github} alt="github" className="w-6 h-6 filter invert opacity-70 hover:opacity-100 hover:scale-110 transition duration-300" />
  </a>

  <a href="#" className="hover:opacity-80 transition">
    <img src={x} alt="x" className="w-5 h-5 filter invert opacity-70 hover:opacity-100 hover:scale-110 transition duration-300" />
  </a>

  <a href="#" className="hover:opacity-80 transition">
    <img src={instagram} alt="instagram" className="w-6 h-6 filter invert opacity-70 hover:opacity-100 hover:scale-110 transition duration-300"/>
  </a>

</div>
        </div>

        {/* PLATFORM */}
        <div>
          <h3 className="text-sm font-semibold mb-4 text-[var(--text-h)]">
            Platform
          </h3>
          <ul className="space-y-2 text-sm">
            <li> <a
       href="/How-it-Works"
       className="hover:text-[var(--accent)] transition"
  >
    How it Works</a>
    </li>
            <li className="hover:text-[var(--accent)] transition">Pricing</li>
          </ul>
        </div>

        {/* ENTERPRISE */}
        <div>
          <h3 className="text-sm font-semibold mb-4 text-[var(--text-h)]">
            Enterprise
          </h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/standards" className="hover:text-[var(--accent)] transition">
              Standards
            </a></li>
            <li> <a
       href="/trust-center"
       className="hover:text-[var(--accent)] transition"
  >
    Trust Center
  </a>
</li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="text-sm font-semibold mb-4 text-[var(--text-h)]">
            Company
          </h3>
            <ul className="space-y-2 text-sm">
    <li>
      <a href="/about" className="hover:text-[var(--accent)] transition">
        About 
      </a>
    </li>

  <  li>
      <a href="/careers" className="hover:text-[var(--accent)] transition">
        Careers
      </a>
    </li>

    <li>
      <a href="/privacy" className="hover:text-[var(--accent)  ] transition">
          Privacy Policy  
        </a>  
      </li  >  
  
    <li>
      <a href="/terms" className="hover:text-[var(--accent)] transition">
        Terms of Service
      </a>
    </li>
</ul>
          
        </div>
      </div>

      {/* BIG BACKGROUND TEXT */}
      <div className="absolute bottom-[0px] left-0 w-full text-center pointer-events-none select-none">
        <h1
          className="text-[100px] md:text-[180px] font-bold tracking-widest"
          style={{
            color: "var(--text-h)",
            opacity: 0.12,
          }}
        >
          VERIFYSKILLS
        </h1>
      </div>

    </footer>
  );
};

export default Footer;