import { useState } from "react";
import SessionsTab from "@components/clients/SessionsTab";
import { TabsContainer, TabButton } from "@styles/SessionsTabStyled";

export default function ClientDetailPage() {
  const [activeTab, setActiveTab] = useState("Sessions");
  const [currentPage, setCurrentPage] = useState(1);

  const sessions = [
    {
      date: "21 Mar 19:30 WAT",
      title: "Achieving Inner Peace through Music Therapy",
    },
    {
      date: "21 Mar 19:30 WAT",
      title: "Mindful Melodies: Finding Calm through Music",
    },
    {
      date: "21 Mar 19:30 WAT",
      title: "Tranquil Tunes for Relaxation and Renewal",
    },
    { date: "21 Mar 19:30 WAT", title: "Soothing Sounds for Stress Relief" },
    {
      date: "21 Mar 19:30 WAT",
      title: "Harmony for Healing: Music as Therapy",
    },
    {
      date: "21 Mar 19:30 WAT",
      title: "Healing Harmonies: A Journey to Emotional Wellness",
    },
    { date: "21 Mar 19:30 WAT", title: "Calm Waters: Serenity through Sound" },
    {
      date: "21 Mar 19:30 WAT",
      title: "Melodic Meditation: Inner Peace through Music",
    },
    {
      date: "21 Mar 19:30 WAT",
      title: "Rhythmic Relaxation: Music for Stress Relief",
    },
    {
      date: "21 Mar 19:30 WAT",
      title: "Soulful Sounds: Nurturing the Spirit through Music",
    },
    {
      date: "21 Mar 19:30 WAT",
      title: "Rhythmic Relaxation: Music for Stress Relief",
    },
  ];

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="content-container">
      <div className="mb-4">
        <TabsContainer className="overflow-auto">
          <TabButton
            $active={activeTab === "Sessions"}
            onClick={() => setActiveTab("Sessions")}
          >
            Sessions
          </TabButton>
          <TabButton
            $active={activeTab === "Analytics"}
            onClick={() => setActiveTab("Analytics")}
          >
            Analytics
          </TabButton>
          <TabButton
            $active={activeTab === "EHR Profile"}
            onClick={() => setActiveTab("EHR Profile")}
          >
            EHR Profile
          </TabButton>
        </TabsContainer>
      </div>

      <SessionsTab
        activeTab={activeTab}
        onTabChange={handleTabChange}
        sessions={sessions}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
