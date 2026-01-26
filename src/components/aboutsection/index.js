"use client";
import React from "react";
import styles from "./aboutsection.module.scss";
import aboutusimg from "@/assests/images/aboutusimg.jpg";
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
              <h2>The Best Laser Machine Manufacturer, in surat</h2>
              <p>
                Established as a company in the year 2014 we “Paratech
                Industries” are a leading Manufacturer, supplier and exporter of
                all types of Industrial Laser Machines like Marking, Cutting,
                Engraving, Welding, soldering and Cleaning. With a dedicated
                in-house R&D team and rigorous quality control adhering to ISO &
                CE standards.
              </p>
              <p>
                Paratech Industries offers a diverse range of machines,
                including Fiber Laser Marking, Cutting, Welding, and Cleaning
                Machines, along with UV and CO2 Laser Marking Machines and
                custom SPM machines. These machines find applications in various
                industries such as Automobiles,Pump, Valves, Bearing,
                Engineering, Hardware, Pharma, Surgical, Tools, LED, Die-Mould,
                Cable-Wire, Pipe, Jewellery, Optical, FMCG, Sheet Metal, Gift
                Article, Fabric, Elevators, and more than 100 other
                applications.
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
