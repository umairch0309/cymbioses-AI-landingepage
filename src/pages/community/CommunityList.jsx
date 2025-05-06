import React from "react";
import { SessionsTable } from "@components/dashboard/SessionsTable";
import { useAllCommunitiesQuery } from "@services/community/communityApiSlice";

const columns = [
  {
    title: "Email",
    key: "email",
  },
  {
    title: "First Name",
    key: "firstName",
  },
  {
    title: "Last Name",
    key: "lastName",
  },
];

const CommunityList = () => {
  const { data } = useAllCommunitiesQuery();

  return (
    <div>
      <SessionsTable
        rows={data?.data || []}
        columns={columns}
        title="Community Register Users"
        redirect={false}
      />
    </div>
  );
};

export default CommunityList;
