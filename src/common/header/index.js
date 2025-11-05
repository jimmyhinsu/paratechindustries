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
              <Link href="/" className={styles.ancer}>Home</Link>
              <Link href="/aboutus" className={styles.ancer}>About Us</Link>

              {/* Products Dropdown */}
              <div className={styles.dropdown}>
                <Link href="/products" className={styles.dropdownToggle}>
                  Products{" "}
                  <div className={styles.icon}>
                    <Downarrowicon />
                  </div>
                </Link>

                <div className={styles.dropdownMenu}>
                  <Link href="/fiberlasermarkingmachine">Fiber Laser Marking Machine</Link>
                  <Link href="/">Customise Laser Marking Machine</Link>
                  <Link href="/">Fiber Laser Cutting Machine</Link>
                  <Link href="/">Pipe Laser Cutting Machine</Link>
                  <Link href="/">Sheet + Pipe Laser Cutting Machine</Link>
                  <Link href="/">Fiber Laser Welding Machine</Link>
                  <Link href="/">Battery Welding Laser Machine</Link>
                  <Link href="/">Online Laser Marking Machine</Link>
                  <Link href="/">Co2 Laser Cutting & Engraving Machine</Link>
                  <Link href="/">Co2 Laser Engraving Machine</Link>
                  <Link href="/">3D Engraving</Link>
                  <Link href="/">UV Laser Marking Machine</Link>
                  <Link href="/">3D Marking</Link>
                  <Link href="/">Die Mould Welding</Link>
                  <Link href="/">Jewellery Cutting Machine</Link>
                  <Link href="/">Jewellery Soldering Machine</Link>
                </div>
              </div>

              <Link href="/companyprofile" className={styles.ancer}>Company Profile</Link>

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
