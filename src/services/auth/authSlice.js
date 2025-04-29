import { createSlice } from "@reduxjs/toolkit";
import { config } from "@/config";
import Cookies from "js-cookie";

const authToken = Cookies.get(config.AUTH_COOKIE_NAME);

const initialState = {
  isAuthenticated: authToken ? true : false,
  user: null,
  token: authToken || null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.token = action.payload.token;
      Cookies.set(config.AUTH_COOKIE_NAME, action.payload.token, {
        expires: action.payload.expires / (60 * 60 * 24),
      });
    },
    setUserValues: (state, action) => {
      state.user = action.payload;
    },

    logoutUser: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      Cookies.remove(config.AUTH_COOKIE_NAME);
    },
  },
});

export const { setUser, logoutUser, setUserValues } = authSlice.actions;
