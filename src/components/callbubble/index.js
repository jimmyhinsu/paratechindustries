import React from "react";
import styles from "./callbubble.module.scss";
import { FaPhoneAlt } from "react-icons/fa";

export default function Callbubble() {
  return (
    <>
      <div>
        <a href="tel:+919879533323" className={styles.callbubble}>
          <span>Call Us</span>
          <FaPhoneAlt />
        </a>
      </div>
    </>
  );
}
