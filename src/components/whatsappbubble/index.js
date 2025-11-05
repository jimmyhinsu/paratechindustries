import React from "react";
import styles from "./whatsappbubble.module.scss";
import Whatsappicon from "@/assests/svg/Whatsappicon";

export default function Whatsappbubble() {
  return (
    <>
      <a
        href="https://wa.me/919879533323"
        target="__blank"
        className={styles.whatsappbubble}
      >
        <span>Chat with us</span>
        <Whatsappicon />
      </a>
    </>
  );
}
