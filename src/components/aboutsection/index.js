"use client";
import React from "react";
import styles from "./aboutsection.module.scss";
import aboutusimg from "@/assests/images/aboutusimg.jpeg";
import { usePathname } from "next/navigation";
import Image from "next/image";

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
              <h2>The Best Laser Machine Manufacturer, in India</h2>
              <p>
                Established in 2014, Paratech Industries is a leading manufacturer, supplier and exporter of industrial laser machines, covering marking, cutting, engraving, welding, soldering and cleaning. We have an in-house R&D team and follow quality control aligned with ISO and CE standards, so our customers across India receive dependable machines backed by long-term support.
              </p>
              <p>
                Our range includes fiber laser marking and fiber laser cutting machines, handheld laser welding, CO2 cutting and engraving, UV marking, and specialised jewellery laser systems. These machines are used across automobiles, pumps, valves, bearings, engineering, hardware, pharma, surgical, tools, LED, die and mould, cable and wire, pipe, jewellery, optical, FMCG, sheet metal, fabric, and more than 100 other applications throughout India.
              </p>

              {pathName !== "/aboutus" && (
                <a href="/aboutus" className={styles.btn}>
                  <button> Explore More</button>
                </a>
              )}
            </div>

            {/* Right Image */}
            <div className={styles.imageWrap}>
              <Image src={aboutusimg} alt="aboutusimg" />
            </div>
          </div>

          {pathName === "/aboutus" && (
            <p className={styles.aboutp}>
              Paratech Industries offer fast, accurate, low or zero maintenance,
              high speed and precision, innovative, reliable laser machines are
              ideal for any types of industries.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
