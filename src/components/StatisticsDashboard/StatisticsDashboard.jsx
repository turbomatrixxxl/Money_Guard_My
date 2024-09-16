import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { getTransactions } from "../../redux/statistics/operationsStatistics";

import styles from "./StatisticsDashboard.module.css";

export default function StatisticsDashboard() {
  const dispatch = useDispatch();

  const [year, setYear] = useState(new Date().getFullYear());
  //   console.log(year);

  const [month, setMonth] = useState(new Date().getMonth() + 1);
  //   console.log(month);

  const currenyYear = new Date().getFullYear();

  const yearSelect = [
    currenyYear,
    currenyYear - 1,
    currenyYear - 2,
    currenyYear - 3,
    currenyYear - 4,
  ];

  const monthsSelect = [
    { value: 1, label: "January" },
    { value: 2, label: "February" },
    { value: 3, label: "March" },
    { value: 4, label: "April" },
    { value: 5, label: "May" },
    { value: 6, label: "June" },
    { value: 7, label: "July" },
    { value: 8, label: "August" },
    { value: 9, label: "September" },
    { value: 10, label: "October" },
    { value: 11, label: "November" },
    { value: 12, label: "December" },
  ];

  const monthRef = useRef();
  const yearRef = useRef();

  useEffect(() => {
    dispatch(getTransactions({ month: month, year: year }));
  }, [dispatch, month, year]);

  function handleSelectMonth(ev) {
    // console.log(ev.currentTarget.value);

    dispatch(
      getTransactions({
        month: monthRef.current.value,
        year: yearRef.current.value,
      })
    );

    setMonth(ev.target.value);
  }

  function handleSelectYear(ev) {
    // console.log(ev.currentTarget.value);

    dispatch(
      getTransactions({
        month: monthRef.current.value,
        year: yearRef.current.value,
      })
    );

    setYear(ev.currentTarget.value);
  }

  //   console.log(month);
  //   console.log(year);

  return (
    <div className={styles.dasboardContainer}>
      <select
        ref={monthRef}
        className={styles.dasboardInput}
        onChange={handleSelectMonth}
        value={month}
        name="month"
        id="month">
        {monthsSelect.map((month) => {
          return (
            <option key={month.value} value={month.value} label={month.label} />
          );
        })}
      </select>
      <select
        ref={yearRef}
        className={styles.dasboardInput}
        onChange={handleSelectYear}
        value={year}
        name="year"
        id="year">
        {yearSelect.map((year) => {
          return (
            <option key={year} value={year}>
              {year}
            </option>
          );
        })}
      </select>
    </div>
  );
}
