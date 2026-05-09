import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import HowItWorks from "./pages/HowItWorks";
import AboutUs from "./pages/AboutUs";
import TermsOfService from "./pages/TermsOfService";
import Careers from "./pages/Careers";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TrustCenter from "./pages/TrustCenter";
import StandardsPage from "./pages/StandardsPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Student/StudentDashboard";
import MyCredentials from "./pages/Student/MyCredentials";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/trust-center" element={<TrustCenter />} />
        <Route path="/standards" element={<StandardsPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/my-credentials" element={<MyCredentials />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;