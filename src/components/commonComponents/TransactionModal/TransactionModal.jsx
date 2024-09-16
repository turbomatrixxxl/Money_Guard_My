// TransactionModal.js
import { useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { useAuth } from "../../../hooks/useAuth";

import styles from "./TransactionModal.module.css";
import { useDispatch } from "react-redux";
import { logOut } from "../../../redux/auth/operationsAuth";
import useToggle from "../../../hooks/useToggle";
import Modal from "../Modal/Modal";
import LogoContainer from "../../LogoContainer/LogoContainer";
import LogoutButton from "../../LogoutButton/LogoutButton";
import Button from "../Button";
import Header from "../../Header/Header";

const TransactionModal = ({ children, closeModal }) => {
  const [isLogoutModalVisible, toggleIsLogoutModalVisible] = useToggle(false);

  const modalRef = useRef();

  const screenCondition = useMediaQuery({ query: "(max-width: 768px)" });
  const { user } = useAuth();

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };

  function handleLogoutModal() {
    toggleIsLogoutModalVisible();
  }

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const addCloseEvent = (event) => {
      if (event.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", addCloseEvent);

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", addCloseEvent);
    };
  }, [closeModal]);

  const closeOnClickOutside = (event) => {
    if (event.target === event.currentTarget) closeModal();
  };

  return (
    <div ref={modalRef} className={styles.modal} onClick={closeOnClickOutside}>
      {screenCondition && (
        <div className={styles.allContainer}>
          <Modal
            closeButton={styles.closeButton}
            handleModalClose={toggleIsLogoutModalVisible}
            isModalVisible={isLogoutModalVisible}>
            <header className={styles.modalHeader}>
              <LogoContainer className={styles.logoHeaderContainer} />
              <div className={styles.userContainer}>
                <p> {user ? user.username : "User"}</p>

                <span>|</span>
                <LogoutButton handleLogoutModal={toggleIsLogoutModalVisible} />
              </div>
            </header>
            <div className={styles.modalLogoutActionCenter}>
              <LogoContainer className={styles.logoContainer} />
              <p className={styles.question}>
                Are you sure you want to log out?
              </p>
              <div className={styles.modalButtonsContainer}>
                <Button
                  handleClick={() => {
                    toggleIsLogoutModalVisible();
                    handleLogout();
                  }}
                  type="button"
                  variant="colored">
                  Logout
                </Button>
                <Button handleClick={toggleIsLogoutModalVisible} type="button">
                  Cancel
                </Button>
              </div>
            </div>
          </Modal>
          <Header handleLogoutModal={handleLogoutModal} />
        </div>
      )}
      <div className={styles.modalBg}>{children}</div>
    </div>
  );
};

export default TransactionModal;
