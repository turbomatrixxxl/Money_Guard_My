import { createSlice } from "@reduxjs/toolkit";
import { getTransactions, getTransactionItems } from "./operationsStatistics";

const initialState = {
  isLoading: false,
  error: null,
  transactions: [],
  transactionItems: [],
};

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
  state.transactions = [];
  state.transactionItems = [];
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  state.transactions = [];
  state.transactionItems = [];
};

const statisticsSlice = createSlice({
  name: "statistics",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getTransactions.pending, handlePending)
      .addCase(getTransactions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.transactionItems = [];
        state.transactions = action.payload;
      })
      .addCase(getTransactions.rejected, handleRejected)

      .addCase(getTransactionItems.pending, handlePending)
      .addCase(getTransactionItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.transactions = [];
        state.transactionItems = action.payload;
      })
      .addCase(getTransactionItems.rejected, handleRejected);
  },
});

export const statisticsReducer = statisticsSlice.reducer;
