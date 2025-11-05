import React from "react";
import styles from "./aboutsection.module.scss";

export default function Aboutsection() {
  return (
    <>
      <section className={styles.about}>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            {/* Left Content */}
            <div className={styles.content}>
              <span>About Us</span>
              <h2>Turning Ideas Into Reality</h2>
              <p>
                Paratech Industries is a reputed manufacturer, supplier, and
                exporter that specializes in the design of high-quality laser
                soldering and welding machines for the jewelry sector. Having
                years of experience in the industry, we provide various kinds of
                developed machinery, including Jewellery Laser Soldering
                Machine, Laser Spot Soldering Machine, Desktop Jewellery Laser
                Soldering Welding Machine, and Param Laser Soldering Machine
                Jewelry Laser Welding Machine.
              </p>
              <p>
                Our products are designed and manufactured to provide precision,
                reliability, and efficiency for impeccable results with
                intricate jewelry designs.
              </p>
              <a href="/aboutus" className={styles.btn}>
                <button> Explore More</button>
              </a>
            </div>

            {/* Right Image */}
            <div className={styles.imageWrap}>
              <img src="/about-image.jpg" alt="About us" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

