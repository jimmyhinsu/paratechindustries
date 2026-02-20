"use client";
import React, { useState } from "react";
import styles from "./co2laserengraving.module.scss";
import Image from "next/image";
import clem1 from "@/assests/images/clem1.png";
import clem2 from "@/assests/images/clem2.png";
import clem3 from "@/assests/images/clem3.png";
import clem4 from "@/assests/images/clem4.png";
import clem5 from "@/assests/images/clem5.png";
import clem6 from "@/assests/images/clem6.png";
import clem7 from "@/assests/images/clem7.png";
import clem8 from "@/assests/images/clem8.png";
import colaser from "@/assests/images/colaserengravingmachine.jpg";

export default function Co2laserengraving() {
  // Main product images (thumbnails change the main image)
  const productImages = [colaser];

  // Application images (click opens modal)
  const applicationImages = [
    clem1,
    clem2,
    clem3,
    clem4,
    clem5,
    clem6,
    clem7,
    clem8,
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
              <h2>Co2 Laser Engraving Machine</h2>
              <h3>Which Materials You Can Mark !!</h3>
              <p>
                Fabrics, Wood, Jade, Acrylic, Glass Ceramic, Leather, Marble,
                Paper, Rubber, Wood Veneer, Plastic
              </p>
              <h4 className={styles.specHeading}>Specification</h4>

              <table className={styles.specTable}>
                <tbody>
                  <tr>
                    <td className={styles.leftCell}>Model</td>
                    <td className={styles.rightCell}>
                      1. Wood Peckert 2. Catwalk
                    </td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Engraving Area</td>
                    <td className={styles.rightCell}>
                      150x150, 300x300mm 450x450, 600x600mm
                    </td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Laser Tube</td>
                    <td className={styles.rightCell}>30,60 W 80,100 W</td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Laser Source</td>
                    <td className={styles.rightCell}>
                      Metal Tube With Air Cooled/glass Tube With Water Cooled
                    </td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Power Adjustment</td>
                    <td className={styles.rightCell}>1 The 100%</td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Engraving Accuracy</td>
                    <td className={styles.rightCell}>less than 0.01</td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Operting System</td>
                    <td className={styles.rightCell}>Win 7/8/10/11</td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Interface</td>
                    <td className={styles.rightCell}>Udisk, Usb, Ethernet</td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Supported File</td>
                    <td className={styles.rightCell}>
                      Plt, Dxf, Bmp, Jpg, Glf, Pno.
                    </td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Working Volt</td>
                    <td className={styles.rightCell}>
                      Single Phase 220-230v/50hz (Earthing Req)
                    </td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Optional Attachment</td>
                    <td className={styles.rightCell}>
                      Rotary Device/moving Table
                    </td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Dimension (LXWXH)</td>
                    <td className={styles.rightCell}>3x2x4 Feet 6x2x5 Feet</td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Weight</td>
                    <td className={styles.rightCell}>125kg 300kg</td>
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
