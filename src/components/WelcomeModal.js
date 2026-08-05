"use client";
import React, { useState, useEffect } from "react";
import styles from "./WelcomeModal.module.scss";
import { FiX, FiCheckCircle, FiAlertCircle, FiUser, FiPhone, FiMail } from "react-icons/fi";

export default function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Show popup after 1.5s delay if not submitted previously
    const hasSeenWelcome = localStorage.getItem("welcome_popup_submitted");
    if (!hasSeenWelcome) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    const cleanMobile = mobileNumber.replace(/\D/g, "");
    if (cleanMobile.length !== 10) {
      setErrorMsg("Mobile number must be exactly 10 digits.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/welcome-user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, mobileNumber: cleanMobile, email }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to submit form.");
      }

      setSubmitted(true);
      localStorage.setItem("welcome_popup_submitted", "true");

      setTimeout(() => {
        setIsOpen(false);
      }, 2500);
    } catch (err) {
      console.error(err);
      setErrorMsg(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={handleClose}>
      <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={handleClose} aria-label="Close popup">
          <FiX />
        </button>

        <div className={styles.modalHeader}>
          <h2>Welcome to Paratech Industries! 👋</h2>
          <p>Fill out the form below to connect with our industrial laser machine experts.</p>
        </div>

        {submitted ? (
          <div className={styles.successMessage}>
            <FiCheckCircle className={styles.successIcon} />
            <h3>Thank You!</h3>
            <p>Your details have been submitted. Our team will reach out to you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={styles.modalForm}>
            {errorMsg && (
              <div className={styles.errorMessage}>
                <FiAlertCircle />
                <span>{errorMsg}</span>
              </div>
            )}

            <div className={styles.inputGroup}>
              <label htmlFor="welcomeFullName">Full Name *</label>
              <div className={styles.inputWrapper}>
                <FiUser className={styles.inputIcon} />
                <input
                  id="welcomeFullName"
                  type="text"
                  required
                  placeholder="Enter full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="welcomeMobile">Phone Number *</label>
              <div className={styles.inputWrapper}>
                <FiPhone className={styles.inputIcon} />
                <input
                  id="welcomeMobile"
                  type="tel"
                  required
                  maxLength={10}
                  placeholder="Enter phone number"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, ""))}
                />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="welcomeEmail">Email Address</label>
              <div className={styles.inputWrapper}>
                <FiMail className={styles.inputIcon} />
                <input
                  id="welcomeEmail"
                  type="email"
                  placeholder="Enter email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <button type="submit" className={styles.submitBtn} disabled={loading}>
              {loading ? "Submitting..." : "Submit Details"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
