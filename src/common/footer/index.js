import React from "react";
import styles from "./footer.module.scss";
import Link from "next/link";
import Mailicon from "@/assests/svg/mailicon";
import Callicon from "@/assests/svg/callicon";
import Location from "@/assests/svg/location";
import Arrowicon from "@/assests/svg/arrowicon";
import logo from "@/assests/images/whitelogo.png";
import Image from "next/image";
import Whatsappicon from "@/assests/svg/Whatsappicon";
import Facebook from "@/assests/svg/facebook";
import Linkeidn from "@/assests/svg/linkeidn";
import Twitter from "@/assests/svg/twitter";

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <Link href={"/"}>
            <div className={styles.logo}>
              <Image src={logo} alt="logo" />
            </div>
          </Link>
          <div className={styles.footerGrid}>
            <div className={styles.brand}>
              <h3>Mr GAURAV DESAI</h3>
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
                <a href="mailto:info@industry.com" target="__blank">
                  info@industry.com
                </a>
              </p>
              <p>
                <Callicon />
                <a href="tel:+918045477720" target="__blank">
                  +91 8045477720
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
                  <Link href="/contactus">Contact Us</Link>
                </li>
              </ul>
            </div>

            <div className={styles.products}>
              <h4>Our Products</h4>
              <ul>
                <li>
                  <Arrowicon />
                  <Link href="/fiberlasermarkingmachine">Fiber Laser Marking Machine</Link>
                </li>
                <li>
                  <Arrowicon />
                  <Link href="/">Customise Laser Marking Machine</Link>
                </li>
                <li>
                  <Arrowicon />
                  <Link href="/">Fiber Laser Cutting Machine</Link>
                </li>
                <li>
                  <Arrowicon />
                  <Link href="/">Pipe Laser Cutting Machine</Link>
                </li>
                <li>
                  <Arrowicon />
                  <Link href="/">Sheet + Pipe Laser Cutting Machine</Link>
                </li>
                <li>
                  <Arrowicon />
                  <Link href="/">Fiber Laser Welding Machine</Link>
                </li>
                <li>
                  <Arrowicon />
                  <Link href="/">Battery Welding Laser Machine</Link>
                </li>
                <li>
                  <Arrowicon />
                  <Link href="/">Online Laser Marking Machine</Link>
                </li>
                <li>
                  <Arrowicon />
                  <Link href="/">Co2 Laser Cutting & Engraving Machine</Link>
                </li>
                <li>
                  <Arrowicon />
                  <Link href="/">Co2 Laser Engraving Machine</Link>
                </li>
                <li>
                  <Arrowicon />
                  <Link href="/">3D Engraving</Link>
                </li>
                <li>
                  <Arrowicon />
                  <Link href="/">3D Marking</Link>
                </li>
                <li>
                  <Arrowicon />
                  <Link href="/">Die Mould Welding</Link>
                </li>
                <li>
                  <Arrowicon />
                  <Link href="/">Jewellery Cutting Machine</Link>
                </li>
                <li>
                  <Arrowicon />
                  <Link href="/">Jewellery Soldering Machine</Link>
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
                <Linkeidn />
              </a>
              <a href="">
                <Twitter />
              </a>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <p>© 2025 Paratech Industrial Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
