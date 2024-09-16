import { createSlice } from "@reduxjs/toolkit";
import { getCurrencyRate } from "./operationsCurrencySlice";

const initialState = {
  error: null,
  rate: null,
};

const handlePending = (state) => {
  state.error = null;
};

const handleRejected = (state, action) => {
  state.error = action.payload;
  // state.rate = { rates: Number(4.51).toFixed(2) };
};

const rateSlice = createSlice({
  name: "rate",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCurrencyRate.pending, handlePending)
      .addCase(getCurrencyRate.fulfilled, (state, action) => {
        // console.log(action.payload);

        state.error = null;
        state.rate = action.payload;
      })
      .addCase(getCurrencyRate.rejected, handleRejected);
  },
});

export const apiReducer = rateSlice.reducer;
