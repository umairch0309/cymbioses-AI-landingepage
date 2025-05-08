import { useState } from "react";
import { TabsContainer, TabButton } from "@styles/SessionsTabStyled";
import HistoryTabContent from "@components/account/HistoryTabContent";
import BillingTabContent from "@components/account/BillingTabContent";
import AccountForm from "../../components/account/accountForm";

const AccountPage = () => {
  const [activeTab, setActiveTab] = useState("account_details");

  return (
    <div className="content-container">
      <div className="mb-4">
        <TabsContainer>
          <TabButton
            $active={activeTab === "account_details"}
            onClick={() => setActiveTab("account_details")}
          >
            Acount Details
          </TabButton>
          <TabButton
            $active={activeTab === "history"}
            onClick={() => setActiveTab("history")}
          >
            Generation History
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
        {activeTab === "account_details" && <AccountForm />}
        {activeTab === "history" && <HistoryTabContent />}
        {activeTab === "billing" && <BillingTabContent />}
      </div>
    </div>
  );
};

export default AccountPage;
