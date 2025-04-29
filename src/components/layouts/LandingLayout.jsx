import { Outlet } from "react-router-dom";
import Footer from "@components/layouts/Footer";
import LandingNavbar from "@components/landing/LandingNavbar";

const LandingLayout = () => {
  return (
    <div className="landing-top-bg">
      <LandingNavbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default LandingLayout;
