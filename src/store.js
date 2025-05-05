import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApiSlice } from "@services/auth/authApiSlice";
import { authSlice } from "@services/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { dashboardApiSlice } from "@services/dashboard/dashboardApiSlice";
import { dashboardSlice } from "@services/dashboard/dashboardSlice";
import { communityApiSlice } from "@services/community/communityApiSlice";

export const store = configureStore({
  reducer: combineReducers({
    [authApiSlice.reducerPath]: authApiSlice.reducer,
    [authSlice.name]: authSlice.reducer,
    [dashboardApiSlice.reducerPath]: dashboardApiSlice.reducer,
    [dashboardSlice.name]: dashboardSlice.reducer,
    [communityApiSlice.reducerPath]: communityApiSlice.reducer,
  }),

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApiSlice.middleware,
      dashboardApiSlice.middleware,
      communityApiSlice.middleware
    ),
});

setupListeners(store.dispatch);

export const useAppDispatch = () => useDispatch();
export const useAppSelector = (state) => useSelector(state);
