import {
  ClientDetailsContainer,
  ClientInfoItem,
  ClientInfoLabel,
  ClientInfoValue,
  UpdateProfileButton,
  ArchiveClientButton,
} from "@styles/ClientDetailStyled";
import { HeadingStyled } from "@styles/ElementsStyled";
import { Trash2Icon, UserPlus2Icon } from "lucide-react";

const ClientDetails = ({ client }) => {
  return (
    <ClientDetailsContainer>
      <HeadingStyled $size="12px" className="text-grey mb-3">
        CLIENT DETAILS
      </HeadingStyled>

      <div className="client-info">
        <ClientInfoItem>
          <ClientInfoLabel>Client ID</ClientInfoLabel>
          <ClientInfoValue>{client.id}</ClientInfoValue>
        </ClientInfoItem>

        <ClientInfoItem>
          <ClientInfoLabel>Full Name</ClientInfoLabel>
          <ClientInfoValue>{client.fullName}</ClientInfoValue>
        </ClientInfoItem>

        <ClientInfoItem>
          <ClientInfoLabel>Email</ClientInfoLabel>
          <ClientInfoValue>{client.email}</ClientInfoValue>
        </ClientInfoItem>

        <ClientInfoItem>
          <ClientInfoLabel>Phone</ClientInfoLabel>
          <ClientInfoValue>{client.phone}</ClientInfoValue>
        </ClientInfoItem>

        <ClientInfoItem>
          <ClientInfoLabel>Location</ClientInfoLabel>
          <ClientInfoValue>{client.location}</ClientInfoValue>
        </ClientInfoItem>

        <ClientInfoItem>
          <ClientInfoLabel>Age</ClientInfoLabel>
          <ClientInfoValue>{client.age}</ClientInfoValue>
        </ClientInfoItem>

        <ClientInfoItem>
          <ClientInfoLabel>Occupation</ClientInfoLabel>
          <ClientInfoValue>{client.occupation}</ClientInfoValue>
        </ClientInfoItem>
      </div>

      <div className="client-actions mt-5">
        <UpdateProfileButton>
          Update Profile
          <UserPlus2Icon size={16} />
        </UpdateProfileButton>

        <ArchiveClientButton>
          Archive Client
          <Trash2Icon size={16} />
        </ArchiveClientButton>
      </div>
    </ClientDetailsContainer>
  );
};

export default ClientDetails;
