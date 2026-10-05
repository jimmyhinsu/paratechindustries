"use client";
import React, { useState, useEffect } from "react";
import styles from "./footer.module.scss";
import Link from "next/link";
import Mailicon from "@/assests/svg/mailicon";
import Callicon from "@/assests/svg/callicon";
import Location from "@/assests/svg/location";
import Arrowicon from "@/assests/svg/arrowicon";
import logo from "@/assests/images/whitelogo.png";
import Image from "next/image";
import Facebook from "@/assests/svg/facebook";
import Instagram from "@/assests/svg/instagram";
import Youtube from "@/assests/svg/youtube";
import { fetchProductsFromSupabase, getProductHref } from "@/data/products";

const footerKeywords = [
  "UV laser marking machine in surat",
  "UV laser marking machine in india",
  "UV laser marking machine in gujarat",
  "UV laser marking machine manufacturer",
  "UV laser marking machine manufacturer in india",
  "UV laser marking machine manufacturer in surat",
  "UV laser marking machine manufacturer in gujarat",
  "CO2 laser marking machine manufacturer in surat",
  "CO2 laser marking machine manufacturer in Gujarat",
  "CO2 laser marking machine manufacturer in India",
  "Best CO2 laser marking machine manufacturer in surat",
  "Best CO2 laser marking machine manufacturer in Gujarat",
  "Best CO2 laser marking machine manufacturer in India",
  "fiber laser marking machine in surat",
  "fiber laser marking machine manufacturer in surat",
  "fiber laser marking machine in india",
  "metal laser marking machine in surat",
  "metal laser marking machine in india",
  "Metal laser marking machine in gujarat",
  "Metal laser marking machine manufacturer in surat",
  "Metal laser marking machine manufacturer in gujarat",
  "laser marking machine in surat",
  "laser marking machine in gujarat",
  "laser marking machine in india",
  "laser marking machine manufacturer in surat",
  "laser marking machine manufacturer in gujarat",
  "laser marking machine manufacturer in India",
  "Jewellery Laser Solder Machine for Silver",
  "Jewellery Laser Solder Machine for Gold",
  "20W Jewellery Laser Engraving Machine",
  "Laser Marking Engraving Machine for SS Bottle",
  "Laser Marking Engraving Machine for SS",
  "QR Code Laser Marking Machine",
  "Metal Portable Laser Marking Machine",
  "Handheld laser marking machine",
  "Handheld laser marking machine near me",
  "Handheld laser marking machine manufacturer",
  "Handheld laser marking machine manufacturer near me",
  "Plastic laser marking machine near me",
  "Jewellery laser marking machine",
  "Jewellery laser marking machine near me",
  "Jewellery laser marking machine manufacturer",
  "Jewellery laser marking machine manufacturer near me",
  "Laser Marking Machine for Steel Utensil",
  "Mechanical Seal Laser Marking Machine",
  "AUTOMATIC FIBER LASER MARKING AND ENGRAVING MACHINE",
  "AUTOMATIC FIBER LASER MARKING MACHINE",
  "METAL PORTABLE LASER MARKING MACHINE",
  "Mopa Colour Fiber Laser Marking Machine",
  "Jewellery Laser Welding Machine Supplier In Surat",
  "Jewellery Laser Welding Machine Supplier In India",
  "Jewellery Laser Welding Machine Supplier In Gujarat",
  "Jewellery Laser Welder Manufacturer Near Me",
  "Jewellery Laser Welder Manufacturer In Surat",
  "Jewellery Laser Welder Manufacturer In Gujarat",
  "Jewellery Laser Welder Manufacturer In India",
  "Laser Soldering Machine In India",
  "Laser Soldering Machine In Gujarat",
  "Laser Soldering Machine In Surat",
  "Laser Soldering Machine Manufacturer In India",
  "Laser Soldering Machine Manufacturer In Surat",
  "Laser Soldering Machine Manufacturer In Gujarat"
];

export default function Footer() {
  const [footerProducts, setFooterProducts] = useState([]);

  useEffect(() => {
    let isMounted = true;
    async function loadProducts() {
      const data = await fetchProductsFromSupabase();
      if (isMounted) {
        setFooterProducts(data || []);
      }
    }
    loadProducts();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <Link href="/" className={styles.logoLink}>
            <div className={styles.logo}>
              <Image src={logo} alt="logo" />
            </div>
          </Link>
          <div className={styles.footerGrid}>
            <div className={styles.brand}>
              <h4>GST : 24BRAPD4073J1Z2</h4>
              <p>
                <Location />
                <a
                  href="https://maps.app.goo.gl/onq4ZxLr1syUwp9j8"
                  target="__blank"
                >
                  Plot No 6, Soma Kanji Ni Wadi, Near Savera Complex, Khatodara
                  Gidc, Surat - 395002, Gujarat, India
                </a>
              </p>
              <p>
                <Mailicon />
                <a href="mailto:info@paratechindustries.com" target="__blank">
                  info@paratechindustries.com
                </a>
              </p>
              <p>
                <Callicon />
                <a href="tel:+919879533323" target="__blank">
                  +91 9879533323
                </a>
              </p>
            </div>

            <div className={styles.links}>
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <Arrowicon />
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Arrowicon />
                  <Link href="/aboutus">About Us</Link>
                </li>
                <li>
                  <Arrowicon />
                  <Link href="/companyprofile">Company Profile</Link>
                </li>
                <li>
                  <Arrowicon />
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Arrowicon />
                  <Link href="/contactus">Contact Us</Link>
                </li>
              </ul>
            </div>

            <div className={styles.products}>
              <h4>OUR LASER MACHINES</h4>
              <ul>
                {footerProducts.map((prod) => (
                  <li key={prod.id}>
                    <Arrowicon />
                    <Link href={getProductHref(prod.slug)}>{prod.name}</Link>
                  </li>
                ))}
                <li>
                  <Arrowicon />
                  <Link href="/laser-marking-machine">Laser Marking Machine</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.extra}>
            <h4>Follow Us</h4>
            <div className={styles.social}>
              <a href="">
                <Facebook />
              </a>
              <a href="">
                <Instagram />
              </a>
              <a href="">
                <Youtube />
              </a>
            </div>
          </div>

          {/* Keywords Section */}
          <div className={styles.keywordsSection}>
            <div className={styles.keywordsList}>
              {footerKeywords.map((keyword, index) => (
                <span key={index} className={styles.keywordItem}>
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.footerBottom}>
            <p>© 2026 Paratech Industrial Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
