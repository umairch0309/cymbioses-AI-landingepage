import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "@utils/axios";
import { config } from "@/config";

export const dashboardApiSlice = createApi({
  reducerPath: "dashboardApi",
  baseQuery: axiosBaseQuery({
    baseUrl: config.API_BASE_URL,
  }),
  endpoints: (build) => ({
    dashboardStats: build.query({
      query: () => ({
        url: "/dashboard/stats",
        method: "GET",
      }),
      forceRefetch: () => true,
    }),
  }),
});

export const { useDashboardStatsQuery } = dashboardApiSlice;
