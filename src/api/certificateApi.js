const API_BASE_URL = "http://localhost:5000/api";

export const uploadCertificate = async (formData) => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API_BASE_URL}/certificates/upload`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Certificate upload failed");
  }

  return data;
};

export const getInstituteCertificates = async () => {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API_BASE_URL}/certificates/institute/my-certificates`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Failed to fetch certificates");
  }

  return data;
};