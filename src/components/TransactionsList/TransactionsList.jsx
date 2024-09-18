import React from "react";
import { useSelector } from "react-redux";
import { selectTransactions } from "../../redux/transactions/selectorsTransactions";
import TransactionItem from "../TransactionsItem/TransactionsItem";
import styles from "./TransactionsList.module.css";

const TransactionsList = ({ openEditModal, openDeleteModal }) => {
  const transactions = useSelector(selectTransactions);
  // console.log(transactions);

  const expensesTransactions = transactions?.filter((transaction) => {
    return transaction.type !== "INCOME";
  });

  // console.log(expensesTransactions);

  const expenseTransactionsByDate = expensesTransactions?.sort((a, b) => {
    return new Date(b.transactionDate) - new Date(a.transactionDate);
  });

  // console.log(expenseTransactionsByDate);

  const incomeTransactions = transactions?.filter((transaction) => {
    return transaction.type === "INCOME";
  });

  // console.log(incomeTransactions);

  const incomeTransactionsByDate = incomeTransactions?.sort((a, b) => {
    return new Date(b.transactionDate) - new Date(a.transactionDate);
  });

  // console.log(incomeTransactionsByDate);

  expenseTransactionsByDate.push(...incomeTransactionsByDate);

  const sortedAllTransactions = expenseTransactionsByDate?.sort((a, b) => {
    return new Date(b.transactionDate) - new Date(a.transactionDate);
  });

  // console.log(sortedAllTransactions);

  return (
    <ul className={styles.transactionsListMainContainer}>
      {transactions.length > 0 ? (
        sortedAllTransactions.map((transaction) => (
          <TransactionItem
            key={transaction.id}
            transaction={transaction}
            openEditModal={openEditModal}
            openDeleteModal={openDeleteModal}
          />
        ))
      ) : (
        <li className={styles.noDataMessage}>
          Looks like there's nothing here yet! Time to start spending... or
          maybe saving!
        </li>
      )}
    </ul>
  );
};

export default TransactionsList;
