"use client";
import React from "react";
import styles from "./feature.module.scss";
import {
  FaCogs,
  FaHandshake,
  FaHeadset,
  FaInfoCircle,
  FaTruck,
  FaUsers,
} from "react-icons/fa";

export default function Feature() {
  const features = [
    {
      icon: <FaCogs />,
      tag: "QUALITY",
      title: "Quality Laser Machines",
      description:
        "We manufacture laser machines with a focus on precision, durability, performance, and consistent results for industrial applications.",
    },
    {
      icon: <FaUsers />,
      tag: "TEAM",
      title: "Experienced Team",
      description:
        "Our experienced engineering team understands different laser applications and helps customers identify suitable machine solutions.",
    },
    {
      icon: <FaTruck />,
      tag: "DELIVERY",
      title: "Reliable Delivery",
      description:
        "We follow an organised manufacturing and delivery process to help customers receive their laser machines on time.",
    },
    {
      icon: <FaHandshake />,
      tag: "CLIENTELE",
      title: "Trusted by Industries",
      description:
        "Our laser solutions support businesses across automotive, engineering, jewellery, electronics, pharmaceutical, and other industries.",
    },
    {
      icon: <FaInfoCircle />,
      tag: "ABOUT US",
      title: "Industrial Expertise",
      description:
        "Since 2014, Paratech Industries has been developing and supplying laser machinery for diverse manufacturing requirements.",
    },
    {
      icon: <FaHeadset />,
      tag: "AFTER SALES SERVICE",
      title: "After-Sales Support",
      description:
        "From installation and machine guidance to technical assistance, our team supports customers beyond the initial purchase.",
    },
  ];

  return (
    <>
      <section className={styles.featureSection}>
        <div className={styles.container}>
          <div className={styles.gridfeature}>
            {features.map((item, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.icon}>{item.icon}</div>
                <span className={styles.tag}>{item.tag}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
