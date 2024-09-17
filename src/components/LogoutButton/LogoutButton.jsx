import React from "react";

import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./LogoutButon.module.css";

function LogoutButton({ handleLogoutModal }) {
  return (
    <button
      className={styles.logoutContainer}
      onClick={() => {
        handleLogoutModal();
      }}>
      <FontAwesomeIcon icon={faRightFromBracket} className={styles.icon} />
      <span className={styles.exit}>Exit</span>
    </button>
  );
}

export default LogoutButton;
