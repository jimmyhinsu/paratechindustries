"use client";
import React, { useState } from "react";
import styles from "./fiberlaser.module.scss";
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

export default function Fiberlaser() {
  // Main product images (thumbnails change the main image)
  const productImages = [lasermarkingmachine];

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
              <h2>Fiber Laser Marking Machine</h2>
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
                    <td className={styles.leftCell}>Laser type</td>
                    <td className={styles.rightCell}>Pulsed Fiber Laser</td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Working Area</td>
                    <td className={styles.rightCell}>
                      100x100, 175x175, 250x250, 300x300 Mm & Customized
                    </td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Laser Power</td>
                    <td className={styles.rightCell}>20, 30, 50, 60, 100 W</td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Operating System</td>
                    <td className={styles.rightCell}>Win 7/8/10/11 </td>
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
                      Single Phase 220-230v/50hz (Earthing Req)
                    </td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Wavelength:</td>
                    <td className={styles.rightCell}>1064 nm</td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Power Adjusting Range</td>
                    <td className={styles.rightCell}>1-100%</td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Max. Linear Speed</td>
                    <td className={styles.rightCell}>Max 12000 Mm/S</td>
                  </tr>
                  <tr>
                    <td className={styles.leftCell}>Min. Character Height</td>
                    <td className={styles.rightCell}>0.1 MM</td>
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
