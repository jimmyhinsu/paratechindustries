"use client";
import React, { useState } from "react";
import styles from "./productfaq.module.scss";
import { FiChevronDown } from "react-icons/fi";

export default function ProductFaq({ faqs = [], productName = "Product" }) {
  // Allow first FAQ to be expanded by default for immediate engagement
  const [openIndex, setOpenIndex] = useState(0);

  if (!Array.isArray(faqs) || faqs.length === 0) {
    return null;
  }

  const toggleFaq = (index) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  // Structured Data Schema for Search Engines (Google FAQPage rich snippet)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className={styles.productFaqWrapper} id="product-faqs">
      {/* Google FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className={styles.headerArea}>
        <span className={styles.subHeading}>GOT QUESTIONS?</span>
        <h3 className={styles.heading}>Frequently Asked Questions</h3>
      </div>

      <div className={styles.faqList}>
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={faq.id || index}
              className={`${styles.faqCard} ${isOpen ? styles.active : ""}`}
            >
              <button
                type="button"
                className={styles.questionBtn}
                onClick={() => toggleFaq(index)}
                aria-expanded={isOpen}
                aria-controls={`product-faq-ans-${index}`}
                id={`product-faq-q-${index}`}
              >
                <span className={styles.questionText}>{faq.question}</span>
                <span className={`${styles.iconWrap} ${isOpen ? styles.rotated : ""}`}>
                  <FiChevronDown />
                </span>
              </button>

              <div
                id={`product-faq-ans-${index}`}
                role="region"
                aria-labelledby={`product-faq-q-${index}`}
                className={`${styles.answerContainer} ${isOpen ? styles.expanded : ""}`}
              >
                <div className={styles.answerContent}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
