import React from "react";

const ProblemCard = ({ title, description, icon }) => {
  const [visible, setVisible] = React.useState(false);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const divRef = React.useRef(null);

  const handleMouseMove = (e) => {
    const bounds = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top });
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="relative w-full h-72 rounded-xl p-[1px] overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:shadow-xl"
    >
      {/* GRADIENT BORDER GLOW */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition duration-500"
        style={{
          background:
            "linear-gradient(120deg, transparent, var(--accent), transparent)",
        }}
      />

      {/* MOUSE GLOW */}
      <div
        className={`pointer-events-none blur-3xl rounded-full size-60 absolute z-0 transition-opacity duration-500 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background: "var(--accent)",
          top: position.y - 120,
          left: position.x - 120,
        }}
      />

      {/* CONTENT */}
      <div
        className="relative z-10 p-6 h-full w-full rounded-xl flex flex-col items-start justify-center transition-all duration-300"
        style={{
          background: "var(--surface)",
          color: "var(--text)",
          border: "1px solid var(--border)",
        }}
      >
        {/* ICON */}
        <div
          className="w-12 h-12 flex items-center justify-center rounded-lg mb-4 transition-all duration-300 group-hover:scale-110"
          style={{
            background: "var(--accent-bg)",
            border: "1px solid var(--accent-border)",
          }}
        >
          <div className="transition-transform duration-300 group-hover:rotate-6">
            {icon}
          </div>
        </div>

        {/* TITLE */}
        <h3 className="text-xl font-semibold text-[var(--text-h)] mb-2">
          {title}
        </h3>

        {/* DESCRIPTION */}
        <p className="text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProblemCard;