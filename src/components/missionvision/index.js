import React from "react";
import { FaRocket, FaRegLightbulb } from "react-icons/fa";
import styles from "./missionvision.module.scss";

export default function MissionVision() {
  return (
    <section className={styles.missionVision}>
      <div className={styles.container}>
        <div className={styles.missionvisiongrid}>
          {/* Mission */}
          <div className={styles.card}>
            <div className={styles.iconWrap}>
              <FaRocket />
            </div>
            <span className={styles.tag}>Our Mission</span>
            <h2>Driving Innovation with Purpose</h2>
            <p>
              To meet our customers' expectations of quality, delivery, and cost
              by continuous development and customer interaction.
            </p>
          </div>

          {/* Vision */}
          <div className={styles.card}>
            <div className={styles.iconWrap}>
              <FaRegLightbulb />
            </div>
            <span className={styles.tag}>Our Vision</span>
            <h2>Shaping a Brighter Tomorrow</h2>
            <p>
              To be acknowledged as the world's leading manufacturer and
              supplier of industrial laser machines and to make a big difference
              for our consumers, distributors, and communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
