import React from "react";
import styles from "./Footer.module.scss";
import { TiSocialLinkedin } from "react-icons/Ti";
import { AiFillGithub } from "react-icons/Ai";

function Footer() {
  return (
    <footer>
      <div>
        <p>Challenge #17 - Componenti: Button</p>
        <p>Sviluppato per Frontenders</p>
      </div>
      <div className={styles.icons}>
        <a href="#">{<TiSocialLinkedin />}</a>
        <a href="#">{<AiFillGithub />}</a>
      </div>
      {/* <p>&copy; {new Date().getFullYear()} Andrea Coda</p> */}
    </footer>
  );
}

export default Footer;
