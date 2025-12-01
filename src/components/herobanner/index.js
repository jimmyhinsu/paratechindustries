"use client";
import React from "react";
import styles from "./herobanner.module.scss";
import Image from "next/image";
import bgImage from "@/assests/images/backimg.jpg";
import Link from "next/link";

export default function HeroBanner() {
  return (
    <section className={styles.heroSection}>
      <Image
        src={bgImage}
        alt="Paratech Industry"
        className={styles.bgImage}
        priority
      />

      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <h1>Powering The Future of Industries Innovation</h1>
        <p>
          Paratech Industries delivers reliable engineering and manufacturing
          solutions with precision, technology, and trust.
        </p>
        <div className={styles.buttons}>
          <Link href="/aboutus">
            <button className={styles.primaryBtn}>Explore More</button>
          </Link>
          <Link href="/contactus">
            <button className={styles.secondaryBtn}>Contact Us</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
