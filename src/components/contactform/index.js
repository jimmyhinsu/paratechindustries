"use client";
import React from "react";
import styles from "./contactform.module.scss";
import IntlTelInput from "intl-tel-input/react";
import "intl-tel-input/build/css/intlTelInput.css";

export default function Contactform() {
  return (
    <div className={styles.contactSection}>
      <div className={styles.container}>
        <div className={styles.maingrid}>
          <div className={styles.contactmap}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.3385741136904!2d72.833016!3d21.178705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f27806d502d%3A0x143d9a15529c99eb!2sParatech%20Industries!5e0!3m2!1sen!2sin!4v1761547769301!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              style={{ border: 0 }}
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          
          <div>
            <div className={styles.contactheader}>
              <h2>Get In Touch</h2>
              <p>We'd love to hear from you! Please fill out the form below.</p>
            </div>
            <form className={styles.contactForm}>
              <div className={styles.row}>
                <div className={styles.inputGroup}>
                  <label>First Name *</label>
                  <input
                    type="text"
                    placeholder="Enter first name"
                    className={styles.name}
                    required
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label>Last Name *</label>
                  <input
                    type="text"
                    placeholder="Enter last name"
                    className={styles.name}
                    required
                  />
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.inputGroup}>
                  <label>Email *</label>
                  <input
                    type="email"
                    placeholder="Enter email"
                    className={styles.name}
                    required
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label>Phone *</label>
                  <IntlTelInput
                    initOptions={{
                      initialCountry: "in",
                    }}
                    inputProps={{
                      className: "form-control",
                      name: "phone",
                      placeholder: "Enter phone number",
                    }}
                  />
                </div>
              </div>

              {/* <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label>Company Name *</label>
              <input
                type="text"
                placeholder="Your company"
                className={styles.name}
              />
            </div>
            <div className={styles.inputGroup}>
              <label>Position *</label>
              <input type="text" placeholder="Your role" />
            </div>
          </div> */}

              <div className={styles.inputGroup}>
                <label>Message *</label>
                <textarea
                  className={styles.name}
                  rows="6"
                  placeholder="Tell us your requirements"
                  required
                ></textarea>
              </div>

              <button type="submit" className={styles.submitBtn}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
