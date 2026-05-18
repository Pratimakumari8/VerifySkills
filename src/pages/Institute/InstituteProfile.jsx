import React, { useRef, useState } from "react";
import InstituteSidebar from "../../components/Institute/InstituteSidebar";
import { User, Mail, Phone, Camera, Trash2, ShieldCheck } from "lucide-react";

const InstituteProfile = () => {
  const [collapsed, setCollapsed] = useState(false);
  const fileInputRef = useRef(null);

  const savedUser = JSON.parse(localStorage.getItem("user")) || {};

  const [profile, setProfile] = useState({
    firstName: savedUser.firstName || "",
    lastName: savedUser.lastName || "",
    email: savedUser.email || "",
    phone: savedUser.phone || "",
    role: "Institute",
    profilePhoto: savedUser.profilePhoto || "",
    instituteName: savedUser.instituteName || "",
  });

  const handleChange = (e) => {
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

  const handleSaveProfile = () => {
    localStorage.setItem("user", JSON.stringify(profile));
    alert("Institute profile updated successfully!");
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      <InstituteSidebar collapsed={collapsed} setCollapsed={setCollapsed} />

      <div className={`p-6 transition-all duration-300 ${collapsed ? "sm:ml-20" : "sm:ml-64"}`}>
        <h1 className="text-3xl font-semibold mb-8" style={{ color: "var(--text-h)" }}>
          Institute Profile
        </h1>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          <div className="rounded-3xl border p-8 shadow-xl bg-[var(--surface)] border-[var(--border)]">
            <div className="flex flex-col items-center text-center">
              <div className="relative">
                {profile.profilePhoto ? (
                  <img src={profile.profilePhoto} alt="Profile"
                    className="w-32 h-32 rounded-full object-cover border-2 border-[var(--primary)]" />
                ) : (
                  <div className="w-32 h-32 rounded-full bg-[var(--accent-bg)] border border-[var(--accent-border)] flex items-center justify-center text-5xl font-bold text-[var(--primary)]">
                    {profile.instituteName?.charAt(0) || "I"}
                  </div>
                )}

                <button
                  onClick={() => fileInputRef.current.click()}
                  className="absolute bottom-2 right-2 w-10 h-10 rounded-full bg-[var(--primary)] flex items-center justify-center text-white"
                >
                  <Camera size={18} />
                </button>

                <input ref={fileInputRef} type="file" accept="image/*" onChange={handlePhotoUpload} className="hidden" />
              </div>

              {profile.profilePhoto && (
                <button onClick={removePhoto} className="mt-4 flex items-center gap-2 text-red-400 text-sm">
                  <Trash2 size={16} /> Remove Photo
                </button>
              )}

              <h2 className="text-2xl font-semibold text-[var(--text-h)] mt-5">
                {profile.instituteName || "Institute Name"}
              </h2>

              <p className="text-sm mt-1">{profile.email || "No email"}</p>

              <span className="mt-4 px-4 py-2 rounded-full bg-[var(--accent-bg)] text-[var(--primary)] text-sm border border-[var(--accent-border)]">
                Institute
              </span>

              <div className="mt-8 flex items-center gap-3">
                <ShieldCheck className="text-green-400" size={22} />
                <span>Verified institute account</span>
              </div>
            </div>
          </div>

          <div className="xl:col-span-2 rounded-3xl border p-8 shadow-xl bg-[var(--surface)] border-[var(--border)]">
            <h2 className="text-2xl font-semibold text-[var(--text-h)] mb-6">
              Institute Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Input icon={<User />} label="Institute Name" name="instituteName" value={profile.instituteName} onChange={handleChange} />
              <Input icon={<User />} label="Contact Person First Name" name="firstName" value={profile.firstName} onChange={handleChange} />
              <Input icon={<User />} label="Contact Person Last Name" name="lastName" value={profile.lastName} onChange={handleChange} />
              <Input icon={<Mail />} label="Email" name="email" value={profile.email} onChange={handleChange} />
              <Input icon={<Phone />} label="Phone" name="phone" value={profile.phone} onChange={handleChange} />
            </div>

            <button
              onClick={handleSaveProfile}
              className="mt-6 px-7 py-3 rounded-xl font-medium"
              style={{ background: "var(--accent)", color: "black" }}
            >
              Save Changes
            </button>
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

export default InstituteProfile;