"use client";
import React, { useState } from "react";
import styles from "./header.module.scss";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assests/images/paratechlogo.png";
import { FiMenu } from "react-icons/fi";
import Sidebar from "../sidebar";
import Downarrowicon from "@/assests/svg/downarrowicon";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.headerFlex}>
            {/* Logo */}
            <div className={styles.logo}>
              <Link href="/">
                <Image src={logo} alt="Paratech Industries" priority />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className={styles.nav}>
              <Link href="/" className={styles.ancer}>
                Home
              </Link>
              <Link href="/aboutus" className={styles.ancer}>
                About Us
              </Link>

              {/* Products Dropdown */}
              <div className={styles.dropdown}>
                <Link href="/" className={styles.dropdownToggle}>
                  Products{" "}
                  <div className={styles.icon}>
                    <Downarrowicon />
                  </div>
                </Link>

                <div className={styles.dropdownMenu}>
                  <Link href="/fiberlasermarkingmachine">
                    Fiber Laser Marking Machine
                  </Link>
                  <Link href="/fiberlasercuttingmachine">
                    Fiber Laser Cutting Machine
                  </Link>
                  <Link href="/handheldfiberlaserweldingmachine">Handheld Fiber Laser Welding Machine</Link>
                  <Link href="/customiselasermachine">Customise Laser Marking Machine</Link>
                  <Link href="/sheetpipelasercuttingmachine">Sheet + Pipe Laser Cutting Machine</Link>
                  <Link href="/onlinelasermarkingmachine">Online Laser Marking Machine</Link>
                  <Link href="/co2lasercuttingmachine">Co2 Laser Cutting & Engraving Machine</Link>
                  <Link href="/co2laserengravingmachine">Co2 Laser Engraving Machine</Link>
                  <Link href="/dengraving">3D Engraving</Link>
                  <Link href="/dmarking">3D Marking</Link>
                  <Link href="/uvlasermarkingmachine">
                    UV Laser Marking Machine
                  </Link>
                  <Link href="/jewellerycuttingmachine">Jewellery Cutting Machine</Link>
                  <Link href="/jewellerysolderingmachine">Jewellery Soldering Machine</Link>
                </div>
              </div>

              <Link href="/industriesweserve" className={styles.ancer}>
                Industries We Serve
              </Link>

              <Link href="/companyprofile" className={styles.ancer}>
                Company Profile
              </Link>

              <Link href="/contactus" className={styles.contactBtn}>
                Contact Us
              </Link>
            </nav>

            {/* Mobile Menu Icon */}
            <div
              className={styles.menuIcon}
              onClick={() => setIsSidebarOpen(true)}
            >
              <FiMenu />
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar Component */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
}
