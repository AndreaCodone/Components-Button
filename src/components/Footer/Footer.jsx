import React from "react";
import styles from "./Footer.module.scss";
import { TiSocialLinkedin } from "react-icons/Ti";
import { AiFillGithub } from "react-icons/Ai";

function Footer() {
  return (
    <footer>
      <div>
        {new Date().getFullYear()}
        <p>Challenge #17 - Componenti: Button</p>
        <p>Sviluppato per Frontenders</p>
        <a href="http://linkedin.com/in/andrea-coda">
          {<TiSocialLinkedin className={styles.linkedin} />}
        </a>
        <a href="https://github.com/AndreaCodone">
          {<AiFillGithub className={styles.github} />}
        </a>
      </div>
      {/* <p>&copy; {new Date().getFullYear()} Andrea Coda</p> */}
    </footer>
  );
}

export default Footer;
