import React from "react";
import { useStatistics } from "../../hooks/useStatistics";

import styles from "./StatisticsTable.module.css";
import StatisticsItem from "./StatisticsItem/StatisticsItem";

export default function StatisticsTable() {
  const { statisticsTransactions } = useStatistics();
  //   console.log(statisticsTransactions?.expenseSummary);
  //   console.log(statisticsTransactions?.incomeSummary);

  const expense = statisticsTransactions?.expenseSummary;
  const income = statisticsTransactions?.incomeSummary;

  const transactionsLength = statisticsTransactions?.categoriesSummary?.length;

  const transactionsItems = statisticsTransactions?.categoriesSummary;

  const expensesItems = transactionsItems?.filter((transaction) => {
    return transaction.type !== "INCOME";
  });

  const sortedExpensesItems = expensesItems?.sort((a, b) => {
    let ap = Number(a.total);
    // console.log(ap);

    let bp = Number(b.total);
    // console.log(b);

    return ap - bp;
  });

  //   console.log(sortedExpensesItems);

  return (
    <div className={styles.tableContainer}>
      <div className={styles.tableTitleContainer}>
        <span>Category</span>
        <span>Sum</span>
      </div>
      <div className={styles.tableItemsContainer}>
        {transactionsLength === 0 && (
          <p className={styles.tableItemsNoTransactionsContainer}>
            You don't have any transactions for this period...!
          </p>
        )}
        {transactionsLength > 0 &&
          sortedExpensesItems.map((expense) => {
            return (
              <StatisticsItem
                key={expense.name}
                variant={expense.name}
                sum={Math.abs(expense.total).toFixed(2)}
              />
            );
          })}
      </div>
      <div className={styles.tableTotalsContainer}>
        <div className={styles.tableTotalsItemsContainer}>
          <p>Expenses:</p>
          <p className={styles.tableTotalsItemsExpense}>
            {expense ? Number(expense).toFixed(2) : Number(0).toFixed(2)}
          </p>
        </div>
        <div className={styles.tableTotalsItemsContainer}>
          <p>Income:</p>
          <p className={styles.tableTotalsItemsIncome}>
            {income ? Number(income).toFixed(2) : Number(0).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}
