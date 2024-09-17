import { Link } from "react-router-dom";
import styles from "./Logo.module.css";
import icons from "../../../assets/images/icons/icons.svg";
import PropTypes from "prop-types";

const Logo = ({ variant = "default" }) => {
  return (
    <Link
      className={`${styles.logo} ${styles[variant] || styles.default}`}
      to="/">
      <svg aria-label="Logo de Money Guard">
        <use href={`${icons}#icon-logo`}></use>
      </svg>
      <span>Money Guard</span>
    </Link>
  );
};

Logo.propTypes = {
  variant: PropTypes.string,
};

export default Logo;
