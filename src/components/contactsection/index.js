import React from "react";
import styles from "./contactsection.module.scss";

export default function Contactsection() {
  return (
    <>
      <div className={styles.contactsection}>
        <div className={styles.contactimg}>
          <div className={styles.overlay}>
            <div className={styles.allmain}>
              <h2>Looking for a Laser Machine Manufacturer in India?</h2>
              <p>
                Tell us about your material, application, production requirements, and desired output. Our team will help you find a suitable laser machine for your business.
              </p>
              <a href="/contactus">
                <button className={styles.cta}>Get a Quote</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
