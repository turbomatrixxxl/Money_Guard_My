import { useSelector } from "react-redux";
import {
  selectStatisticsIsLoading,
  selectStatisticsError,
  selectStatisticsTransactions,
  selectStatisticsTransactionItems,
} from "../redux/statistics/selectorsStatistics";

export const useStatistics = () => {
  const statisticsLoading = useSelector(selectStatisticsIsLoading);
  const statisticsError = useSelector(selectStatisticsError);
  const statisticsTransactions = useSelector(selectStatisticsTransactions);
  const statisticsTransactionItems = useSelector(
    selectStatisticsTransactionItems
  );

  return {
    statisticsLoading,
    statisticsError,
    statisticsTransactions,
    statisticsTransactionItems,
  };
};
