import React from "react";
import styles from "./homeindustries.module.scss";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

import automobile from "@/assests/images/automobile.webp";
import engineering from "@/assests/images/engineering.webp";
import jewellery from "@/assests/images/jewellery.webp";
import electronics from "@/assests/images/electronics.webp";
import pharma from "@/assests/images/pharma.webp";
import sheetmetal from "@/assests/images/sheetmetal.webp";

const industryList = [
  {
    title: "Automotive & Auto Components",
    description:
      "Permanent marking and identification of compatible components.",
    image: automobile,
  },
  {
    title: "Engineering & Manufacturing",
    description:
      "Laser marking, cutting, engraving, and welding for industrial production.",
    image: engineering,
  },
  {
    title: "Jewellery",
    description:
      "Precision cutting, engraving, marking, and specialised jewellery applications.",
    image: jewellery,
  },
  {
    title: "Electrical & Electronics",
    description:
      "Product identification, serial numbers, codes, and component marking.",
    image: electronics,
  },
  {
    title: "Pharmaceutical & Medical",
    description:
      "Suitable laser marking solutions for product identification and traceability.",
    image: pharma,
  },
  {
    title: "Sheet Metal & Fabrication",
    description:
      "Efficient cutting solutions for compatible metal sheets and components.",
    image: sheetmetal,
  },
];

export default function HomeIndustries() {
  return (
    <section className={styles.industriesSection} id="industries">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.subHeading}>INDUSTRIES WE SERVE</span>
          <h2 className={styles.mainHeading}>Laser Solutions for Diverse Industries</h2>
          <p className={styles.description}>
            Our laser machines are used for marking, cutting, engraving, welding, and other precision applications across multiple industries.
          </p>
        </div>

        <div className={styles.grid}>
          {industryList.map((item, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={styles.image}
                  loading="lazy"
                />
                <div className={styles.overlay} />
              </div>
              <div className={styles.content}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.viewMoreWrapper}>
          <Link href="/industriesweserve" className={styles.viewMoreBtn}>
            <span>Explore All 35+ Industries We Serve</span>
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
