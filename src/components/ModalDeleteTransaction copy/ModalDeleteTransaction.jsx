import React from "react";
import TransactionModal from "../commonComponents/TransactionModal/TransactionModal";
import styles from "./ModalDeleteTransaction.module.css";
import { useMediaQuery } from "react-responsive";
import FormButton from "../commonComponents/FormButton/FormButton";
import Logo from "../commonComponents/Logo/Logo";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTransaction,
  fetchTransactions,
} from "../../redux/transactions/operationsTransactions";
import { selectTransactionIdForDelete } from "../../redux/transactions/selectorsTransactions";
import { refreshUser } from "../../redux/auth/operationsAuth";
import Notiflix from "notiflix";

const ModalDeleteTransaction = ({ closeModal }) => {
  const dispatch = useDispatch();

  const trasactionIdForDelete = useSelector(selectTransactionIdForDelete);
  const screenCondition = useMediaQuery({ query: "(min-width: 768px)" });

  const handleDeleteClick = () => {
    if (!trasactionIdForDelete) {
      Notiflix.Notify.failure("Transaction ID not found.");
      return;
    }

    dispatch(deleteTransaction(trasactionIdForDelete))
      .unwrap()
      .then(() => {
        closeModal();
        // Optional: Dispatch a refresh action if needed
        dispatch(refreshUser());
        dispatch(fetchTransactions());
      })
      .catch((error) => {
        Notiflix.Notify.failure(
          "Failed to delete transaction. Please try again."
        );
        console.error(error);
      });
  };

  return (
    <TransactionModal closeModal={closeModal}>
      <div className={styles.modalContent}>
        {screenCondition && <Logo variant={"formLogo"} />}
        <p>Are you sure you want to delete this transaction?</p>
        <div className={styles.buttonsWrapper}>
          <FormButton
            type={"button"}
            text={"Delete"}
            variant={"multiColorButtton"}
            handlerFunction={handleDeleteClick}
          />
          <FormButton
            type={"button"}
            text={"Cancel"}
            variant={"whiteButtton"}
            handlerFunction={() => closeModal()}
          />
        </div>
      </div>
    </TransactionModal>
  );
};

export default ModalDeleteTransaction;
