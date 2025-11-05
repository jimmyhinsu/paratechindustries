import React from "react";
import styles from "./imagemodel.module.scss";
import Image from "next/image";

export default function Imagemodel({ image, onClose }) {
  return (
    <>
      <div className={styles.overlay} onClick={onClose}>
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
          <button
            className={styles.close}
            onClick={onClose}
            aria-label="Close image"
          >
            ✖
          </button>
          <div className={styles.imgWrap}>
            <Image
              src={image}
              alt="Application preview"
              width={900}
              height={700}
            />
          </div>
        </div>
      </div>
    </>
  );
}
