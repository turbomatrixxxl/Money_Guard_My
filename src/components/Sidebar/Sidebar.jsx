import React, { useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import icons from "../../assets/images/icons/icons.svg";

import { NavLink } from "react-router-dom";
import styled from "styled-components";

import styles from "./Sidebar.module.css";
import clsx from "clsx";
import Balance from "../Balance/Balance";
import Currency from "../Currency/Currency";

const StyledLink = styled(NavLink)`
  color: var(--white, #fbfbfb);
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration: none;

  &.active {
    svg {
      // stroke: white;
      filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
      background: #4a56e2;
      fill: rgba(255, 255, 255, 1);
    }

    ,
    span {
      font-weight: 700;
    }
  }
`;

export default function Sidebar() {
  const linkActive = useRef();
  const screenCondition = useMediaQuery({ query: "(min-width: 768px)" });

  useEffect(() => {
    linkActive?.current?.click();
    if (screenCondition) {
      linkActive?.current?.click();
    }
  }, [screenCondition]);

  return (
    <aside className={styles.sidebarContainer}>
      <div className={styles.sidebarLeftContainer}>
        <div className={styles.linksContainer}>
          <nav className={styles.nav}>
            <StyledLink
              ref={linkActive}
              className={clsx(styles.link, styles.homeLink)}
              to={"/home"}>
              <svg className={styles.homeIcon}>
                <use href={`${icons}#icon-home`}></use>
              </svg>

              <span className={styles.span}>Home</span>
            </StyledLink>
            <StyledLink
              className={clsx(styles.link, styles.statisticsLink)}
              to={"/statistics"}>
              <svg className={styles.statisticsIcon}>
                <use href={`${icons}#icon-statistics`}></use>
              </svg>
              <span className={styles.span}>Statistics</span>
            </StyledLink>
            <StyledLink
              className={clsx(styles.link, styles.currencyLink)}
              to={"/currency"}>
              <svg className={styles.currencyIcon}>
                <use href={`${icons}#icon-currency`}></use>
              </svg>
            </StyledLink>
          </nav>
        </div>
        <div className={styles.balanceContainer}>
          <Balance />
        </div>
      </div>
      <div className={styles.currencyContainer}>
        <Currency />
      </div>
    </aside>
  );
}
