import { useDispatch, useSelector } from "react-redux";
import {
  setTransactionForUpdate,
  setTransactionIdForDelete,
} from "../../redux/transactions/transactionsSlice";
import { selectTransactionCategories } from "../../redux/transactions/selectorsTransactions";
import { fetchTransactionCategories } from "../../redux/transactions/operationsTransactions";
import icons from "../../assets/images/icons/sprite.svg";
import styles from "./TransactionTableRow.module.css";
import { useEffect } from "react";

const TransactionTableRow = ({
  transaction,
  openDeleteModal,
  openEditModal,
}) => {
  const dispatch = useDispatch();

  const formatData = (unixData) => {
    const year = new Date(unixData).getFullYear();
    const month = new Date(unixData).getMonth() + 1;
    const day = new Date(unixData).getDate();

    const doubleDigitsFormatMonth = String(month).padStart(2, 0);
    const doubleDigitsFormatDay = String(day).padStart(2, 0);

    return `${doubleDigitsFormatDay}.${doubleDigitsFormatMonth}.${year}`;
  };

  // Obține categoriile din Redux store
  const categories = useSelector(selectTransactionCategories);

  useEffect(() => {
    dispatch(fetchTransactionCategories());
  }, [dispatch]);

  if (!transaction) return null;

  const { type, categoryId, comment, amount, transactionDate } = transaction;

  const formatNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  // Găsește categoria tranzacției
  const getTransactionCategory = (categoryId) => {
    if (!categories || categories.length === 0) {
      return "Loading..."; // Sau alt fallback
    }
    const category = categories.find((cat) => cat.id === categoryId);
    return category ? category.name : "Unknown";
  };

  const handleDeleteClick = () => {
    openDeleteModal();
    dispatch(setTransactionIdForDelete(transaction.id));
  };

  const handleEditClick = () => {
    openEditModal();
    dispatch(
      setTransactionForUpdate({ id: transaction.id, type: transaction.type })
    );
  };

  let textClass = type === "INCOME" ? styles.incomeText : styles.expenseText;

  return (
    <tr className={styles.dataRow}>
      <td className={styles.TransactionDateColumn}>
        {formatData(transactionDate)}
      </td>
      <td className={styles.TransactionTypeColumn}>
        {type === "INCOME" ? "+" : "-"}
      </td>
      <td className={styles.TransactionCategoryColumn}>
        {getTransactionCategory(categoryId)}
      </td>
      <td className={styles.TransactionCommentColumn}>{comment}</td>
      <td className={`${styles.TransactionAmountColumn} ${textClass}`}>
        {type === "INCOME"
          ? formatNumber(Number(amount).toFixed(2))
          : formatNumber(Number(amount * -1).toFixed(2))}
      </td>
      <td className={styles.TransactionEditColumn}>
        <button
          className={styles.editButton}
          type="button"
          onClick={handleEditClick}
        >
          <svg className={styles.editIcon}>
            <use href={`${icons}#icon-edit`}></use>
          </svg>
        </button>
      </td>
      <td className={styles.TransactionDeleteColumn}>
        <button
          className={styles.deleteButton}
          type="button"
          onClick={handleDeleteClick}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default TransactionTableRow;
