import { createSlice } from "@reduxjs/toolkit";
import {
  addTransaction,
  deleteTransaction,
  fetchTransactions,
  updateTransaction,
  fetchTransactionCategories,
} from "./operationsTransactions";

const initialState = {
  categories: [],
  items: [],
  isLoading: false,
  successDelete: false,
  successAdd: false,
  successUpdate: false,
  error: null,
  summary: [],
  trasactionIdForDelete: "",
  transactionForUpdate: {
    id: "",
    type: "",
  },
};

const handlePending = (state) => {
  state.summary = [];
  state.categories = [];
  state.isLoading = true;
  state.successDelete = false;
  state.successAdd = false;
  state.successUpdate = false;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.summary = [];
  state.categories = [];
  state.isLoading = false;
  state.successDelete = false;
  state.successAdd = false;
  state.successUpdate = false;
  state.error = action.payload;
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    setTransactionIdForDelete: (state, action) => {
      state.trasactionIdForDelete = action.payload;
    },
    setTransactionForUpdate: (state, action) => {
      state.transactionForUpdate = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // * Add transaction
      .addCase(addTransaction.pending, handlePending)
      .addCase(addTransaction.rejected, handleRejected)
      .addCase(addTransaction.fulfilled, (state, action) => {
        state.summary = [];
        state.categories = [];
        state.isLoading = false;
        state.successDelete = false;
        state.successAdd = true;
        state.successUpdate = false;
        state.error = null;
        state.trasactionIdForDelete = "";
        state.transactionForUpdate = {
          id: "",
          type: "",
        };
        // console.log(action.payload);

        state.items.push(action.payload);
      })

      // * Delete transaction
      .addCase(deleteTransaction.pending, handlePending)
      .addCase(deleteTransaction.rejected, handleRejected)
      .addCase(deleteTransaction.fulfilled, (state, action) => {
        state.trasactionIdForDelete = "";
        state.transactionForUpdate = {
          id: "",
          type: "",
        };
        state.summary = [];
        state.categories = [];
        state.isLoading = false;
        state.successDelete = true;
        state.successAdd = false;
        state.successUpdate = false;
        state.error = null;
        state.items = state.items.filter(
          (transaction) => transaction.id !== action.payload.id
        );
        // console.log(state.items);
      })

      // * Update transaction
      .addCase(updateTransaction.pending, handlePending)
      .addCase(updateTransaction.rejected, handleRejected)
      .addCase(updateTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.successDelete = false;
        state.successAdd = false;
        state.successUpdate = true;
        state.error = null;
        const index = state.items.findIndex(
          (transaction) => transaction.id === action.payload.id
        );
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })

      // * Fetch transactions
      .addCase(fetchTransactions.pending, handlePending)
      .addCase(fetchTransactions.rejected, handleRejected)
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.successDelete = false;
        state.successAdd = false;
        state.successUpdate = false;
        state.error = null;
        state.items = action.payload;
        // console.log(state.items);
      })

      // * Fetch transaction categories
      .addCase(fetchTransactionCategories.pending, handlePending)
      .addCase(fetchTransactionCategories.rejected, handleRejected)
      .addCase(fetchTransactionCategories.fulfilled, (state, action) => {
        // console.log(action.payload);

        state.isLoading = false;
        state.successDelete = false;
        state.successAdd = false;
        state.successUpdate = false;
        state.error = null;
        state.categories = action.payload;
        state.trasactionIdForDelete = "";
      });
  },
});

export const { setTransactionIdForDelete, setTransactionForUpdate } =
  transactionsSlice.actions;
export const transactionsReducer = transactionsSlice.reducer;
