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
        <h1>Empowering Industries Through Innovation</h1>
        <p>
          Paratech Industries is committed to delivering reliable, innovative,
          and future-ready solutions for businesses worldwide.
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
