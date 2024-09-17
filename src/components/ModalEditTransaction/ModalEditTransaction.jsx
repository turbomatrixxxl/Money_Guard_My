import TransactionModal from "../commonComponents/TransactionModal/TransactionModal";

import { EditTransactionForm } from "../TransactionForm/TransactionForm";

const ModalEditTransactionNew = ({ closeModal }) => {
  return (
    <TransactionModal closeModal={closeModal}>
      <EditTransactionForm closeModal={closeModal} />
    </TransactionModal>
  );
};

export default ModalEditTransactionNew;
