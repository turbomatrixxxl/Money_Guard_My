import React from "react";
import LogoutButton from "../LogoutButton/LogoutButton";
import LogoContainer from "../LogoContainer/LogoContainer";

import { useAuth } from "../../hooks/useAuth";
import clsx from "clsx";

import styles from "./Header.module.css";

function Header({ handleLogoutModal }) {
  const { isLoggedIn, user } = useAuth();

  return (
    <header className={clsx(styles.header)}>
      <LogoContainer className={styles.logoContainer} />
      {isLoggedIn && (
        <div className={styles.userContainer}>
          <p> {user.username}</p>
          <span>|</span>
          <LogoutButton handleLogoutModal={handleLogoutModal} />
        </div>
      )}
    </header>
  );
}

export default Header;
