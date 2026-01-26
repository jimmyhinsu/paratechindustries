import React from "react";
import styles from "./cataloguebubble.module.scss";
import { FaBookOpen } from "react-icons/fa";

export default function Cataloguebubble() {
  return (
    <>
      <div>
        <a
          href="/catalogue.pdf" // change to your catalogue link
          target="_blank"
          className={styles.cataloguebubble}
        >
          <span>Catalogue</span>
          <FaBookOpen />
        </a>
      </div>
    </>
  );
}
