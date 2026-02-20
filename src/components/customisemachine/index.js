"use client";
import React, { useState } from "react";
import styles from "./customisemachine.module.scss";
import Imagemodel from "../imagemodel";
import Image from "next/image";
import flm1 from "@/assests/images/flm1.png";
import flm2 from "@/assests/images/flm2.png";
import flm3 from "@/assests/images/flm3.png";
import flm4 from "@/assests/images/flm4.png";
import flm5 from "@/assests/images/flm5.png";
import flm6 from "@/assests/images/flm6.png";
import flm7 from "@/assests/images/flm7.png";
import flm8 from "@/assests/images/flm8.png";
import flm9 from "@/assests/images/flm9.png";
import flm10 from "@/assests/images/flm10.png";
import flm11 from "@/assests/images/flm11.png";
import flm12 from "@/assests/images/flm12.png";
import clm from "@/assests/images/customiselasermachine.jpg";

export default function Customisemachine() {
  // Main product images (thumbnails change the main image)
  const productImages = [clm];

  // Application images (click opens modal)
  const applicationImages = [
    flm1,
    flm2,
    flm3,
    flm4,
    flm5,
    flm6,
    flm7,
    flm8,
    flm9,
    flm10,
    flm11,
    flm12,
  ];

  const [mainImage, setMainImage] = useState(productImages[0]);
  const [modalImage, setModalImage] = useState(null);

  return (
    <>
      <section className={styles.customise}>
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
                <a href="mailto:info@paratechindustries.com" target="__blank">
                <button className={styles.quoteBtn}>
                  Request A Quote &nbsp; →
                </button>
                </a>

                <a href="/catalogue.pdf" target="__blank">
                <button className={styles.catalogBtn}>
                  Download Catalogue &nbsp; →
                </button>
                </a>
              </div>
            </div>

            {/* RIGHT: Title, Materials, Specification table, Application grid */}
            <div className={styles.right}>
              <h2>Customise Laser Marking Machine</h2>

              <h4 className={styles.specHeading}>Specification</h4>

              <table className={styles.specTable}>
                <tbody>
                  <tr>
                    <td className={styles.leftCell}>Laser Type</td>
                    <td className={styles.rightCell}>Fiber Laser</td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Laser Working Area</td>
                    <td className={styles.rightCell}>
                      600x600 · 900x900 · 1200x1200 · 1300x2500 · 1500x3000 mm &
                      Customize
                    </td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Laser Power</td>
                    <td className={styles.rightCell}>30, 50, 100, 200 W</td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Pulse Repetition</td>
                    <td className={styles.rightCell}>2-500 ns</td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Cooling</td>
                    <td className={styles.rightCell}>Air</td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Continuous Marking</td>
                    <td className={styles.rightCell}>
                      Encodersynced motion for stitchingfree large graphic
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
