"use client";
import React from "react";
import styles from "./imagemodel.module.scss";
import Image from "next/image";

export default function Imagemodel({ image, onClose }) {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div
        className={styles.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.closeBtn} onClick={onClose}>
          ✕
        </button>

        <div className={styles.imageBox}>
          <Image
            src={image}
            alt="Application Preview"
            className={styles.previewImg}
            priority
          />
        </div>
      </div>
    </div>
  );
}
