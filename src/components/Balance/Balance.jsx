import React, { useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useDispatch } from "react-redux";
import { refreshUser } from "../../redux/auth/operationsAuth";

import styles from "./Balance.module.css";

export default function Balance() {
  const { balanceAuth } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const balance = balanceAuth;

  return (
    <div className={styles.mainCont}>
      <p className={styles.balanceTitle}>Your balance</p>
      <div className={styles.sumContainer}>
        <span className={styles.sumContainer}>₴</span>
        {balance
          ? (Math.round(balanceAuth * 100) / 100).toFixed(2)
          : Number(0).toFixed(2)}
      </div>
    </div>
  );
}
