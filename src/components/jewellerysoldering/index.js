"use client";
import React, { useState } from "react";
import styles from "./jewellerysoldering.module.scss";
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
import lasermarkingmachine from "@/assests/images/lasermarkingmachine.jpg";
import lasermarkingmachine1 from "@/assests/images/lasermarkingmachine1.jpg";

export default function Jewellerysoldering() {
  // Main product images (thumbnails change the main image)
  const productImages = [lasermarkingmachine, lasermarkingmachine1];

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
      <div className={styles.jewellerysoldering}>
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
              <h2>Jewellery Soldering Machine</h2>

              <h4 className={styles.specHeading}>Specification</h4>

              <table className={styles.specTable}>
                <tbody>
                  <tr>
                    <td className={styles.leftCell}>Model Name</td>
                    <td className={styles.rightCell}>Jumbo</td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Output Power</td>
                    <td className={styles.rightCell}>200w</td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Single-Pulse Energy</td>
                    <td className={styles.rightCell}>110 J</td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Machine Design Type</td>
                    <td className={styles.rightCell}>Desktop / Vertical</td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Laser Source</td>
                    <td className={styles.rightCell}>Nd:Yag</td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Laser Wavelength</td>
                    <td className={styles.rightCell}>1064 Nm</td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Pump Lamp</td>
                    <td className={styles.rightCell}>Pulsed Xenon Lamp</td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Laser Source</td>
                    <td className={styles.rightCell}>0.1-15 Ms Adjustable</td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>
                      Pulse Repeated Frequency
                    </td>
                    <td className={styles.rightCell}>1-20 Hz Adjustable</td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Welding Spot Diameter</td>
                    <td className={styles.rightCell}>0.1-3 Mm</td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Observing System</td>
                    <td className={styles.rightCell}>
                      Microscope / Ccd-Based On Requirement
                    </td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Cooling System</td>
                    <td className={styles.rightCell}>Water Chiller</td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Power Supply</td>
                    <td className={styles.rightCell}>
                      Single Phase Ac 220v ±10%, 50hz / 60hz, 4 Kw
                    </td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Running Environment</td>
                    <td className={styles.rightCell}>
                      Temperature 5°C-28°C, Humidity 5%-70%
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
      </div>
    </>
  );
}
