export const selectAuthToken = (state) => state.authSlice.token;
export const selectIsLoggedIn = (state) => state.authSlice.isLoggedIn;
export const selectUser = (state) => state.authSlice.user;
export const selectError = (state) => state.authSlice.error;
export const selectIsRefreshing = (state) => state.authSlice.isRefreshing;
export const selectIsLoading = (state) => state.authSlice.isLoading;
export const selectBalance = (state) => state.authSlice.balance;
