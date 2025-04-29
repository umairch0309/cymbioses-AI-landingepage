import { createSlice } from "@reduxjs/toolkit";

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    stats: {
      totalClients: 0,
      totalSessions: 0,
      sessionDuration: 0,
    },
  },
  reducers: {
    setDashboardStats: (state, action) => {
      state.stats = action.payload;
    },
  },
});

export const { setDashboardStats } = dashboardSlice.actions;
