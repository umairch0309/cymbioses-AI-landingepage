import { useState } from "react";
import { TabsContainer, TabButton } from "@styles/SessionsTabStyled";
import HistoryTabContent from "@components/account/HistoryTabContent";
import BillingTabContent from "@components/account/BillingTabContent";
import AccountForm from "@components/account/accountForm";
import SecurityTabContent from "@components/account/SecurityTabContent";
import ClientConsent from "@components/account/ClientConsent";

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
            $active={activeTab === "security"}
            onClick={() => setActiveTab("security")}
          >
            Security
          </TabButton>
          <TabButton
            $active={activeTab === "client_consent"}
            onClick={() => setActiveTab("client_consent")}
          >
            Client Consent & BAA
          </TabButton>
        </TabsContainer>
        {activeTab === "account_details" && <AccountForm />}
        {activeTab === "history" && <HistoryTabContent />}
        {activeTab === "billing" && <BillingTabContent />}
        {activeTab === "security" && <SecurityTabContent />}
        {activeTab === "client_consent" && <ClientConsent />}
      </div>
    </div>
  );
};

export default AccountPage;
