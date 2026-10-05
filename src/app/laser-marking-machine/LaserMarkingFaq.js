"use client";
import React, { useState } from "react";
import styles from "./lasermarking.module.scss";
import { FaChevronDown } from "react-icons/fa";

export default function LaserMarkingFaq({ faqs }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (idx) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  return (
    <div className={styles.faqList}>
      {faqs.map((faq, index) => {
        const isOpen = activeIndex === index;
        return (
          <div
            key={index}
            className={`${styles.faqItem} ${isOpen ? styles.active : ""}`}
          >
            <button
              className={styles.faqBtn}
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              id={`lmm-faq-${index}`}
            >
              <h3>{faq.question}</h3>
              <span className={styles.iconWrapper}>
                <FaChevronDown />
              </span>
            </button>
            <div
              className={styles.faqAnswerWrapper}
              style={{ maxHeight: isOpen ? "300px" : "0px" }}
            >
              <p className={styles.faqAnswer}>{faq.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
