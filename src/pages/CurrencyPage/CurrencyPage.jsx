import React from "react";
import Currency from "../../components/Currency/Currency";

import styles from "./CurrencyPage.module.css";

export default function CurrencyPage() {
  return (
    <div className={styles.container}>
      <Currency />
    </div>
  );
}
