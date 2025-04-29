import { useState } from "react";
import {
  Row,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";

import {
  ClientCard,
  ClientName,
  ClientInfo,
  TimeStamp,
  ViewProfileButton,
  ListViewItem,
  ListViewInfo,
  ListViewName,
  ListViewDetails,
  ListViewActions,
  ActionButton,
  ViewToggleContainer,
  ViewToggleButton,
  SearchContainer,
  SearchIcon,
  SearchInput,
  PaginationContainer,
} from "@styles/ClientsPageStyled";

import { Eye, Grid, List, Search } from "lucide-react";
import { Box } from "@styles/ElementsStyled";
import { useNavigate } from "react-router-dom";

const clients = [
  {
    id: 1,
    name: "Harold Bowman",
    age: "48 years",
    location: "Los Angeles, CA",
    added: "23 hours ago",
  },
  {
    id: 2,
    name: "Elena Martinez",
    age: "32 years old",
    location: "New York City, NY",
    added: "23 hours ago",
  },
  {
    id: 3,
    name: "Liam Patel",
    age: "27 years old",
    location: "Chicago, IL",
    added: "23 hours ago",
  },
  {
    id: 4,
    name: "Ava Nguyen",
    age: "41 years old",
    location: "Miami, FL",
    added: "23 hours ago",
  },
  {
    id: 5,
    name: "Isaac Brown",
    age: "22 years old",
    location: "San Francisco, CA",
    added: "23 hours ago",
  },
  {
    id: 6,
    name: "Zara Khan",
    age: "56 years old",
    location: "Seattle, WA",
    added: "23 hours ago",
  },
  {
    id: 7,
    name: "Milo Rodriguez",
    age: "35 years old",
    location: "Boston, MA",
    added: "23 hours ago",
  },
  {
    id: 8,
    name: "Nora Gupta",
    age: "44 years old",
    location: "Austin, TX",
    added: "23 hours ago",
  },
  {
    id: 9,
    name: "Eliana Kim",
    age: "19 years old",
    location: "Nashville, TN",
    added: "23 hours ago",
  },
  {
    id: 10,
    name: "Oscar Chang",
    age: "50 years old",
    location: "Denver, CO",
    added: "23 hours ago",
  },
  {
    id: 11,
    name: "Maya Singh",
    age: "29 years old",
    location: "Atlanta, GA",
    added: "23 hours ago",
  },
  {
    id: 12,
    name: "Leo Li",
    age: "63 years old",
    location: "Portland, OR",
    added: "23 hours ago",
  },
];

const ClientsPage = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const itemsPerPage = 8;

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentClients = clients.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(clients.length / itemsPerPage);

  const renderGridView = () => {
    return (
      <Row>
        {currentClients.map((client) => (
          <Col key={client.id} xs={12} sm={6} md={6} lg={3} className="mb-4">
            <ClientCard>
              <Box className="px-4 pb-3 pt-4">
                <TimeStamp className="text-grey4">{client.added}</TimeStamp>
                <ClientName className="text-dark-purple-2">
                  {client.name}
                </ClientName>
                <ClientInfo className="text-grey5">{client.age}</ClientInfo>
                <ClientInfo className="text-grey5">
                  {client.location}
                </ClientInfo>
              </Box>
              <ViewProfileButton
                className="bg-light-purple text-purple"
                onClick={() => navigate(`/clients/${client.id}`)}
              >
                <Eye size={16} />
                View Profile
              </ViewProfileButton>
            </ClientCard>
          </Col>
        ))}
      </Row>
    );
  };

  const renderListView = () => {
    return (
      <div>
        {currentClients.map((client) => (
          <ListViewItem key={client.id}>
            <ListViewInfo>
              <ListViewName>{client.name}</ListViewName>
              <ListViewDetails>
                <div>{client.age}</div>
                <div>{client.location}</div>
                <div>{client.added}</div>
              </ListViewDetails>
            </ListViewInfo>
            <ListViewActions>
              <ViewProfileButton style={{ margin: 0, width: "auto" }}>
                <Eye size={16} />
                View Profile
              </ViewProfileButton>
            </ListViewActions>
          </ListViewItem>
        ))}
      </div>
    );
  };

  const renderPagination = () => {
    return (
      <PaginationContainer>
        <Pagination>
          <PaginationItem disabled={currentPage === 1}>
            <PaginationLink
              previous
              onClick={() => setCurrentPage(currentPage - 1)}
            />
          </PaginationItem>

          {Array.from({ length: totalPages }).map((_, index) => (
            <PaginationItem key={index} active={currentPage === index + 1}>
              <PaginationLink onClick={() => setCurrentPage(index + 1)}>
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

          {totalPages > 5 && currentPage < totalPages - 2 && (
            <PaginationItem disabled>
              <PaginationLink>...</PaginationLink>
            </PaginationItem>
          )}

          <PaginationItem disabled={currentPage === totalPages}>
            <PaginationLink
              next
              onClick={() => setCurrentPage(currentPage + 1)}
            />
          </PaginationItem>
        </Pagination>
      </PaginationContainer>
    );
  };

  return (
    <div className="py-4">
      <Row className="mb-4 align-items-center">
        <Col>
          <h2 className="mb-0">Clients</h2>
        </Col>
      </Row>

      <Row className="mb-4 align-items-center">
        <Col xs={12} md={6} className="d-flex mb-3 mb-md-0">
          <ViewToggleContainer>
            <ViewToggleButton
              $active={viewMode === "grid"}
              onClick={() => setViewMode("grid")}
            >
              <Grid size={18} />
            </ViewToggleButton>
            <ViewToggleButton
              $active={viewMode === "list"}
              onClick={() => setViewMode("list")}
            >
              <List size={18} />
            </ViewToggleButton>
          </ViewToggleContainer>

          <SearchContainer>
            <SearchIcon>
              <Search size={16} />
            </SearchIcon>
            <SearchInput placeholder="Search" />
          </SearchContainer>
        </Col>

        <Col xs={12} md={6} className="d-flex justify-content-md-end">
          <ActionButton
            $color="var(--purple)"
            className="me-2 border-0 text-white"
          >
            Import CSV
          </ActionButton>
          <ActionButton
            $color="transparent"
            $hoverColor="var(--purple)"
            className="text-purple border-purple"
            onClick={() => navigate(`/session/add`)}
          >
            Add Client
          </ActionButton>
        </Col>
      </Row>

      {viewMode === "grid" ? renderGridView() : renderListView()}

      {/* {renderPagination()} */}
    </div>
  );
};

export default ClientsPage;
