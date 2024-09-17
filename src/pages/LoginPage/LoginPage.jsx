import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import styles from "./LoginPage.module.css";
import leftImage from "../../assets/images/login-background-left-side.png"; // Imaginea din stânga
import rightImage from "../../assets/images/login-background-right-side.png"; // Imaginea din dreapta
import LogoContainer from "../../components/LogoContainer/LogoContainer";

function LoginPage() {
  return (
    <div className={styles.container}>
      <div className={styles.imageLeft}>
        <img src={leftImage} alt="Left" />
      </div>
      <div className={styles.imageRight}>
        <img src={rightImage} alt="Right" />
      </div>
      <div className={styles.logInContainer}>
        <LogoContainer className={styles.logoContainer} />
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;
