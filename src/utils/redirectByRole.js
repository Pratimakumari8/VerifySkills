export const getDashboardPath = (role) => {
  if (role === "Institute") return "/institute-dashboard";
  if (role === "Certificate holder") return "/dashboard";
  if (role === "Employer") return "/employer-dashboard";

  return "/";
};