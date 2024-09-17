import React from "react";

import { useRate } from "../../hooks/useRate";

import styles from "./Currency.module.css";

export default function Currency() {
  const { rate } = useRate();
  // console.log(rate);
  // console.log(rate.rates.EUR);
  // console.log(rate?.rates?.RON);

  const usdBuy = rate
    ? `${Number(rate?.rates?.RON).toFixed(2)}`
    : `${Number(4.51)}`;
  const usdSell = `${Number(usdBuy * 1.1).toFixed(2)}`;

  const eurBuy = rate
    ? `${Number(Math.round(usdBuy * 1.01)).toFixed(2)}`
    : `${Number(4, 51 * 1.01).toFixed(2)}`;
  const eurSell = `${Number(eurBuy * 1.1).toFixed(2)}`;

  return (
    <div className={styles.mainContainer}>
      <div className={styles.titlesContainer}>
        <p className={styles.title}>Currency</p>
        <p className={styles.title}>Purchase</p>
        <p className={styles.title}>Sale</p>
      </div>
      <div className={styles.currenciesContainer}>
        <div className={styles.currencyContainer}>
          <span className={styles.currency}>USD</span>
          <span className={styles.currency}>{usdBuy}</span>
          <span className={styles.currency}>{usdSell}</span>
        </div>
        <div className={styles.currencyContainer}>
          <span className={styles.currency}>EUR</span>
          <span className={styles.currency}>{eurBuy}</span>
          <span className={styles.currency}>{eurSell}</span>
        </div>
      </div>
      <div className={styles.graphContainer}>
        <div className={styles.graphStrokeContainer}>
          <div className={styles.graphStrokeElipseLeftContainer}>
            <span className={styles.graphStrokeElipseNumber}>{usdBuy}</span>
            <svg
              className={styles.graphStrokeElipseSvg}
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="6"
              viewBox="0 0 6 6"
              fill="none">
              <circle
                cx="3"
                cy="3"
                r="2.65"
                fill="#563EAF"
                stroke="#FF868D"
                strokeWidth="0.7"
              />
            </svg>
          </div>
          <div className={styles.graphStrokeElipseRightContainer}>
            <span className={styles.graphStrokeElipseNumber}>{eurBuy}</span>
            <svg
              className={styles.graphStrokeElipseSvg}
              xmlns="http://www.w3.org/2000/svg"
              width="6"
              height="6"
              viewBox="0 0 6 6"
              fill="none">
              <circle
                cx="3"
                cy="3"
                r="2.65"
                fill="#563EAF"
                stroke="#FF868D"
                strokeWidth="0.7"
              />
            </svg>
          </div>
          <svg
            className={styles.graphStrokeSvg}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 72"
            fill="none">
            <path
              d="M0 48.1232L25.6 30.368C27.8187 28.4332 33.9968 24.5634 40.96 24.5634C47.9232 24.5634 53.4187 27.295 55.296 28.6608L110.08 67.5855C111.616 68.7237 116.326 71 122.88 71C129.434 71 134.144 68.7237 135.68 67.5855L230.4 6.46313C232.789 4.64208 238.08 1 244.736 1C251.392 1 257.365 4.64208 260.096 6.46313L280.576 20.8038C281.941 21.7144 286.208 23.5354 292.352 23.5354C298.496 23.5354 301.818 21.5514 303.104 20.8038C307.586 18.1985 310.805 15.3875 316.416 15.6821C317.137 15.72 318.834 15.8815 320 16.365"
              stroke="#FF868D"
            />
          </svg>
        </div>
        <div className={styles.graph}>
          <svg
            className={styles.graphSvg}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 88">
            <path
              d="M25.6 29.4725L0 47.2908V80C0 84.4183 3.58171 88 7.99999 88H312C316.418 88 320 84.4183 320 80V15.4197C318.834 14.9345 317.137 14.7724 316.416 14.7344C310.805 14.4387 307.586 17.2597 303.104 19.8743L303.048 19.9068C301.724 20.6803 298.409 22.6156 292.352 22.6156C286.208 22.6156 281.941 20.7881 280.576 19.8743L260.096 5.48257C257.365 3.65504 251.392 0 244.736 0C238.08 0 232.789 3.65504 230.4 5.48257L135.68 66.8225C134.144 67.9647 129.434 70.2491 122.88 70.2491C116.326 70.2491 111.616 67.9647 110.08 66.8225L55.296 27.7592C53.4187 26.3886 47.9232 23.6473 40.96 23.6473C33.9968 23.6473 27.8187 27.5308 25.6 29.4725Z"
              fill="url(#paint0_linear_34_6965)"
              fillOpacity="0.6"
            />
            <path
              d="M25.6 29.4725L0 47.2908V80C0 84.4183 3.58171 88 7.99999 88H312C316.418 88 320 84.4183 320 80V15.4197C318.834 14.9345 317.137 14.7724 316.416 14.7344C310.805 14.4387 307.586 17.2597 303.104 19.8743L303.048 19.9068C301.724 20.6803 298.409 22.6156 292.352 22.6156C286.208 22.6156 281.941 20.7881 280.576 19.8743L260.096 5.48257C257.365 3.65504 251.392 0 244.736 0C238.08 0 232.789 3.65504 230.4 5.48257L135.68 66.8225C134.144 67.9647 129.434 70.2491 122.88 70.2491C116.326 70.2491 111.616 67.9647 110.08 66.8225L55.296 27.7592C53.4187 26.3886 47.9232 23.6473 40.96 23.6473C33.9968 23.6473 27.8187 27.5308 25.6 29.4725Z"
              fill="#390096"
              fillOpacity="0.2"
            />
            <defs>
              <linearGradient
                id="paint0_linear_34_6965"
                x1="160"
                y1="12.95"
                x2="160"
                y2="102.2"
                gradientUnits="userSpaceOnUse">
                <stop stopColor="white" />
                <stop
                  offset="0.374892"
                  stopColor="white"
                  stopOpacity="0.536458"
                />
                <stop
                  offset="0.6091"
                  stopColor="white"
                  stopOpacity="0.269957"
                />
                <stop
                  offset="0.766012"
                  stopColor="white"
                  stopOpacity="0.151176"
                />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}
