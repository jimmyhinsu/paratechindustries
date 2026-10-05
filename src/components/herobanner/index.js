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
        sizes="100vw"
      />

      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <h1>Laser Machine Manufacturer in India | Paratech Industries</h1>
        <p>
          Paratech Industries is a trusted laser machine manufacturer in India, delivering reliable laser marking, cutting, engraving, welding, and specialised laser solutions for industries across India.

        </p>
        <div className={styles.buttons}>
          <Link href="/aboutus">
            <button className={styles.primaryBtn}>Explore Laser Machines</button>
          </Link>
          <Link href="/contactus">
            <button className={styles.secondaryBtn}>Get a Quote</button>
          </Link>
        </div>
      </div>
    </section>
  );
}
