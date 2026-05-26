import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

const EmployerSidebar = ({ collapsed, setCollapsed }) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }

    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  const navStyle = ({ isActive }) => ({
    background: isActive ? "var(--accent-bg)" : "transparent",
    color: isActive ? "var(--primary)" : "var(--text)",
  });

  return (
    <aside
      className={`fixed top-0 left-0 z-40 h-screen border-r transition-all duration-300 ${
        collapsed ? "w-20" : "w-64"
      }`}
      style={{ background: "var(--bg)", borderColor: "var(--border)" }}
    >
      <div className="h-full px-4 py-6 flex flex-col">
        <div
          className={`flex items-center ${
            collapsed ? "justify-center" : "gap-2"
          } mb-10`}
        >
          <svg width="35" height="35" viewBox="0 0 32 32">
            <circle cx="4.7" cy="16" r="4.7" fill="var(--primary)" />
            <circle cx="16" cy="4.7" r="4.7" fill="var(--primary)" />
            <circle cx="16" cy="27.3" r="4.7" fill="var(--primary)" />
            <circle cx="27.3" cy="16" r="4.7" fill="var(--primary)" />
          </svg>

          {!collapsed && (
            <span
              className="text-xl font-semibold"
              style={{ color: "var(--text-h)" }}
            >
              VerifySkills
            </span>
          )}
        </div>

        <ul className="space-y-2">
          <li>
            <NavLink
              to="/employer-dashboard"
              style={navStyle}
              className={`flex items-center ${
                collapsed ? "justify-center" : "gap-3"
              } px-4 py-3 rounded-xl`}
            >
              <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  d="M4 13h6V4H4v9Zm10 7h6V4h-6v16ZM4 20h6v-4H4v4Z"
                />
              </svg>
              {!collapsed && <span>Dashboard</span>}
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/employer-profile"
              style={navStyle}
              className={`flex items-center ${
                collapsed ? "justify-center" : "gap-3"
              } px-4 py-3 rounded-xl`}
            >
              <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  d="M12 12a5 5 0 100-10 5 5 0 000 10zM2 22a10 10 0 0120 0"
                />
              </svg>
              {!collapsed && <span>Profile</span>}
            </NavLink>
          </li>
          <li>
  <NavLink
    to="/verify-certificate"
    style={navStyle}
    className={`flex items-center ${
      collapsed ? "justify-center" : "gap-3"
    } px-4 py-3 rounded-xl`}
  >
    <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24">
      <path
        stroke="currentColor"
        strokeWidth="2"
        d="M9 12l2 2 4-4M12 3l8 4v5c0 5-3.5 9-8 9s-8-4-8-9V7l8-4z"
      />
    </svg>
    {!collapsed && <span>Verify Certificate</span>}
  </NavLink>
</li>

<li>
  <NavLink
    to="/verification-history"
    style={navStyle}
    className={`flex items-center ${
      collapsed ? "justify-center" : "gap-3"
    } px-4 py-3 rounded-xl`}
  >
    <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24">
      <path
        stroke="currentColor"
        strokeWidth="2"
        d="M12 8v4l3 3M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
    {!collapsed && <span>Verify History</span>}
  </NavLink>
</li>

          <li>
            <button
              onClick={handleLogout}
              className={`w-full flex items-center ${
                collapsed ? "justify-center" : "gap-3"
              } px-4 py-3 rounded-xl hover:bg-red-500/10`}
              style={{ color: "#ef4444" }}
            >
              <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7"
                />
              </svg>
              {!collapsed && <span>Logout</span>}
            </button>
          </li>
        </ul>

        <div className="pt-6 mt-auto">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="w-full flex items-center justify-center px-4 py-3 rounded-xl hover:bg-[var(--accent-bg)]"
            style={{ color: "var(--text)" }}
          >
            {collapsed ? "➡️" : "⬅️"}
          </button>
        </div>
      </div>
    </aside>
  );
};

export default EmployerSidebar;