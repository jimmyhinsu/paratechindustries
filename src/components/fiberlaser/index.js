"use client";
import React, { useState } from "react";
import styles from "./fiberlaser.module.scss";
import Imagemodel from "../imagemodel";
import image from "@/assests/images/bg.jpg";
import Image from "next/image";

export default function Fiberlaser() {
  // Main product images (thumbnails change the main image)
  const productImages = [
    "/images/machine-main.jpg",
    "/images/machine-2.jpg",
    "/images/machine-3.jpg",
    "/images/machine-4.jpg",
  ];

  // Application images (click opens modal)
  const applicationImages = [
    "/images/app-1.jpg",
    "/images/app-2.jpg",
    "/images/app-3.jpg",
    "/images/app-4.jpg",
    "/images/app-5.jpg",
    "/images/app-6.jpg",
    "/images/app-7.jpg",
    "/images/app-8.jpg",
  ];

  const [mainImage, setMainImage] = useState(productImages[0]);
  const [modalImage, setModalImage] = useState(null);

  return (
    <>
      <section className={styles.machineSection}>
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
              <h2>Fiber Laser Marking Machine</h2>
              <h3>
                Which Materials You Can Mark !!
              </h3>
              <p>
                SS, MS, ALUMINIUM, CAST IRON, PLASTIC, GOLD, SILVER, PLATINUM,
                COATED GLASS, BRONZE, TITANIUM, COPPER, BRASS & More...
              </p>
              <h4 className={styles.specHeading}>Specification</h4>

              <table className={styles.specTable}>
                <tbody>
                  <tr>
                    <td className={styles.leftCell}>Working Area</td>
                    <td className={styles.rightCell}>
                      100x100, 175x175, 220x220, 300x300 MM & Customized
                    </td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Laser Type</td>
                    <td className={styles.rightCell}>Fiber Laser</td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Laser Power</td>
                    <td className={styles.rightCell}>
                      20, 30, 50, 60, 100, 200 W
                    </td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Operating System</td>
                    <td className={styles.rightCell}>Windows 10</td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Supported File</td>
                    <td className={styles.rightCell}>
                      PLT, DXF, BMP, JPG, GLF, PNG.
                    </td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Working Volt</td>
                    <td className={styles.rightCell}>
                      Single Phase 220–230V / 50HZ (Earthing Req)
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
    </>
  );
}
