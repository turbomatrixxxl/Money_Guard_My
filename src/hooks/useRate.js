import { useSelector } from "react-redux";
import {
  selectRate,
  selectRateError,
} from "../redux/currency/selectorsCurrencySlice";

export const useRate = () => {
  const rate = useSelector(selectRate);
  //   console.log(rate.rates);

  const rateError = useSelector(selectRateError);

  return { rate, rateError };
};
