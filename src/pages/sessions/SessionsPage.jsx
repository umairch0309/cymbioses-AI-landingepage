import { SessionsTable } from "@components/dashboard/SessionsTable";
import { ActionButton } from "@styles/ClientsPageStyled";
import { PlusIcon, Search } from "lucide-react";
import {
  SearchContainer,
  SearchIcon,
  SearchInput,
} from "@styles/ClientsPageStyled";
import { useNavigate } from "react-router-dom";

const sessions = [
  {
    id: "1",
    date: "21 Mar 19:30 WAT",
    client: "Jane Cooper",
    title: "Achieving Inner Peace through Music Therapy",
  },
  {
    id: "2",
    date: "21 Mar 19:30 WAT",
    client: "Dianne Russell",
    title: "Mindful Melodies: Finding Calm through Music",
  },
  {
    id: "3",
    date: "21 Mar 19:30 WAT",
    client: "Jane Cooper",
    title: "Tranquil Tunes for Relaxation and Renewal",
  },
  {
    id: "4",
    date: "21 Mar 19:30 WAT",
    client: "Dianne Russell",
    title: "Soothing Sounds for Stress Relief",
  },
  {
    id: "5",
    date: "21 Mar 19:30 WAT",
    client: "Jane Cooper",
    title: "Harmony for Healing: Music as Therapy",
  },
  {
    id: "6",
    date: "21 Mar 19:30 WAT",
    client: "Dianne Russell",
    title: "Healing Harmonies: A Journey to Emotional Wellness",
  },
  {
    id: "7",
    date: "21 Mar 19:30 WAT",
    client: "Jane Cooper",
    title: "Calm Waters: Serenity through Sound",
  },
  {
    id: "8",
    date: "21 Mar 19:30 WAT",
    client: "Dianne Russell",
    title: "Melodic Meditation: Inner Peace through Music",
  },
  {
    id: "9",
    date: "21 Mar 19:30 WAT",
    client: "Jane Cooper",
    title: "Rhythmic Relaxation: Music for Stress Relief",
  },
];

const columns = [
  {
    title: "Date",
    key: "date",
  },
  {
    title: "Client",
    key: "client",
  },
  {
    title: "Session Title",
    key: "title",
  },
];

const SessionsPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="mb-4 d-flex align-items-center justify-content-between">
        <SearchContainer>
          <SearchIcon>
            <Search size={16} />
          </SearchIcon>
          <SearchInput placeholder="Search" />
        </SearchContainer>
        <ActionButton
          $color="var(--purple)"
          className="border-0 ms-3 text-white"
          onClick={() => navigate(`/session/add`)}
        >
          <PlusIcon size={16} className="me-1" />
          New Session
        </ActionButton>
      </div>
      <SessionsTable
        rows={sessions}
        columns={columns}
        title="LATEST SESSIONS"
      />
    </>
  );
};

export default SessionsPage;
