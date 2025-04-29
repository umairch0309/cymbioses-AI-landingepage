import { Row, Col, Badge } from "reactstrap";
import { HeadingStyled, SpanStyled } from "@styles/ElementsStyled";
import { StatisticsCard } from "@components/dashboard/StatisticsCard";
import { SessionsTable } from "@components/dashboard/SessionsTable";
import PurchaseNote from "@components/account/PurchaseNote";

const BillingTabContent = () => {
  const sessions = [
    {
      id: "1",
      date: "21 Mar 19:30 WAT",
      type: "Monthly",
      amount: "$ 0.33",
    },
    {
      id: "2",
      date: "21 Mar 19:30 WAT",
      description: "Dianne Russell",
      amount: "$ 0.33",
    },
    {
      id: "3",
      date: "21 Mar 19:30 WAT",
      type: "Monthly",
      amount: "$ 0.33",
    },
    {
      id: "4",
      date: "21 Mar 19:30 WAT",
      description: "Dianne Russell",
      amount: "$ 0.33",
    },
    {
      id: "5",
      date: "21 Mar 19:30 WAT",
      type: "Monthly",
      amount: "$ 0.33",
    },
    {
      id: "6",
      date: "21 Mar 19:30 WAT",
      description: "Dianne Russell",
      amount: "$ 0.33",
    },
    {
      id: "7",
      date: "21 Mar 19:30 WAT",
      type: "Monthly",
      amount: "$ 0.33",
    },
    {
      id: "8",
      date: "21 Mar 19:30 WAT",
      description: "Dianne Russell",
      amount: "$ 0.33",
    },
    {
      id: "9",
      date: "21 Mar 19:30 WAT",
      type: "Monthly",
      amount: "$ 0.33",
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

  const renderActions = (row) => {
    return (
      <Badge className="border-purple cursor-pointer text-purple bg-transparent">
        <SpanStyled>Invoice</SpanStyled>
      </Badge>
    );
  };

  return (
    <>
      <div>
        <HeadingStyled $size="12px" className="text-grey mb-3">
          STATISTICS
        </HeadingStyled>
        <Row className="g-3 mb-3">
          <Col md={4}>
            <StatisticsCard
              title="Account Tier"
              value={"Starter"}
              info={false}
              className={"card-typo"}
            />
          </Col>
          <Col md={4}>
            <StatisticsCard
              title="Last Payment"
              value={"21 Mar 19:30 WAT"}
              info={false}
              valueFontSize={"20px"}
              className={"card-typo"}
            />
          </Col>
          <Col md={4}>
            <PurchaseNote
              value="With your Debit Card or PayPal"
              title="Purchase Notes"
              info={false}
              className={"card-typo  bg-light-purple"}
            />
          </Col>
        </Row>
      </div>
      <div className="pt-3">
        <SessionsTable
          rows={sessions}
          columns={columns}
          title="PAYMENT HISTORY"
          redirect={false}
          actions={true}
          renderActions={renderActions}
        />
      </div>
    </>
  );
};

export default BillingTabContent;
