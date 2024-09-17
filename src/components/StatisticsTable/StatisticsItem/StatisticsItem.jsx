import React from "react";
import PropTypes from "prop-types";

import styles from "./StatisticsItem.module.css";

const getTrasactionColor = (color) => {
  switch (color) {
    case "Main expenses":
      return "rgba(254, 208, 87, 1)";

    case "Products":
      return "rgba(255, 0, 255, 1)";

    case "Car":
      return "rgba(253, 148, 152, 1)";

    case "Self care":
      return "rgba(197, 186, 255, 1)";

    case "Child care":
      return "rgba(127, 255, 0, 1)";

    case "Household products":
      return "rgba(74, 86, 226, 1)";

    case "Education":
      return "rgba(0, 255, 255, 1)";

    case "Leisure":
      return "rgba(255, 119, 0, 1)";

    case "Other expenses":
      return "rgba(0, 173, 132, 1)";

    case "Entertainment":
      return "rgba(177, 15, 72, 1)";

    default:
      return "rgb(128, 128, 128)";
  }
};

export default function StatisticsItem({ variant, sum }) {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.itemLeftContainer}>
        <div
          style={{ backgroundColor: getTrasactionColor(variant) }}
          className={styles.itemLeftContainerCube}></div>
        <p className={styles.itemLeftContainerName}>{variant}</p>
      </div>
      <div className={styles.itemRigtContainerSum}>{sum}</div>
    </div>
  );
}

StatisticsItem.propTypes = {
  variant: PropTypes.string,
  sum: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
