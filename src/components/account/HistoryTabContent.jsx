import { Row, Col } from "reactstrap";
import { HeadingStyled } from "@styles/ElementsStyled";
import { StatisticsCard } from "@components/dashboard/StatisticsCard";
import { SessionsTable } from "@components/dashboard/SessionsTable";

const HistoryTabContent = () => {
  const sessions = [
    {
      id: "1",
      date: "21 Mar 19:30 WAT",
      description: "Jane Cooper",
      cost: "$ 0.33",
    },
    {
      id: "2",
      date: "21 Mar 19:30 WAT",
      description: "Dianne Russell",
      cost: "$ 0.33",
    },
    {
      id: "3",
      date: "21 Mar 19:30 WAT",
      description: "Jane Cooper",
      cost: "$ 0.33",
    },
    {
      id: "4",
      date: "21 Mar 19:30 WAT",
      description: "Dianne Russell",
      cost: "$ 0.33",
    },
    {
      id: "5",
      date: "21 Mar 19:30 WAT",
      description: "Jane Cooper",
      cost: "$ 0.33",
    },
    {
      id: "6",
      date: "21 Mar 19:30 WAT",
      description: "Dianne Russell",
      cost: "$ 0.33",
    },
    {
      id: "7",
      date: "21 Mar 19:30 WAT",
      description: "Jane Cooper",
      cost: "$ 0.33",
    },
    {
      id: "8",
      date: "21 Mar 19:30 WAT",
      description: "Dianne Russell",
      cost: "$ 0.33",
    },
    {
      id: "9",
      date: "21 Mar 19:30 WAT",
      description: "Jane Cooper",
      cost: "$ 0.33",
    },
  ];

  const columns = [
    {
      title: "Date",
      key: "date",
    },
    {
      title: "Description",
      key: "description",
    },
    {
      title: "Cost",
      key: "cost",
    },
  ];

  return (
    <>
      <div>
        <HeadingStyled $size="12px" className="text-grey mb-3">
          STATISTICS
        </HeadingStyled>
        <Row className="g-3 mb-3">
          <Col md={4}>
            <StatisticsCard
              title="Total Generations"
              value={120}
              info={false}
              className={"card-typo"}
            />
          </Col>
          <Col md={4}>
            <StatisticsCard
              title="Transcript Generation"
              value={57}
              info={false}
              className={"card-typo"}
            />
          </Col>
          <Col md={4}>
            <StatisticsCard
              title="SOAP Note Generation"
              value="63"
              info={false}
              className={"card-typo"}
            />
          </Col>
        </Row>
      </div>
      <div className="pt-3">
        <SessionsTable
          rows={sessions}
          columns={columns}
          title="GENERATION HISTORY"
          redirect={false}
        />
      </div>
    </>
  );
};

export default HistoryTabContent;
