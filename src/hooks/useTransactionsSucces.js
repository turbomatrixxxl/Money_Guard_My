import { useSelector } from "react-redux";

import {
  selectSuccessAdd,
  selectSuccessUpdate,
  selectSuccessDelete,
  selectError,
} from "../redux/transactions/selectorsTransactions";

export const useTransactionsSucces = () => {
  const successAdd = useSelector(selectSuccessAdd);
  const successsUpdate = useSelector(selectSuccessUpdate);
  const successsDelete = useSelector(selectSuccessDelete);
  const successsError = useSelector(selectError);

  return {
    successAdd,
    successsUpdate,
    successsDelete,
    successsError,
  };
};
