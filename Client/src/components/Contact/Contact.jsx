import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import gmail from "../../assets/contact/emailIcon.png";
import linkedin from "../../assets/contact/githubIcon.png";
import github from "../../assets/contact/linkedinIcon.png";



export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={gmail} alt="Email icon" />
          <a href="mailto:arielbanua76@email.com">arielbanua76@email.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={linkedin}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/ariel-banua/">linkedin.com/ariel-banua</a>
        </li>
        <li className={styles.link}>
          <img src={github} />
          <a href="https://github.com/Arielbanua">github.com/Arielbanua</a>
        </li>
      </ul>
    </footer>
  );
};
