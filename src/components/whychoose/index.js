import React from "react";
import styles from "./whychoose.module.scss";
import whychooseus from "@/assests/images/whychooseus.jpg";
import Image from "next/image";

export default function Whychoose() {
  return (
    <>
      <section className={styles.whyChooseUs}>
        <div className={styles.container}>
          <div className={styles.whychoosegrid}>
            <div className={styles.imageBox}>
              <Image src={whychooseus} alt="WhyChooseUs" />
            </div>

            <div className={styles.contentBox}>
              <h2>Why Choose Us?</h2>
              <p>
                Our experience and trustworthiness have helped us achieve a
                prestigious position in this business. The following are some of
                the reasons why clients across the country appreciate us:
              </p>
              <ul>
                <li>Quality assured product range</li>
                <li>Experienced team of professionals</li>
                <li>Ethical business practices</li>
                <li>Client-centric approach</li>
                <li>Extensive distribution network</li>
                <li>Transparent business transactions</li>
                <li>Good transport and logistic facilities</li>
                <li>A reasonable price level</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
