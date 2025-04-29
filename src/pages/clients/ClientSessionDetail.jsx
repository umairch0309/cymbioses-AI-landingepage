import { useMemo, useState } from "react";
import { Container } from "reactstrap";
import { TabsContainer, TabButton } from "@styles/SessionsTabStyled";
import { clientSessionTabs } from "@utils/staticData";

const ClientSessionDetail = () => {
  const [activeTab, setActiveTab] = useState("transcript");

  const TabComponent = useMemo(() => {
    const tab = clientSessionTabs.find((t) => t.value === activeTab);
    return tab ? tab.component : null;
  }, [activeTab, clientSessionTabs]);

  return (
    <div className="content-container">
      <div className="mb-4">
        <TabsContainer>
          {clientSessionTabs.map((tab) => (
            <TabButton
              key={tab.value}
              $active={activeTab === tab.value}
              onClick={() => setActiveTab(tab.value)}
            >
              {tab.name}
            </TabButton>
          ))}
        </TabsContainer>
      </div>
      <TabComponent />
    </div>
  );
};

export default ClientSessionDetail;
