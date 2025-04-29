import { InfoIcon, MenuIcon } from "lucide-react";
import {
  HeadingStyled,
  Paragraph,
  ButtonStyled,
  DashboardHeaderStyled,
} from "@styles/ElementsStyled";
import { Container } from "reactstrap";
import { useAppDispatch } from "@/store";
import { logoutUser } from "@services/auth/authSlice";
import { useAppSelector } from "@/store";
import { letterAvatar } from "@utils/helpers";

function DashboardHeader({ setIsOpen }) {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  return (
    <DashboardHeaderStyled className="pe-md-4 border-bottom h-70px">
      <Container className="d-flex justify-content-between align-items-center h-100">
        <div className="d-flex align-items-center gap-2">
          <MenuIcon
            size={30}
            className="me-1 text-dark-purple-3 d-lg-none"
            onClick={() => setIsOpen(true)}
          />
          <HeadingStyled className="mb-0" $size="18px" $weight={500}>
            Dashboard
          </HeadingStyled>
          <InfoIcon
            style={{ width: "16px", height: "16px" }}
            className="text-secondary"
          />
        </div>

        <div className="d-flex align-items-center gap-3">
          <div className="d-md-flex d-none align-items-center gap-2">
            <div
              className="d-flex align-items-center border justify-content-center rounded bg-light text-primary"
              style={{ width: "40px", height: "40px" }}
            >
              <span className="small fw-medium">
                {letterAvatar(user?.fullName)}
              </span>
            </div>
            <div className="d-flex flex-column">
              <HeadingStyled $size="14px" className="mb-0">
                {user?.fullName}
              </HeadingStyled>
              <Paragraph $size="12px" className="mb-0 text-secondary">
                {user?.email}
              </Paragraph>
            </div>
          </div>
          <ButtonStyled
            onClick={() => dispatch(logoutUser())}
            $size="12px"
            $width="73px"
            $height="33px"
            className="bg-danger-op1 border-0  p-0 text-red text-decoration-none"
          >
            Logout
          </ButtonStyled>
        </div>
      </Container>
    </DashboardHeaderStyled>
  );
}

export default DashboardHeader;
