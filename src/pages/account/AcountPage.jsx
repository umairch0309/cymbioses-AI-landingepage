import { useState } from "react";
import { TabsContainer, TabButton } from "@styles/SessionsTabStyled";
import HistoryTabContent from "@components/account/HistoryTabContent";
import BillingTabContent from "@components/account/BillingTabContent";

const AccountPage = () => {
  const [activeTab, setActiveTab] = useState("history");

  return (
    <div className="content-container">
      <div className="mb-4">
        <TabsContainer>
          <TabButton
            $active={activeTab === "history"}
            onClick={() => setActiveTab("history")}
          >
            History
          </TabButton>
          <TabButton
            $active={activeTab === "billing"}
            onClick={() => setActiveTab("billing")}
          >
            Billing
          </TabButton>
          <TabButton
            $active={activeTab === "settings"}
            onClick={() => setActiveTab("settings")}
          >
            Settings
          </TabButton>
        </TabsContainer>
        {activeTab === "history" && <HistoryTabContent />}
        {activeTab === "billing" && <BillingTabContent />}
      </div>
    </div>
  );
};

export default AccountPage;
