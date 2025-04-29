import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Video,
  FileText,
  Settings,
  Sparkles,
  XIcon,
} from "lucide-react";
import { SidebarLinkStyled, SidebarContainer } from "@styles/SidebarStyled";

const SidebarItem = ({ icon: Icon, label, href }) => {
  const { pathname } = useLocation();
  const isActive = pathname === href;

  return (
    <SidebarLinkStyled
      to={href}
      className={`d-flex align-items-center gap-3 px-3 rounded text-decoration-none ${
        isActive && "active"
      }`}
    >
      <Icon
        className="flex-shrink-0"
        style={{ width: "20px", height: "20px" }}
      />
      <span>{label}</span>
    </SidebarLinkStyled>
  );
};

export function Sidebar({ setIsOpen, isOpen }) {
  return (
    <SidebarContainer
      className="border-end bg-white position-fixed d-flex flex-column"
      style={{ width: "220px" }}
      $isOpen={isOpen}
    >
      <div className="d-flex align-items-center gap-2 border-bottom p-3 h-70px mb-4">
        <Link to="/dashboard">
          <img src="/images/icons/logo.svg" alt="Logo" />
        </Link>
        <XIcon className="d-lg-none" onClick={() => setIsOpen(false)} />
      </div>
      <nav className="d-flex flex-column gap-1 p-2 flex-grow-1 overflow-auto">
        <SidebarItem icon={Sparkles} label="Get Started" href="/get-started" />
        <SidebarItem
          icon={LayoutDashboard}
          label="Dashboard"
          href="/dashboard"
        />
        <SidebarItem icon={Users} label="Clients" href="/clients" />
        <SidebarItem icon={Video} label="Sessions" href="/sessions" />
        {/* <SidebarItem icon={FileText} label="Templates" href="/templates" /> */}
        <SidebarItem icon={Settings} label="Account" href="/account" />
      </nav>
    </SidebarContainer>
  );
}
