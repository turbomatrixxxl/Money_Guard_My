import TransactionTableRow from "../TransactionTableRow/TransactionTableRow";
import styles from "./TransactionsTable.module.css";

const TransactionsTable = ({ data, openDeleteModal, openEditModal }) => {
  return (
    <div className={styles.transactionsTable}>
      <table className={styles.table}>
        <thead className={styles.tableHead}>
          <tr className={styles.tableHeadRow}>
            <th className={styles.dateColumn}>Date</th>
            <th className={styles.typeColumn}>Type</th>
            <th className={styles.categoryColumn}>Category</th>
            <th className={styles.commentColumn}>Comment</th>
            <th className={styles.sumColumn}>Sum</th>
            <th className={styles.editColumn}></th>
            <th className={styles.deleteColumn}></th>
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {data.length > 0 ? (
            data.map((item) => (
              <TransactionTableRow
                key={item.id}
                transaction={item}
                openDeleteModal={openDeleteModal}
                openEditModal={openEditModal}
              />
            ))
          ) : (
            <tr>
              <td colSpan="7" className={styles.noDataMessage}>
                Looks like there's nothing here yet! Time to start spending...
                or maybe saving!
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable;
