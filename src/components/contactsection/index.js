import React from "react";
import styles from "./contactsection.module.scss";

export default function Contactsection() {
  return (
    <>
      <div className={styles.contactsection}>
        <div className={styles.contactimg}>
          <div className={styles.overlay}>
            <div className={styles.allmain}>
              <h2>Let's Build Something Great Together</h2>
              <p>
                Connect with our team today and discover how we can help you
                accelerate growth and achieve success.
              </p>
              <a href="/contactus">
                <button className={styles.cta}>Contact Us</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
