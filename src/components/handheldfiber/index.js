"use client";
import React, { useState } from "react";
import styles from "./handheldfiber.module.scss";
import Imagemodel from "../imagemodel";
import Image from "next/image";
import hflm1 from "@/assests/images/hflm1.png";
import hflm2 from "@/assests/images/hflm2.png";
import hflm3 from "@/assests/images/hflm3.png";
import hflm4 from "@/assests/images/hflm4.png";
import hflm5 from "@/assests/images/hflm5.png";
import hflm6 from "@/assests/images/hflm6.png";
import lasermarkingmachine from "@/assests/images/lasermarkingmachine.jpg";
import lasermarkingmachine1 from "@/assests/images/lasermarkingmachine1.jpg";

export default function Handheldfiber() {
  // Main product images (thumbnails change the main image)
  const productImages = [lasermarkingmachine, lasermarkingmachine1];

  // Application images (click opens modal)
  const applicationImages = [
    hflm1,
    hflm2,
    hflm3,
    hflm4,
    hflm5,
    hflm6,
  ];

  const [mainImage, setMainImage] = useState(productImages[0]);
  const [modalImage, setModalImage] = useState(null);

  return (
    <>
      <section className={styles.handheldfiber}>
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
              <h2>Handheld Fiber Laser Welding Machine</h2>
              <h3>Which Materials You Can Mark !!</h3>
              <p>STAINLESS STEEL, MILD STEEL, ALUMINUM</p>
              <h4 className={styles.specHeading}>Specification</h4>

              <table className={styles.specTable}>
                <tbody>
                  <tr>
                    <td className={styles.leftCell}>Model</td>
                    <td className={styles.rightCell}>
                      Operating temperature (°c)
                    </td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Laser source</td>
                    <td className={styles.rightCell}>1000w/1500w/2000w</td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Rated output</td>
                    <td className={styles.rightCell}>1000w/1500w/2000w</td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Max output power</td>
                    <td className={styles.rightCell}>1070 (+-10nm) </td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Cleaning width</td>
                    <td className={styles.rightCell}>0-150mm</td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Voltage</td>
                    <td className={styles.rightCell}>220v/380v-20v</td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Indicators light</td>
                    <td className={styles.rightCell}>Red light</td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Cooling method</td>
                    <td className={styles.rightCell}>Water cooling</td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Max pressure</td>
                    <td className={styles.rightCell}>1.0mpa</td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Total power</td>
                    <td className={styles.rightCell}>
                      5120w/5580w, 7120w/7580w, 8720w
                    </td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Working model</td>
                    <td className={styles.rightCell}>Continuous/modulation</td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Working environment</td>
                    <td className={styles.rightCell}>
                      Flat, no vibration and shock
                    </td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Working humidity(%)</td>
                    <td className={styles.rightCell}>lessthen 70</td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>
                      Operating temperature('c)
                    </td>
                    <td className={styles.rightCell}>10-40°c</td>
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
