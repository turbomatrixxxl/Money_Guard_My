import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authSlice";

import { transactionsReducer } from "./transactions/transactionsSlice";

import { apiReducer } from "./currency/rateSlice";
import { statisticsReducer } from "./statistics/statisticsSlice";


export const store = configureStore({
  reducer: {
    authSlice: authReducer,

    transactions: transactionsReducer,

    rateSlice: apiReducer,

    statisticsSlice: statisticsReducer,

  },
});
