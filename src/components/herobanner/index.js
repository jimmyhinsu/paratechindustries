"use client";
import React from "react";
import styles from "./herobanner.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function Herobanner() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.overlay}></div>

      <div className={styles.contentWrapper}>
        <div className={styles.textBox}>
          <h1>
            Precision <span>Technology</span> for a Smarter Future
          </h1>
          <p>
            At Paratech, we deliver cutting-edge laser solutions with
            reliability, innovation, and precision that define the future of
            industrial manufacturing.
          </p>

          <div className={styles.btnGroup}>
            <Link href="/" className={styles.primaryBtn}>
              Explore Products
            </Link>
            <Link href="/contact" className={styles.secondaryBtn}>
              Get Quote
            </Link>
          </div>
        </div>

        <div className={styles.imageBox}>
          <Image
            src="/images/laser-machine.png"
            alt="Laser Machine"
            width={600}
            height={450}
            className={styles.heroImg}
            priority
          />
        </div>
      </div>

      <div className={styles.motionBg}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
  );
}
