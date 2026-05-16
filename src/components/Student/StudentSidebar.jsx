import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

const Sidebar = ({ collapsed, setCollapsed }) => {
    const navigate = useNavigate();

const handleLogout = async () => {
  try {
    await signOut(auth); // logout from Google
  } catch (error) {
    console.log(error);
  }

  localStorage.removeItem("token");
  localStorage.removeItem("user");

  navigate("/"); // redirect to home
};

  return (
    <>
      {/* MOBILE MENU BUTTON */}
      <button
        type="button"
        className="sm:hidden fixed top-4 left-4 z-50 p-2 rounded-lg border"
        style={{
          background: "var(--surface)",
          borderColor: "var(--border)",
          color: "var(--text-h)",
        }}
      >
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
            d="M5 7h14M5 12h14M5 17h10"
          />
        </svg>
      </button>

      {/* SIDEBAR */}
      <aside
        className={`fixed top-0 left-0 z-40 h-screen border-r transition-all duration-300 ${
          collapsed ? "w-20" : "w-64"
        }`}
        style={{
          background: "var(--bg)",
          borderColor: "var(--border)",
        }}
      >
       <div className="h-full px-4 py-6 flex flex-col">

          {/* COLLAPSE BUTTON */}
          

          {/* LOGO */}
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

          {/* NAVIGATION */}
          <ul >

            {/* DASHBOARD */}
            {/* DASHBOARD */}
<li>
  <NavLink
    to="/dashboard"
    className={`flex items-center ${
      collapsed ? "justify-center" : "gap-3"
    } px-4 py-3 rounded-xl transition-all`}
    style={({ isActive }) => ({
      background: isActive
        ? "var(--accent-bg)"
        : "transparent",
      color: isActive
        ? "var(--primary)"
        : "var(--text)",
    })}
  >
    <svg
      className="w-5 h-5 shrink-0"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10 6.025A7.5 7.5 0 1 0 17.975 14H10V6.025Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13.5 3c-.169 0-.334.014-.5.025V11h7.975c.011-.166.025-.331.025-.5A7.5 7.5 0 0 0 13.5 3Z"
      />
    </svg>

    {!collapsed && <span>Dashboard</span>}
  </NavLink>
</li>
{/* MY CREDENTIALS */}
<li>
  <NavLink
    to="/my-credentials"
    className={`flex items-center ${
      collapsed ? "justify-center" : "gap-3"
    } px-4 py-3 rounded-xl transition-all`}
    style={({ isActive }) => ({
      background: isActive
        ? "var(--accent-bg)"
        : "transparent",
      color: isActive
        ? "var(--primary)"
        : "var(--text)",
    })}
  >
    <svg
      className="w-5 h-5 shrink-0"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15 5v14M9 5v14M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
      />
    </svg>

    {!collapsed && <span>My Credentials</span>}
  </NavLink>
</li>

            {/* UPLOAD */}
            <li>
              <a
                href="#"
                className={`flex items-center ${
                  collapsed ? "justify-center" : "gap-3"
                } px-4 py-3 rounded-xl transition-all hover:bg-[var(--accent-bg)]`}
                style={{ color: "var(--text)" }}
              >
                <svg
                  className="w-5 h-5 shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 12h14m-7 7V5"
                  />
                </svg>

                {!collapsed && <span>Upload Credential</span>}
              </a>
            </li>

            {/* VERIFICATION STATUS */}
            <li>
              <a
                href="#"
                className={`flex items-center ${
                  collapsed ? "justify-center" : "gap-3"
                } px-4 py-3 rounded-xl transition-all hover:bg-[var(--accent-bg)]`}
                style={{ color: "var(--text)" }}
              >
                <svg
                  className="w-5 h-5 shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4"
                  />
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12c0 1.66-.67 3.16-1.76 4.24A5.98 5.98 0 0 1 15 18H9a6 6 0 1 1 0-12h6a6 6 0 0 1 6 6Z"
                  />
                </svg>

                {!collapsed && <span>Verification Status</span>}
              </a>
            </li>

            {/* PROFILE */}
            <li>
  <button
    onClick={() => navigate("/profile")}
    className={`w-full flex items-center ${
      collapsed ? "justify-center" : "gap-3"
    } px-4 py-3 rounded-xl transition-all hover:bg-[var(--accent-bg)]`}
    style={{ color: "var(--text)" }}
  >
    <svg
      className="w-5 h-5 shrink-0"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
        d="M16 19h4a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-2m-2.236-4a3 3 0 1 0 0-4M3 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
    </svg>

    {!collapsed && <span>Profile</span>}
  </button>
</li>

            {/* LOGOUT */}
            {/* LOGOUT */}
            <li>
              <button
                onClick={handleLogout}
                className={`flex items-center w-full ${
                  collapsed ? "justify-center" : "gap-3"
                } px-4 py-3 rounded-xl transition-all hover:bg-red-500/10`}
                style={{ color: "#ef4444" }}
              >
                <svg
                  className="w-5 h-5 shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2"
                  />
                </svg>

                {!collapsed && <span>Logout</span>}
              </button>
            </li>

          </ul>
          {/* BOTTOM SECTION */}
{/* BOTTOM SECTION */}
<div className="pt-6 mt-auto">

  <button
    onClick={() => setCollapsed(!collapsed)}
    className="w-full flex items-center justify-center px-4 py-3 rounded-xl transition-all hover:bg-[var(--accent-bg)]"
    style={{ color: "var(--text)" }}
  >
    <svg
      className={`w-5 h-5 transition-transform duration-300 ${
        collapsed ? "rotate-180" : ""
      }`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15 19l-7-7 7-7"
      />
    </svg>
  </button>

</div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;