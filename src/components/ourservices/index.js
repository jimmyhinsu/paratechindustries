"use client";
import React, { use } from "react";
import styles from "./ourservices.module.scss";
import bg from "@/assests/images/bg.jpg";
import Image from "next/image";
import { useAuth } from "@/common/AuthProvider";
import Link from "next/link";

const services = [
  { title: "Param Laser marking machine", img: bg },
  { title: "Conveyor Laser Marking Machine", img: bg },
  { title: "FLY Continue Bottle Laser Machine", img: bg },
  { title: "Metal Laser Engraving Marking Machine", img: bg },
  { title: "Colour Laser Marking Machine", img: bg },
];

const services1 = [
  { title: "Deep Marking Machine", img: bg },
  { title: "2d & 3d Die Engraving Machine", img: bg },
  { title: "Photo Engraving Machine", img: bg },
  { title: "Tool Laser Marking Machine", img: bg },
  { title: "Hammer Laser Marking Machine", img: bg },
];

const services2 = [
  { title: "Gold Silver Laser Cutting Machine For Jewellery", img: bg },
  { title: "High Speed Lesar Marking  Machine", img: bg },
  { title: "Mobile Cover Laser Marking Machine", img: bg },
  { title: "Stainless Steel Laser Marking Machine", img: bg },
  { title: "Stainless Steel Channel Laser Marking Machine", img: bg },
];

export default function Ourservices() {
  const { setScrollCategory } = useAuth();

  return (
    <>
      <div className={styles.servicesSection}>
        <div className={styles.container}>
          <div className={styles.heading}>
            <h2>Our Product Range</h2>
          </div>
          <div className={styles.subHeading}>
            <h3>Fiber Laser Marking Machine :</h3>

            <div className={styles.grid}>
              {services.map((service, i) => (
                <Link href="/">
                  <div
                    key={i}
                    className={styles.card}
                    onClick={() =>
                      setScrollCategory(service.title?.toLowerCase())
                    }
                  >
                    <div className={styles.imageWrapper}>
                      <Image
                        src={service.img}
                        alt={service.title}
                        className={styles.image}
                      />
                    </div>

                    <div className={styles.content}>
                      <h3>{service.title}</h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className={styles.subHeading}>
            <h3>laser marking machine :</h3>

            <div className={styles.grid}>
              {services1.map((service, i) => (
                <Link href="/">
                  <div
                    key={i}
                    className={styles.card}
                    onClick={() =>
                      setScrollCategory(service.title?.toLowerCase())
                    }
                  >
                    <div className={styles.imageWrapper}>
                      <Image
                        src={service.img}
                        alt={service.title}
                        className={styles.image}
                      />
                    </div>

                    <div className={styles.content}>
                      <h3>{service.title}</h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className={styles.subHeading}>
            <h3>Jewellery Laser Marking Machine :</h3>

            <div className={styles.grid}>
              {services2.map((service, i) => (
                <Link href="/">
                  <div
                    key={i}
                    className={styles.card}
                    onClick={() =>
                      setScrollCategory(service.title?.toLowerCase())
                    }
                  >
                    <div className={styles.imageWrapper}>
                      <Image
                        src={service.img}
                        alt={service.title}
                        className={styles.image}
                      />
                    </div>

                    <div className={styles.content}>
                      <h3>{service.title}</h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
