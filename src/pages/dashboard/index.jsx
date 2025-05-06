import React, { useEffect } from "react";
import { StatisticsCard } from "@components/dashboard/StatisticsCard";
import { Col, Row } from "reactstrap";
import { SessionsTable } from "@components/dashboard/SessionsTable";
import { HeadingStyled } from "@styles/ElementsStyled";
import { useAppSelector } from "@/store";
import { useDashboardStatsQuery } from "@services/dashboard/dashboardApiSlice";
import { setDashboardStats } from "@services/dashboard/dashboardSlice";
import { useAppDispatch } from "@/store";

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

const Dashboard = () => {
  const { data } = useDashboardStatsQuery();
  const dispatch = useAppDispatch();
  const stats = useAppSelector((state) => state.dashboard.stats);

  useEffect(() => {
    if (data?.data) {
      dispatch(setDashboardStats(data.data));
    }
  }, [data]);

  return (
    <>
      <div className="mb-4">
        <HeadingStyled $size="12px" className="text-grey mb-3">
          STATISTICS
        </HeadingStyled>
        <Row className="g-3">
          <Col md={4}>
            <StatisticsCard title="Total Clients" value={stats.totalClients} />
          </Col>
          <Col md={4}>
            <StatisticsCard
              title="Total Sessions"
              value={stats.totalSessions}
            />
          </Col>
          <Col md={4}>
            <StatisticsCard title="Avg Session Duration" value="30 mins" />
          </Col>
        </Row>
      </div>
      <SessionsTable
        rows={sessions}
        columns={columns}
        title="LATEST SESSIONS"
      />
    </>
  );
};

export default Dashboard;
