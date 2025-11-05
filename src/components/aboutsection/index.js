import React from "react";
import styles from "./aboutsection.module.scss";
import { usePathname } from "next/navigation";

export default function Aboutsection() {
  const pathName = usePathname();

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

              {pathName !== "/aboutus" && (
                <a href="/aboutus" className={styles.btn}>
                  <button> Explore More</button>
                </a>
              )}
            </div>

            {/* Right Image */}
            <div className={styles.imageWrap}>
              <img src="/about-image.jpg" alt="About us" />
            </div>
          </div>

          {pathName === "/aboutus" && (
            <p className={styles.aboutp}>
              As a respected name in the trade, we established ourselves solidly
              into the market within the country and overseas. We are proud to
              present ourselves with an exemplary level of customer service for
              detailed responses given to our customers concerning the assembly,
              operation, and servicing of our machines.
              <br />
              <br />
              We cater to the differentiated needs of the jewelry industry
              through the delivery of cutting-edge laser solutions that improve
              productivity and precision. Quality, innovation, and customer
              satisfaction constitute the foundations upon which we have built
              our leadership globally as a provider of jewelry laser soldering
              and welding machines.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
