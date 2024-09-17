import { useSelector } from "react-redux";
import {
  selectAuthToken,
  selectIsLoggedIn,
  selectUser,
  selectError,
  selectIsRefreshing,
  selectIsLoading,
  selectBalance,
} from "../redux/auth/selectorsAuth";

export const useAuth = () => {
  const tokenAuth = useSelector(selectAuthToken);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const errorAuth = useSelector(selectError);
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoadingAuth = useSelector(selectIsLoading);
  const balanceAuth = useSelector(selectBalance);

  return {
    tokenAuth,
    isLoggedIn,
    user,
    errorAuth,
    isRefreshing,
    isLoadingAuth,
    balanceAuth,
  };
};
