export const getDashboardPath = (role) => {
  if (role === "Institute") return "/institute-dashboard";

  // Employer dashboard later
  if (role === "Employer") return "/dashboard";

  // Certificate holder default
  return "/dashboard";
};