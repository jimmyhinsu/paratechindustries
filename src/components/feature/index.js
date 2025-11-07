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
      title: "QUALITY",
      description:
        "We have been delivering top-quality industrial products since 2010. Our commitment ensures premium and reliable solutions for clients.",
    },
    {
      icon: <FaUsers />,
      title: "TEAM",
      description:
        "Our experienced and dedicated team of engineers consistently meet customer expectations with precision and innovation.",
    },
    {
      icon: <FaTruck />,
      title: "DELIVERY",
      description:
        "We deliver on time with efficiency, ensuring every order reaches our clients promptly and securely.",
    },
    {
      icon: <FaHandshake />,
      title: "CLIENTELE",
      description:
        "We value long-term relationships and are dedicated to providing the best industrial machinery and service to our customers.",
    },
    {
      icon: <FaInfoCircle />,
      title: "ABOUT US",
      description:
        "Paratech Industries specializes in manufacturing and exporting high-quality laser and industrial machinery worldwide.",
    },
    {
      icon: <FaHeadset />,
      title: "AFTER SALES SERVICE",
      description:
        "Our support team is available anytime, ensuring our customers receive quick and reliable service whenever needed.",
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
