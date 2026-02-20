"use client";
import React, { useState } from "react";
import styles from "./fibercutting.module.scss";
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
import fibercutting from "@/assests/images/fiberlasercuttingmachine.jpeg";

export default function Fibercutting() {
  // Main product images (thumbnails change the main image)
  const productImages = [fibercutting];

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
      <div className={styles.fibercutting}>
        <div className={styles.container}>
          <div className={styles.gridmachine}>
            {/* LEFT: Product image, thumbnails, buttons */}
            <div className={styles.cuttingleft}>
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
            <div className={styles.cuttingright}>
              <h2>Fiber Laser Cutting Machine</h2>
              <h3>Which Materials You Can Mark !!</h3>
              <p>
                SS, MS,Aluminium, Cast Iron, Plastic, Gold, Silver, Platinum,
                Coated Glass, Bronze, Titanium, Copper, Brass, Carbide, Non
                Transparent Acrylic & More...
              </p>
              <h4 className={styles.specHeading}>Specification</h4>

              <table className={styles.specTable}>
                <tbody>
                  <tr>
                    <td className={styles.leftCell}>Fiber Laser Source</td>
                    <td className={styles.rightCell}>
                      IPG/Raycus/Max-500W/1KW/1.5KW/2KW/3KW/5KW
                    </td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Laser Head</td>
                    <td className={styles.rightCell}>
                      Swiss Raytools Laser Head
                    </td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Transmission System</td>
                    <td className={styles.rightCell}>
                      Dual Drive Precise and Pinion
                    </td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Guide Rail</td>
                    <td className={styles.rightCell}>Taiwan Hiwin</td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Rack & Pinion</td>
                    <td className={styles.rightCell}>Taiwan Yyc</td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Speed Reducer</td>
                    <td className={styles.rightCell}>Japan Shimpo</td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Servo Motor</td>
                    <td className={styles.rightCell}>Japan Yaskawa</td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Water Chiller</td>
                    <td className={styles.rightCell}>Hanli</td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Control System</td>
                    <td className={styles.rightCell}>Cypcut</td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Proportional Valve</td>
                    <td className={styles.rightCell}>Japan Smc</td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Auxiliary Parts</td>
                    <td className={styles.rightCell}>Exhaust Fan</td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Electronics</td>
                    <td className={styles.rightCell}>France Schneider</td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Computer</td>
                    <td className={styles.rightCell}>Yes</td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Auto Lubrication</td>
                    <td className={styles.rightCell}>Yes</td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Wireless Handle Control</td>
                    <td className={styles.rightCell}>Yes</td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Working Area (L*W)</td>
                    <td className={styles.rightCell}>1500 x 3000</td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>
                      X/Y Axis Repeated Position Precision
                    </td>
                    <td className={styles.rightCell}>-0.02mm</td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Machine Gross Weight</td>
                    <td className={styles.rightCell}>3.0T</td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Voltage</td>
                    <td className={styles.rightCell}>
                      Three-Phase 380V 50/60Hz
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
