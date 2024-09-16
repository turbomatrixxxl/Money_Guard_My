export const selectStatisticsError = (state) => state.statisticsSlice.error;
export const selectStatisticsIsLoading = (state) =>
  state.statisticsSlice.isLoading;
export const selectStatisticsTransactions = (state) =>
  state.statisticsSlice.transactions;
export const selectStatisticsTransactionItems = (state) =>
  state.statisticsSlice.transactionItems;
