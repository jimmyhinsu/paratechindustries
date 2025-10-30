import React from "react";
import styles from "./commonherobanner.module.scss";

export default function Commonherobanner({ title, subtitle, bgImage }) {
  return (
    <>
      <div className={styles.hero} style={{ backgroundImage: `url(${bgImage})` }}>
        <div className={styles.blurbg}>
          <div className={styles.container}>
            <div className={styles.content}>
              <h1>{title}</h1>
              {subtitle && <p>{subtitle}</p>}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
