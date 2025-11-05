"use client";
import React from "react";
import styles from "./herobanner.module.scss";
import Image from "next/image";
import bgImage from "@/assests/images/bg.jpg"

export default function HeroBanner() {
  return (
    <section className={styles.heroSection}>
      <Image src={bgImage} alt="Paratech Industry" className={styles.bgImage} priority />

      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <h1>
          Powering The Future of <span>Industrial Innovation</span>
        </h1>
        <p>
          Paratech Industry delivers reliable engineering and manufacturing solutions 
          with precision, technology, and trust.
        </p>
        <div className={styles.buttons}>
          <button className={styles.primaryBtn}>Explore More</button>
          <button className={styles.secondaryBtn}>Contact Us</button>
        </div>
      </div>
    </section>
  );
}
