"use client";
import React, { useState } from "react";
import styles from "./uvlasermarking.module.scss";
import Imagemodel from "../imagemodel";
import Image from "next/image";
import fc1 from "@/assests/images/fc1.png";
import fc2 from "@/assests/images/fc2.png";
import fc3 from "@/assests/images/fc3.png";
import fc4 from "@/assests/images/fc5.png";
import fc5 from "@/assests/images/fc5.png";
import fc6 from "@/assests/images/fc6.png";
import fc7 from "@/assests/images/fc7.png";
import fc8 from "@/assests/images/fc8.png";
import fc9 from "@/assests/images/fc9.png";
import fc10 from "@/assests/images/fc10.png";
import fc11 from "@/assests/images/fc11.png";
import uvlaser from "@/assests/images/uvlasermarkingmachine.jpg";

export default function Uvlasermarking() {
  // Main product images (thumbnails change the main image)
  const productImages = [uvlaser];

  // Application images (click opens modal)
  const applicationImages = [
    fc1,
    fc2,
    fc3,
    fc4,
    fc5,
    fc6,
    fc7,
    fc8,
    fc9,
    fc10,
    fc11,
  ];

  const [mainImage, setMainImage] = useState(productImages[0]);
  const [modalImage, setModalImage] = useState(null);

  return (
    <>
      <div className={styles.uvlaser}>
        <div className={styles.container}>
          <div className={styles.gridmachine}>
            {/* LEFT: Product image, thumbnails, buttons */}
            <div className={styles.uvlaserleft}>
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
            <div className={styles.uvlaserright}>
              <h2>Uv Laser Marking/Engraving Machine</h2>
              <h3>Which Materials You Can Mark !!</h3>
              <p>
                Plastic, Glass, Abs Material Pcb, Rubber, Non Metal Material
              </p>
              <h4 className={styles.specHeading}>Specification</h4>

              <table className={styles.specTable}>
                <tbody>
                  <tr>
                    <td className={styles.leftCell}>Laser Type</td>
                    <td className={styles.rightCell}>Uv Laser</td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>
                      Laser Average Output Power
                    </td>
                    <td className={styles.rightCell}>3w/5w/30w</td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Laser Life</td>
                    <td className={styles.rightCell}>~30.000 Hours</td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Wirvelenoth</td>
                    <td className={styles.rightCell}>363 Nm</td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Average Power Stability</td>
                    <td className={styles.rightCell}> less than 3% Over 24 Hours</td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>
                      Pulse To Pulse Stability
                    </td>
                    <td className={styles.rightCell}>less than 3% RMS</td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Power Adjusting Range</td>
                    <td className={styles.rightCell}>1-200%</td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Beam Roundness</td>
                    <td className={styles.rightCell}>more than 90%</td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Polarization Ratio</td>
                    <td className={styles.rightCell}>100:1</td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Scanner</td>
                    <td className={styles.rightCell}>12,000 Mm/Sec</td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Scanner Type</td>
                    <td className={styles.rightCell}>Double Silica Coated</td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Scale Required</td>
                    <td className={styles.rightCell}>No</td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Marking Area</td>
                    <td className={styles.rightCell}>150 Mm X 160 Mm Standard</td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Repeated Accuracy</td>
                    <td className={styles.rightCell}>0.001NM</td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Max Power Consumption</td>
                    <td className={styles.rightCell}>340 Watt</td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Warranty</td>
                    <td className={styles.rightCell}>1 Year Warranty</td>
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
                    <Image src={img} alt={`app-${idx}`} />
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
