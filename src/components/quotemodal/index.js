"use client";
import React, { useState } from "react";
import styles from "./quotemodal.module.scss";

export default function QuoteModal({ isOpen, onClose, productName = "" }) {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "mobileNumber") {
      // Only keep digits and restrict to max 10 characters
      const numericValue = value.replace(/\D/g, "").slice(0, 10);
      setFormData((prev) => ({
        ...prev,
        mobileNumber: numericValue,
      }));
      return;
    }
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.mobileNumber || !formData.email) {
      return;
    }

    if (formData.mobileNumber.length !== 10) {
      setErrorMsg("Mobile number must be exactly 10 digits.");
      return;
    }

    setIsSubmitting(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/send-quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          productName,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setIsSubmitted(true);
      } else {
        setErrorMsg(data.error || "Failed to send request. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setErrorMsg("An error occurred while submitting. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setIsSubmitting(false);
    setErrorMsg("");
    setFormData({
      fullName: "",
      mobileNumber: "",
      email: "",
      message: "",
    });
    onClose();
  };

  return (
    <div className={styles.modalOverlay} onClick={handleClose}>
      <div
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={styles.closeBtn}
          onClick={handleClose}
          aria-label="Close quote modal"
        >
          ✕
        </button>

        {isSubmitted ? (
          <div className={styles.successContainer}>
            <div className={styles.successIcon}>✓</div>
            <h3>Request Sent!</h3>
            <p>
              Thank you{formData.fullName ? `, ${formData.fullName}` : ""}. We have received your request
              {productName ? ` for ${productName}` : ""} and will get back to you shortly.
            </p>
            <button className={styles.doneBtn} onClick={handleClose}>
              Close
            </button>
          </div>
        ) : (
          <div className={styles.formContainer}>
            <h2>Request A Quote</h2>
            {productName && (
              <p className={styles.productSubtext}>
                Inquiry for: <strong>{productName}</strong>
              </p>
            )}

            {errorMsg && (
              <div className={styles.errorMessage}>
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Enter full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="mobileNumber">
                  Mobile Number <span className={styles.requiredStar}>*</span>
                </label>
                <input
                  type="tel"
                  id="mobileNumber"
                  name="mobileNumber"
                  placeholder="Enter mobile number"
                  required
                  maxLength={10}
                  pattern="[0-9]{10}"
                  inputMode="numeric"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">
                  Email Address <span className={styles.requiredStar}>*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter email address"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="Enter message"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                />
              </div>

              <button
                type="submit"
                className={styles.submitBtn}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Submit Request \u00A0 →"}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
