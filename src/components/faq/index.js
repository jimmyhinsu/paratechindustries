"use client";
import React, { useState } from "react";
import styles from "./faq.module.scss";
import { FaChevronDown } from "react-icons/fa";
import { laserFaqData } from "@/data/faqs";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection} id="faq">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span>FAQ'S</span>
          <h2>Frequently Asked Questions About Laser Machines</h2>
        </div>

        <div className={styles.faqList}>
          {laserFaqData.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className={`${styles.faqItem} ${isOpen ? styles.active : ""}`}
              >
                <button
                  className={styles.faqQuestion}
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  id={`faq-btn-${index}`}
                  aria-controls={`faq-content-${index}`}
                >
                  <h3>{item.question}</h3>
                  <span className={styles.iconWrapper}>
                    <FaChevronDown />
                  </span>
                </button>
                <div
                  id={`faq-content-${index}`}
                  className={styles.faqAnswerWrapper}
                  style={{
                    maxHeight: isOpen ? "250px" : "0px",
                  }}
                  aria-hidden={!isOpen}
                >
                  <p className={styles.faqAnswer}>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
