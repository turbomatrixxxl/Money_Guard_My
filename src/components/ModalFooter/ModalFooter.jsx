import React, { useEffect, useRef } from "react";
import styles from "./ModalFooter.module.css";
import { useMediaQuery } from "react-responsive";
import Logo from "../commonComponents/Logo/Logo";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import FormButton from "../commonComponents/FormButton/FormButton";
import "animate.css";

// Corectarea importului imaginii
import Dragos from "../../assets/images/members-pictures/Dragos.webp";
import catalin from "../../assets/images/members-pictures/catalin.webp";
import Radu from "../../assets/images/members-pictures/Radu.webp";
import Stefan from "../../assets/images/members-pictures/Stefan.webp";

const ModalFooter = ({ closeModal }) => {
  const modalRef = useRef();

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const addCloseEvent = (event) => {
      if (event.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", addCloseEvent);

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", addCloseEvent);
    };
  });

  const closeOnClickOutside = (event) => {
    if (event.currentTarget === event.target) {
      closeModal();
    }
  };

  const screenCondition = useMediaQuery({ query: "(min-width: 768px)" });

  const animation = "animate__animated animate__fadeInDown animate__slow";

  return (
    <div
      className={styles.modalFooter}
      onClick={closeOnClickOutside}
      ref={modalRef}>
      <div className={styles.modalBg}>
        <div className={styles.modalContent}>
          {screenCondition && <Logo variant={"formLogo"} />}
          <h2>The Guardians of Balance:</h2>

          <div className={styles.footerCards}>
            {/* Card pentru Dragos*/}
            <div
              className={`${styles.footerTeamCard} ${animation} ${styles.Dragos}`}>
              <img
                src={Dragos} // Folosește variabila corectă pentru imagine
                alt="Dragos"
                className={styles.teamMemberImage}
              />
              <span className={styles.footerTeamName}>Dragos Ungureanu</span>
              <em className={styles.footerTeamFunction}>Team Lead</em>
              <div className={styles.socialLinks}>
                <a
                  href="https://github.com/DragosU25"
                  className={styles.footerGithubIcon}
                  aria-label="GitHub profile"
                  target="_blank"
                  rel="noreferrer noopener">
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/dragos-ungureanu-83485220b/"
                  className={styles.footerLinkedinIcon}
                  aria-label="LinkedIn profile"
                  target="_blank"
                  rel="noreferrer noopener">
                  <FaLinkedin />
                </a>
              </div>
            </div>

            {/* Card pentru Catalin */}
            <div
              className={`${styles.footerTeamCard} ${animation} ${styles.catalin}`}>
              <img
                src={catalin} // Folosește variabila corectă pentru imagine
                alt="Catalin"
                className={styles.teamMemberImage}
              />
              <span className={styles.footerTeamName}>Catalin Negoita</span>
              <em className={styles.footerTeamFunction}>Scrum Master</em>
              <div className={styles.socialLinks}>
                <a
                  href="https://github.com/PNM24"
                  className={styles.footerGithubIcon}
                  aria-label="GitHub profile"
                  target="_blank"
                  rel="noreferrer noopener">
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/"
                  className={styles.footerLinkedinIcon}
                  aria-label="LinkedIn profile"
                  target="_blank"
                  rel="noreferrer noopener">
                  <FaLinkedin />
                </a>
              </div>
            </div>

            {/* Card pentru Radu */}
            <div
              className={`${styles.footerTeamCard} ${animation} ${styles.Radu}`}>
              <img
                src={Radu} // Folosește variabila corectă pentru imagine
                alt="Radu"
                className={styles.teamMemberImage}
              />
              <span className={styles.footerTeamName}>
                Naramzoiu Radu Bogdan
              </span>
              <em className={styles.footerTeamFunction}>Developer</em>
              <div className={styles.socialLinks}>
                <a
                  href="https://github.com/turbomatrixxxl"
                  className={styles.footerGithubIcon}
                  aria-label="GitHub profile"
                  target="_blank"
                  rel="noreferrer noopener">
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/radu-bogdan-naramzoiu-fullstack-developer/"
                  className={styles.footerLinkedinIcon}
                  aria-label="LinkedIn profile"
                  target="_blank"
                  rel="noreferrer noopener">
                  <FaLinkedin />
                </a>
              </div>
            </div>

            {/* Card pentru Stefan */}
            <div
              className={`${styles.footerTeamCard} ${animation} ${styles.Stefan}`}>
              <img
                src={Stefan} // Folosește variabila corectă pentru imagine
                alt="Stefan"
                className={styles.teamMemberImage}
              />
              <span className={styles.footerTeamName}>
                Craciun Stefan Marian
              </span>
              <em className={styles.footerTeamFunction}>Developer</em>
              <div className={styles.socialLinks}>
                <a
                  href="https://github.com/Fear3dB3ard"
                  className={styles.footerGithubIcon}
                  aria-label="GitHub profile"
                  target="_blank"
                  rel="noreferrer noopener">
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/stefan-marian-craciun-73b766199/"
                  className={styles.footerLinkedinIcon}
                  aria-label="LinkedIn profile"
                  target="_blank"
                  rel="noreferrer noopener">
                  <FaLinkedin />
                </a>
              </div>
            </div>

            {/* Adaugă alte carduri pentru membrii echipei dacă este necesar */}
          </div>

          <FormButton
            type={"button"}
            text={"Thank You"}
            variant={"whiteButtton"}
            handlerFunction={() => closeModal()}
          />
        </div>
      </div>
    </div>
  );
};

export default ModalFooter;
