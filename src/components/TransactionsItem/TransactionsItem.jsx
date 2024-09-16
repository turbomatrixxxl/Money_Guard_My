import styles from "./TransactionsItem.module.css";
import icons from "../../assets/images/icons/sprite.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  setTransactionForUpdate,
  setTransactionIdForDelete,
} from "../../redux/transactions/transactionsSlice";
import { selectTransactionCategories } from "../../redux/transactions/selectorsTransactions";
import { useEffect } from "react";
import { fetchTransactionCategories } from "../../redux/transactions/operationsTransactions";

// Funcții de utilitate
const formatData = (unixDate) => {
  const date = new Date(unixDate);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${day}.${month}.${year}`;
};

const getTransactionCategory = (categoryId, categories) => {
  const category = categories.find((cat) => cat.id === categoryId);
  return category ? category.name : "Unknown";
};

const formatNumber = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

const TransactionItem = ({ transaction, openDeleteModal, openEditModal }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTransactionCategories());
  }, [dispatch]);

  const categories = useSelector(selectTransactionCategories);
  // console.log(categories);

  const { type, categoryId, comment, amount, transactionDate } = transaction;

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

  const textClass = type === "INCOME" ? styles.incomeText : styles.expenseText;
  const borderClass =
    type === "INCOME" ? styles.incomeBorder : styles.expenseBorder;

  return (
    <li className={`${styles.TransactionItem} ${borderClass}`}>
      <div className={`${styles.row} ${styles.firstRow}`}>
        <span className={styles.fixData}>Date</span>
        <span className={styles.dynamicData}>
          {formatData(transactionDate)}
        </span>
      </div>
      <div className={`${styles.row} ${styles.secondRow}`}>
        <span className={styles.fixData}>Type</span>
        <span className={styles.dynamicData}>
          {type === "INCOME" ? "+" : "-"}
        </span>
      </div>
      <div className={`${styles.row} ${styles.thirdRow}`}>
        <span className={styles.fixData}>Category</span>
        <span className={styles.dynamicData}>
          {type === "INCOME"
            ? "Income"
            : getTransactionCategory(categoryId, categories)}
        </span>
      </div>
      <div className={`${styles.row} ${styles.forthRow}`}>
        <span className={styles.fixData}>Comment</span>
        <span className={styles.dynamicData}>{comment}</span>
      </div>
      <div className={`${styles.row} ${styles.fifthRow}`}>
        <span className={styles.fixData}>Sum</span>
        <span className={`${styles.dynamicData} ${textClass}`}>
          {type === "INCOME"
            ? formatNumber(Number(amount).toFixed(2))
            : formatNumber(Number(amount * -1).toFixed(2))}
        </span>
      </div>
      <div className={`${styles.row} ${styles.sixthRow}`}>
        <button
          type="button"
          className={styles.deleteButton}
          onClick={handleDeleteClick}>
          Delete
        </button>
        <button
          type="button"
          className={styles.editButton}
          onClick={handleEditClick}>
          <svg className={styles.editIcon}>
            <use href={`${icons}#icon-edit`}></use>
          </svg>
          <span className={styles.editText}>Edit</span>
        </button>
      </div>
    </li>
  );
};

export default TransactionItem;
