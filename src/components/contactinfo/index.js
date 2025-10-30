import React from "react";
import styles from "./contactinfo.module.scss";
import Mailicon from "@/assests/svg/mailicon";
import Callicon from "@/assests/svg/callicon";
import Clockicon from "@/assests/svg/clockicon";

export default function Contactinfo() {
  return (
    <>
      <div className={styles.contactInfoSection}>
        <div className={styles.container}>
          <div className={styles.topCards}>
            <div className={styles.card}>
              <div className={styles.box}>
                <Mailicon />
              </div>
              <div className={styles.textContent}>
                <p>Email</p>
                <a href="">
                  <h3>info@example.com</h3>
                </a>
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.box}>
                <Callicon />
              </div>
              <div className={styles.textContent}>
                <p>Phone</p>
                <a href="tel:+918045477720" target="__blank">
                  <h3>+91 8045477720</h3>
                </a>
              </div>
            </div>

            <div className={styles.card}>
              <div className={styles.box}>
                <Clockicon />
              </div>
              <div className={styles.textContent}>
                <p>Working Hours</p>
                <h3>Mon - sat: 9:00 AM - 9:00 PM</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
