import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import Footer from "@components/layouts/Footer";
import LandingNavbar from "@components/landing/LandingNavbar";

const PublicLayout = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  return !isAuthenticated ? (
    <div className="d-flex flex-column min-vh-100">
      <LandingNavbar />
      <Outlet />
      <Footer />
    </div>
  ) : (
    <Navigate to="/dashboard" replace />
  );
};

export default PublicLayout;
