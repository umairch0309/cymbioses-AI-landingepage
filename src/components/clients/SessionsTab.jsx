import {
  SearchContainer,
  SearchIcon,
  SearchInput,
} from "@styles/ClientsPageStyled";
import { Row, Col } from "reactstrap";
import { ActionButton } from "@styles/ClientsPageStyled";
import { PlusIcon, Search } from "lucide-react";
import ClientDetailComponent from "@components/clients/ClientDetailComponent";
import { SessionsTable } from "@components/dashboard/SessionsTable";
import EHRProfile from "@components/clients/EHRProfile";

const SessionsTab = ({ activeTab, onTabChange }) => {
  const columns = [
    { key: "date", title: "Date" },
    { key: "title", title: "Session Title" },
  ];

  const rows = [
    { id: 1, date: "21 Mar 19:30 WAT", title: "Session 1" },
    { id: 2, date: "21 Mar 19:30 WAT", title: "Session 2" },
    { id: 3, date: "21 Mar 19:30 WAT", title: "Session 3" },
    { id: 4, date: "21 Mar 19:30 WAT", title: "Session 4" },
    { id: 5, date: "21 Mar 19:30 WAT", title: "Session 5" },
  ];

  // Sample client data
  const clientData = {
    id: "CYM-00001",
    fullName: "Ava Sombori",
    email: "ava.sombori@gmail.com",
    phone: "XXX XXX XXXX",
    location: "Boston, MA",
    age: "27 years old",
    occupation: "Software Engineer",
  };

  return (
    <div>
      <div className="tab-content">
        {activeTab === "Sessions" && (
          <Row>
            <Col lg={8} className="main-content">
              <div className="mb-4">
                <SearchContainer>
                  <SearchIcon>
                    <Search size={16} />
                  </SearchIcon>
                  <SearchInput placeholder="Search" />
                </SearchContainer>
                <ActionButton
                  $color="var(--purple)"
                  className="border-0 text-white mt-3 mt-lg-0 d-lg-none"
                >
                  <PlusIcon size={16} className="me-1" />
                  New Session
                </ActionButton>
              </div>
              <SessionsTable rows={rows} columns={columns} />
            </Col>

            <Col lg={4} className="client-sidebar">
              <div className="d-flex justify-content-end mb-4">
                <ActionButton
                  $color="var(--purple)"
                  className="border-0 text-white d-none d-lg-flex"
                >
                  <PlusIcon size={16} className="me-1" />
                  New Session
                </ActionButton>
              </div>
              <ClientDetailComponent client={clientData} />
            </Col>
          </Row>
        )}

        {activeTab === "Analytics" && (
          <div className="analytics-content">
            <h3>Analytics Content</h3>
            <p>Analytics data will be displayed here.</p>
          </div>
        )}

        {activeTab === "EHR Profile" && <EHRProfile />}
      </div>
    </div>
  );
};

export default SessionsTab;
