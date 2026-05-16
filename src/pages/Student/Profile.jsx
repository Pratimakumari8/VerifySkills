import React, { useRef, useState } from "react";
import StudentSidebar from "../../components/Student/StudentSidebar";
import {
  User,
  Mail,
  Phone,
  Lock,
  ShieldCheck,
  Camera,
  Trash2,
} from "lucide-react";

const Profile = () => {
  const [collapsed, setCollapsed] = useState(false);
  const fileInputRef = useRef(null);

  const savedUser = JSON.parse(localStorage.getItem("user")) || {};
  const isGoogleUser = savedUser.authProvider === "google";

  const [profile, setProfile] = useState({
    firstName: savedUser.firstName || "",
    lastName: savedUser.lastName || "",
    email: savedUser.email || "",
    phone: savedUser.phone || "",
    role: savedUser.role || "Certificate holder",
    profilePhoto: savedUser.profilePhoto || "",
  });

  const [password, setPassword] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleProfileChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      setProfile({ ...profile, profilePhoto: reader.result });
    };

    reader.readAsDataURL(file);
  };

  const removePhoto = () => {
    setProfile({ ...profile, profilePhoto: "" });
  };

  const handlePasswordChange = (e) => {
    setPassword({ ...password, [e.target.name]: e.target.value });
  };

  const handleSaveProfile = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/auth/update-profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: savedUser.id,
        ...profile,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      alert(data.message || "Profile update failed");
      return;
    }

    localStorage.setItem("user", JSON.stringify(data.user));
    alert("Profile updated successfully!");
  } catch (error) {
    console.log(error);
    alert("Backend not connected");
  }
};

  const handleResetPassword = () => {
    if (password.newPassword !== password.confirmPassword) {
      alert("New password and confirm password do not match");
      return;
    }

    alert("Password reset request submitted!");
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      <StudentSidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      <div
        className={`p-6 transition-all duration-300 ${
          collapsed ? "sm:ml-20" : "sm:ml-64"
        }`}
      >
        <h1
          className="text-3xl font-semibold mb-8"
          style={{ color: "var(--text-h)" }}
        >
          Profile Settings
        </h1>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          <div className="xl:col-span-1">
            <div className="rounded-3xl border p-8 shadow-xl bg-[var(--surface)] border-[var(--border)]">
              <div className="flex flex-col items-center text-center">
                <div className="relative">
                  {profile.profilePhoto ? (
                    <img
                      src={profile.profilePhoto}
                      alt="Profile"
                      className="w-32 h-32 rounded-full object-cover border-2 border-[var(--primary)]"
                    />
                  ) : (
                    <div className="w-32 h-32 rounded-full bg-[var(--accent-bg)] border border-[var(--accent-border)] flex items-center justify-center text-5xl font-bold text-[var(--primary)]">
                      {profile.firstName?.charAt(0) || "U"}
                      {profile.lastName?.charAt(0) || ""}
                    </div>
                  )}

                  <button
                    onClick={() => fileInputRef.current.click()}
                    className="absolute bottom-2 right-2 w-10 h-10 rounded-full bg-[var(--primary)] flex items-center justify-center text-white"
                  >
                    <Camera size={18} />
                  </button>

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="hidden"
                  />
                </div>

                {profile.profilePhoto && (
                  <button
                    onClick={removePhoto}
                    className="mt-4 flex items-center gap-2 text-red-400 text-sm"
                  >
                    <Trash2 size={16} />
                    Remove Photo
                  </button>
                )}

                <h2 className="text-2xl font-semibold text-[var(--text-h)] mt-5">
                  {profile.firstName || "User"} {profile.lastName}
                </h2>

                <p className="text-sm mt-1">{profile.email || "No email"}</p>

                <span className="mt-4 px-4 py-2 rounded-full bg-[var(--accent-bg)] text-[var(--primary)] text-sm border border-[var(--accent-border)]">
                  {profile.role}
                </span>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="text-green-400" size={22} />
                  <span>Account verified</span>
                </div>

                <div className="flex items-center gap-3">
                  <Lock className="text-[var(--primary)]" size={22} />
                  <span>{isGoogleUser ? "Google account" : "Password protected"}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="xl:col-span-2 space-y-8">
            <div className="rounded-3xl border p-8 shadow-xl bg-[var(--surface)] border-[var(--border)]">
              <h2 className="text-2xl font-semibold text-[var(--text-h)] mb-6">
                Personal Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Input icon={<User />} label="First Name" name="firstName" value={profile.firstName} onChange={handleProfileChange} />
                <Input icon={<User />} label="Last Name" name="lastName" value={profile.lastName} onChange={handleProfileChange} />
                <Input icon={<Mail />} label="Email" name="email" value={profile.email} onChange={handleProfileChange} />
                <Input icon={<Phone />} label="Phone" name="phone" value={profile.phone} onChange={handleProfileChange} />

                <div>
                  <label className="text-sm text-[var(--text)]">Role</label>
                  <select
                    name="role"
                    value={profile.role}
                    onChange={handleProfileChange}
                    className="w-full mt-2 p-3 rounded-xl bg-black border border-[var(--border)] text-[var(--text-h)] outline-none"
                  >
                    <option>Certificate holder</option>
                    <option>Institute</option>
                    <option>Employer</option>
                  </select>
                </div>
              </div>

              <button
                onClick={handleSaveProfile}
                className="mt-6 px-7 py-3 rounded-xl font-medium"
                style={{ background: "var(--accent)", color: "black" }}
              >
                Save Changes
              </button>
            </div>

            {!isGoogleUser && (
              <div className="rounded-3xl border p-8 shadow-xl bg-[var(--surface)] border-[var(--border)]">
                <h2 className="text-2xl font-semibold text-[var(--text-h)] mb-6">
                  Reset Password
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <PasswordInput label="Current Password" name="currentPassword" value={password.currentPassword} onChange={handlePasswordChange} />
                  <PasswordInput label="New Password" name="newPassword" value={password.newPassword} onChange={handlePasswordChange} />
                  <PasswordInput label="Confirm Password" name="confirmPassword" value={password.confirmPassword} onChange={handlePasswordChange} />
                </div>

                <button
                  onClick={handleResetPassword}
                  className="mt-6 px-7 py-3 rounded-xl bg-red-500 text-white font-medium"
                >
                  Reset Password
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Input = ({ icon, label, name, value, onChange }) => (
  <div>
    <label className="text-sm text-[var(--text)]">{label}</label>
    <div className="flex items-center gap-3 mt-2 p-3 rounded-xl bg-black border border-[var(--border)]">
      <span className="text-[var(--primary)]">
        {React.cloneElement(icon, { size: 20 })}
      </span>
      <input
        name={name}
        value={value}
        onChange={onChange}
        autoComplete="off"
        className="w-full bg-transparent outline-none text-[var(--text-h)]"
      />
    </div>
  </div>
);

const PasswordInput = ({ label, name, value, onChange }) => (
  <div>
    <label className="text-sm text-[var(--text)]">{label}</label>
    <input
      type="password"
      name={name}
      value={value}
      onChange={onChange}
      autoComplete="new-password"
      className="w-full mt-2 p-3 rounded-xl bg-black border border-[var(--border)] text-[var(--text-h)] outline-none"
    />
  </div>
);

export default Profile;