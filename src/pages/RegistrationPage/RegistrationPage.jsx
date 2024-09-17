import React from "react";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import styles from "./RegistrationPage.module.css";

// import backgroundImage from "../../assets/images/register-background.png"; // Imaginea de fundal
import LogoContainer from "../../components/LogoContainer/LogoContainer";

function RegistrationPage() {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundImage}></div>
      <div className={styles.registrationPage}>
        <div className={styles.registrationContainer}>
          <LogoContainer className={styles.logoContainer} />
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}

export default RegistrationPage;
