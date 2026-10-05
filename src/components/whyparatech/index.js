import React from "react";
import styles from "./whyparatech.module.scss";
import { FaBullseye, FaBolt, FaAward, FaHeadset, FaCheckCircle } from "react-icons/fa";
import Link from "next/link";

const highlights = [
  {
    icon: <FaBullseye />,
    title: "Application-Focused Solutions",
    description:
      "Choose the right laser technology based on your material and production requirements.",
  },
  {
    icon: <FaBolt />,
    title: "Precision & Performance",
    description:
      "Machines designed for accurate and consistent industrial processing.",
  },
  {
    icon: <FaAward />,
    title: "Industry Experience",
    description:
      "Serving diverse manufacturing requirements with laser technology since 2014.",
  },
  {
    icon: <FaHeadset />,
    title: "Technical & After-Sales Support",
    description:
      "Get assistance from machine selection through installation and ongoing support.",
  },
];

export default function WhyParatech() {
  return (
    <section className={styles.whySection} id="why-choose-us">
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.contentCol}>
            <span className={styles.subHeading}>WHY PARATECH INDUSTRIES</span>
            <h2 className={styles.mainHeading}>
              Your Trusted Laser Machine Manufacturer in India
            </h2>
            <p className={styles.leadText}>
              Choosing the right laser machine is about more than machine price or laser power. Material type, application, production volume, required accuracy, machine configuration, and after-sales support all influence the right choice.
            </p>
            <p className={styles.bodyText}>
              At Paratech Industries, we provide application-focused laser solutions for businesses looking for reliable performance and precision. Our range includes fiber laser marking machines, fiber laser cutting machines, UV laser marking machines, CO₂ laser machines, laser welding machines, and specialised jewellery laser solutions.
            </p>

            <div className={styles.ctaWrapper}>
              <Link href="/contactus" className={styles.ctaButton}>
                Consult Our Laser Experts
              </Link>
            </div>
          </div>

          <div className={styles.pointsCol}>
            <div className={styles.pointsGrid}>
              {highlights.map((item, idx) => (
                <div key={idx} className={styles.pointCard}>
                  <div className={styles.iconBox}>{item.icon}</div>
                  <div className={styles.cardContent}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
