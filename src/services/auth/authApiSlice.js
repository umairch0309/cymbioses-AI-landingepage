import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "@utils/axios";
import { config } from "@/config";

export const authApiSlice = createApi({
  reducerPath: "authApi",
  baseQuery: axiosBaseQuery({
    baseUrl: config.API_BASE_URL,
  }),
  endpoints: (build) => ({
    login: build.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        data,
      }),
    }),
    checkAuth: build.query({
      query: () => ({
        url: "/auth/me",
        method: "GET",
      }),
      forceRefetch: () => true,
    }),
  }),
});

export const { useLoginMutation, useCheckAuthQuery } = authApiSlice;
