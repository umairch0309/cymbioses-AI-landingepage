import { Outlet, useLocation } from "react-router-dom";
import Footer from "@components/layouts/Footer";
import LandingNavbar from "@components/landing/LandingNavbar";
import { useEffect } from "react";

const LandingLayout = () => {
  const location = useLocation();
  useEffect(() => window.scrollTo({ top: 0, behavior: "smooth" }), [location]);

  return (
    <div className="landing-top-bg">
      <LandingNavbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default LandingLayout;
