import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { Sidebar } from "@components/layouts/Sidebar";
import DashboardHeader from "@components/layouts/DashboardHeader";
import { PageContainer } from "@styles/PageStyled";
import { Container } from "reactstrap";
import { useCheckAuthQuery } from "@services/auth/authApiSlice";
import { setUserValues } from "@services/auth/authSlice";
import { useAppDispatch } from "@/store";

const PrivateLayout = () => {
  const { data, isFetching } = useCheckAuthQuery();
  const dispatch = useAppDispatch();
  const { isAuthenticated } = useAuth();
  const [sidebarShow, setSidebarShow] = useState(false);

  useEffect(() => {
    if (data?.data) {
      dispatch(setUserValues(data.data));
    }
  }, [data]);

  if (isFetching) return <div>Loading...</div>;

  return isAuthenticated ? (
    <div className="d-flex h-100 bg-white">
      <Sidebar setIsOpen={setSidebarShow} isOpen={sidebarShow} />
      <div className="flex-grow-1 d-flex flex-column overflow-hidden">
        <DashboardHeader setIsOpen={setSidebarShow} />
        <PageContainer className="flex-grow-1 overflow-auto p-3 p-md-4">
          <Container className="px-smd-0">
            <Outlet />
          </Container>
        </PageContainer>
      </div>
    </div>
  ) : (
    <Navigate to="/" replace />
  );
};

export default PrivateLayout;
