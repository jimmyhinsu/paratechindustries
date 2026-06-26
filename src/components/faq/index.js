"use client";
import React, { useState } from "react";
import styles from "./faq.module.scss";
import { FaChevronDown } from "react-icons/fa";

const faqData = [
  {
    question: "What industries use laser machines?",
    answer: "Laser machines are widely used in manufacturing, automotive, aerospace, electronics, medical device production, jewelry, packaging, and metal fabrication industries.",
  },
  {
    question: "What are the benefits of laser marking?",
    answer: "Laser marking provides permanent identification, improved traceability, high-speed processing, low maintenance costs, and exceptional precision.",
  },
  {
    question: "Can laser machines process different materials?",
    answer: "Yes. Depending on the machine type, laser systems can process metals, plastics, ceramics, composites, glass, coated materials, and more.",
  },
  {
    question: "Why choose Paratech Industries?",
    answer: "Paratech Industries combines advanced laser technology, industry expertise, customized solutions, quality manufacturing, and dedicated customer support to help businesses achieve their production goals.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection} id="faq">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span>FAQ's</span>
          <h2>Frequently Asked Questions</h2>
        </div>

        <div className={styles.faqList}>
          {faqData.map((item, index) => {
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
