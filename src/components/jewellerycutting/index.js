"use client";
import React, { useState } from "react";
import styles from "./jewellerycutting.module.scss";
import jcm1 from "@/assests/images/jcm1.png";
import jcm2 from "@/assests/images/jcm2.png";
import jcm3 from "@/assests/images/jcm3.png";
import jcm4 from "@/assests/images/jcm4.png";
import jcm from "@/assests/images/jcm.jpeg";
import jcm22 from "@/assests/images/jcm2.jpeg";
import jcm33 from "@/assests/images/jcm3.jpeg";
import jcm44 from "@/assests/images/jcm4.jpeg";
import Image from "next/image";

export default function Jewellerycutting() {
  // Main product images (thumbnails change the main image)
  const productImages = [jcm, jcm22, jcm33, jcm44];

  // Application images (click opens modal)
  const applicationImages = [jcm1, jcm2, jcm3, jcm4];

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
              <h2>Jewellery Cutting Machine</h2>
              {/* <h3>Which Materials You Can Mark !!</h3>
              <p>
                SS, MS,Aluminium, Cast Iron, Plastic, Gold, Silver, Platinum,
                Coated Glass, Bronze, Titanium, Copper, Brass, Carbide, Non
                Transparent Acrylic & More...
              </p> */}
              <h4 className={styles.specHeading}>Specification</h4>

              <table className={styles.specTable}>
                <tbody>
                  <tr>
                    <td className={styles.leftCell}>Laser type</td>
                    <td className={styles.rightCell}>German Source</td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Cutting Size</td>
                    <td className={styles.rightCell}>
                      100x100 Mm & Customized
                    </td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Cutting Depth</td>
                    <td className={styles.rightCell}>0.01 Micron - 1.5mm</td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Optional Attachment</td>
                    <td className={styles.rightCell}>Rotary/fume Extractor </td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Working Volt</td>
                    <td className={styles.rightCell}>
                      Single Phase 220-230v/50hz (Earthing Req)
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
