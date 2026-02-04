import React from "react";
import styles from "./mailbubble.module.scss";
import { FaEnvelope } from "react-icons/fa";

export default function Mailbubble() {
  return (
    <>
      <div>
        <a href="mailto:info@paratechindustries.com" className={styles.mailbubble}>
          <span>Email Us</span>
          <FaEnvelope />
        </a>
      </div>
    </>
  );
}
