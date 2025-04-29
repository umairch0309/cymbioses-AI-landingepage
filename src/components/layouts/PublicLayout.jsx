import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import Navbar from "@components/layouts/Navbar";
import Footer from "@components/layouts/Footer";

const PublicLayout = () => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  return !isAuthenticated ? (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  ) : (
    <Navigate to="/dashboard" replace />
  );
};

export default PublicLayout;
