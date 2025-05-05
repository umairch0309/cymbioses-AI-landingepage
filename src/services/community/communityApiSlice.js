import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "@utils/axios";
import { config } from "@/config";

export const communityApiSlice = createApi({
  reducerPath: "communityApiSlice",
  baseQuery: axiosBaseQuery({
    baseUrl: config.API_BASE_URL,
  }),
  endpoints: (build) => ({
    registerCommunity: build.mutation({
      query: (data) => ({
        url: "/community/create",
        method: "POST",
        data,
      }),
    }),
  }),
});

export const { useRegisterCommunityMutation } = communityApiSlice;
