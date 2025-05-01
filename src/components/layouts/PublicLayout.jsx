import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import Footer from "@components/layouts/Footer";
import LandingNavbar from "@components/landing/LandingNavbar";
import { useEffect } from "react";

const PublicLayout = () => {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();
  useEffect(() => window.scrollTo({ top: 0, behavior: "smooth" }), [location]);

  if (loading) return <div>Loading...</div>;

  return !isAuthenticated ? (
    <div className="d-flex flex-column min-vh-100">
      <LandingNavbar />
      <div className="mt-3">
        <Outlet />
      </div>
      <Footer />
    </div>
  ) : (
    <Navigate to="/dashboard" replace />
  );
};

export default PublicLayout;
