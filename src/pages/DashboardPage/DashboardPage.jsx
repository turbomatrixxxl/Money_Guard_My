import React, { Suspense, useEffect } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import Button from "../../components/commonComponents/Button";
import LogoContainer from "../../components/LogoContainer/LogoContainer";
import LogoutButton from "../../components/LogoutButton/LogoutButton";

import Loader from "../../components/commonComponents/Loader/Loader";

import useToggle from "../../hooks/useToggle";
import Modal from "../../components/commonComponents/Modal/Modal";
import Footer from "../../components/Footer";

import { useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/operationsAuth";
import { useAuth } from "../../hooks/useAuth";
import { useTransactionsSucces } from "../../hooks/useTransactionsSucces";

import styles from "./DashboardPage.module.css";
import Notiflix from "notiflix";

function DashboardPage() {
  const [isLogoutModalVisible, toggleIsLogoutModalVisible] = useToggle(false);
  const { user } = useAuth();
  const dispatch = useDispatch();
  const { successAdd, successsDelete, successsUpdate, successsError } =
    useTransactionsSucces();
  // console.log(successAdd);

  const handleLogout = () => {
    dispatch(logOut());
  };

  function handleLogoutModal() {
    toggleIsLogoutModalVisible();
  }

  useEffect(() => {});

  return (
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
          <p className={styles.question}>Are you sure you want to log out?</p>
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
      <main className={styles.main}>
        {successAdd &&
          Notiflix.Notify.success("Transaction added successfully!", {
            position: "center-top",
            borderRadius: "8px",
            showOnlyTheLastOne: "true",
          })}
        {successsDelete &&
          Notiflix.Notify.success("Transaction deleted successfully!", {
            position: "center-top",
            borderRadius: "8px",
            showOnlyTheLastOne: "true",
          })}
        {successsUpdate &&
          Notiflix.Notify.success("Transaction updated successfully!", {
            position: "center-top",
            borderRadius: "8px",
            showOnlyTheLastOne: "true",
          })}
        {successsError &&
          Notiflix.Notify.failure(
            "Ooops...! Operation failed. Please try again later.",
            {
              position: "center-top",
              borderRadius: "8px",
              showOnlyTheLastOne: "true",
            }
          )}
        <Sidebar />
        <div className={styles.dashboardContainer}>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default DashboardPage;
