"use client";
import React, { useState } from "react";
import styles from "./dengravingsection.module.scss";
import Imagemodel from "../imagemodel";
import Image from "next/image";
import drm1 from "@/assests/images/drm1.png";
import drm2 from "@/assests/images/drm2.png";
import drm3 from "@/assests/images/drm3.png";
import dengraving from "@/assests/images/dengraving.jpg";

export default function Dengravingsection() {
  // Main product images (thumbnails change the main image)
  const productImages = [dengraving];

  // Application images (click opens modal)
  const applicationImages = [
    drm1,
    drm2,
    drm3,
  ];

  const [mainImage, setMainImage] = useState(productImages[0]);
  const [modalImage, setModalImage] = useState(null);

  return (
    <div>
      <section className={styles.engraving}>
        <div className={styles.container}>
          <div className={styles.gridmachine}>
            {/* LEFT: Product image, thumbnails, buttons */}
            <div className={styles.left}>
              <div className={styles.imageWrap}>
                <Image
                  src={mainImage}
                  alt="Machine"
                  width={700}
                  height={630}
                  className={styles.mainImage}
                  priority
                />
              </div>

              <div className={styles.thumbRow}>
                {productImages.map((img, i) => (
                  <button
                    key={i}
                    className={`${styles.thumbBtn} ${
                      mainImage === img ? styles.active : ""
                    }`}
                    onClick={() => setMainImage(img)}
                    aria-label={`Select image ${i + 1}`}
                  >
                    <Image
                      src={img}
                      alt={`thumb-${i}`}
                      width={80}
                      height={60}
                    />
                  </button>
                ))}
              </div>

              <div className={styles.actions}>
                <button className={styles.quoteBtn}>
                  Request A Quote &nbsp; →
                </button>
                <button className={styles.catalogBtn}>
                  Download Catalogue &nbsp; →
                </button>
              </div>
            </div>

            {/* RIGHT: Title, Materials, Specification table, Application grid */}
            <div className={styles.right}>
              <h2>3D Engraving</h2>
              
              <h4 className={styles.specHeading}>Specification</h4>

              <table className={styles.specTable}>
                <tbody>
                  <tr>
                    <td className={styles.leftCell}>Laser Type</td>
                    <td className={styles.rightCell}>Fiber Laser</td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Laser Power</td>
                    <td className={styles.rightCell}>
                      60 W Optional 80 W, 100 W
                    </td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Working Area</td>
                    <td className={styles.rightCell}>100x100 mm</td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Supporting Files</td>
                    <td className={styles.rightCell}>
                      PLT, SVG, DXF JPEG, BMP, PNG etc.
                    </td>
                  </tr>
                </tbody>
              </table>

              <h3 className={styles.appHeading}>Application</h3>

              <div className={styles.appGrid}>
                {applicationImages.map((img, idx) => (
                  <button
                    key={idx}
                    className={styles.appItem}
                    onClick={() => setModalImage(img)}
                    aria-label={`Open application image ${idx + 1}`}
                  >
                    <Image
                      src={img}
                      alt={`app-${idx}`}
                      width={140}
                      height={120}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {modalImage && (
          <Imagemodel image={modalImage} onClose={() => setModalImage(null)} />
        )}
      </section>
    </div>
  );
}
