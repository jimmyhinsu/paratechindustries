"use client";
import React from "react";
import styles from "./aboutsection.module.scss";
import aboutusimg from "@/assests/images/aboutusimg.jpeg";
import { usePathname } from "next/navigation";
import Link from "next/link";
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
              <h2>Laser Machine Manufacturer in India</h2>
              <p>
                Established in 2014,{" "}
                <Link href="https://paratechindustries.com/" className={styles.brandLink}>
                  Paratech Industries
                </Link>{" "}
                is a laser machine manufacturer in India specialising in reliable and precision-driven laser solutions for modern manufacturing. We manufacture and supply laser marking, cutting, engraving, welding, and specialised laser machines for businesses across diverse industries.
              </p>
              <p>
                Our laser machines are designed to support accurate processing, permanent marking, efficient production, and consistent results. From{" "}
                <Link
                  href="https://paratechindustries.com/products/fiber-laser-marking-machine"
                  className={styles.brandLink}
                >
                  fiber laser marking
                </Link>{" "}
                and{" "}
                <Link
                  href="https://paratechindustries.com/products/fiber-laser-cutting-machine"
                  className={styles.brandLink}
                >
                  cutting machines
                </Link>{" "}
                to{" "}
                <Link
                  href="https://paratechindustries.com/products/uv-laser-marking-machine"
                  className={styles.brandLink}
                >
                  UV
                </Link>
                ,{" "}
                <Link
                  href="https://paratechindustries.com/products/co2-laser-cutting-machine"
                  className={styles.brandLink}
                >
                  CO₂
                </Link>
                ,{" "}
                <Link
                  href="https://paratechindustries.com/products/handheld-fiber-laser-welding-machine"
                  className={styles.brandLink}
                >
                  welding
                </Link>
                , and{" "}
                <Link
                  href="https://paratechindustries.com/products/jewellery-laser-cutting-machine"
                  className={styles.brandLink}
                >
                  jewellery laser solutions
                </Link>
                , we help businesses choose the right technology for their application.
              </p>
              <p>
                With a focus on quality manufacturing, application expertise, and dependable after-sales support, we serve customers across India with practical laser solutions built for industrial requirements.
              </p>

              {pathName !== "/aboutus" && (
                <Link href="/aboutus" className={styles.btn}>
                  <button> Explore About Us</button>
                </Link>
              )}
            </div>

            {/* Right Image */}
            <div className={styles.imageWrap}>
              <Image src={aboutusimg} alt="aboutusimg" />
            </div>
          </div>

          {pathName === "/aboutus" && (
            <p className={styles.aboutp}>

              Paratech Industries offer fast, accurate, low or zero maintenance, high speed and precision, innovative, reliable laser machines are ideal for any types of industries.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
