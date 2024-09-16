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
  error: null,
  summary: [],
  trasactionIdForDelete: "",
  transactionForUpdate: {
    id: "",
    type: "",
  },
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
      .addCase(addTransaction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addTransaction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })

      // * Delete transaction
      .addCase(deleteTransaction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteTransaction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(
          (transaction) => transaction.id !== action.payload.id
        );
      })

      // * Update transaction
      .addCase(updateTransaction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateTransaction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          (transaction) => transaction.id === action.payload.id
        );
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })

      // * Fetch transactions
      .addCase(fetchTransactions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })

      // * Fetch transaction categories
      .addCase(fetchTransactionCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTransactionCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchTransactionCategories.fulfilled, (state, action) => {
        // console.log(action.payload);

        state.isLoading = false;
        state.error = null;
        state.categories = action.payload;
      });
  },
});

export const { setTransactionIdForDelete, setTransactionForUpdate } =
  transactionsSlice.actions;
export const transactionsReducer = transactionsSlice.reducer;
