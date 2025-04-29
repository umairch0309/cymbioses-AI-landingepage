import { useState } from "react";
import {
  SectionContainer,
  SectionTitle,
  SectionDescription,
  AddClientButton,
} from "@styles/SessionStyled";

import { Search, PlusIcon, ChevronRightIcon } from "lucide-react";
import {
  SearchContainer,
  SearchIcon,
  SearchInput,
} from "@styles/ClientsPageStyled";

const ClientSection = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SectionContainer className="border">
      <div className="section-header">
        <SectionTitle>CLIENT DETAILS</SectionTitle>
        <ChevronRightIcon size={16} />
      </div>

      <SectionDescription>
        You can search existing clients or add a new client
      </SectionDescription>

      <div className="client-selection">
        <div className="select-client">
          <label>Select Client</label>
          <SearchContainer>
            <SearchIcon>
              <Search size={16} />
            </SearchIcon>
            <SearchInput
              type="text"
              placeholder="Search clients"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </SearchContainer>
        </div>

        <AddClientButton className="small mt-3">
          <PlusIcon size={16} />
          Add Client
        </AddClientButton>
      </div>
    </SectionContainer>
  );
};

export default ClientSection;
