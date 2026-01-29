"use client";
import React, { useState } from "react";
import styles from "./sidebar.module.scss";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import logo from "@/assests/images/paratechlogo.png";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

export default function Sidebar({ isOpen, onClose }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
      <div className={styles.overlay} onClick={onClose}></div>

      <div className={styles.sidebarContent}>
        <div className={styles.top}>
          <a href="/">
            <Image src={logo} alt="Logo" className={styles.logo} />
          </a>
          <IoClose className={styles.closeIcon} onClick={onClose} />
        </div>

        <nav className={styles.nav}>
          <Link href="/" onClick={onClose}>
            Home
          </Link>
          <Link href="/aboutus" onClick={onClose}>
            About Us
          </Link>

          {/* Products with dropdown */}
          <div className={styles.dropdown}>
            <button
              className={styles.dropdownBtn}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Products
              {isDropdownOpen ? (
                <IoChevronUp className={styles.icon} />
              ) : (
                <IoChevronDown className={styles.icon} />
              )}
            </button>

            {isDropdownOpen && (
              <div className={styles.dropdownMenu}>
                <Link href="/fiberlasermarkingmachine" onClick={onClose}>
                  Fiber Laser Marking Machine
                </Link>
                <Link href="/fiberlasercuttingmachine" onClick={onClose}>
                  Fiber Laser Cutting Machine
                </Link>
                <Link href="/handheldfiberlaserweldingmachine" onClick={onClose}>
                  Handheld Fiber Laser Welding Machine
                </Link>
                <Link href="/" onClick={onClose}>
                  Customise Laser Marking Machine
                </Link>
                <Link href="/sheetpipelasercuttingmachine" onClick={onClose}>
                  Sheet + Pipe Laser Cutting Machine
                </Link>
                <Link href="/" onClick={onClose}>
                  Online Laser Marking Machine
                </Link>
                <Link href="/" onClick={onClose}>
                  Co2 Laser Cutting & Engraving Machine
                </Link>
                <Link href="/co2laserengravingmachine" onClick={onClose}>
                  Co2 Laser Engraving Machine
                </Link>
                <Link href="/dengraving" onClick={onClose}>
                  3D Engraving
                </Link>
                <Link href="/dmarking" onClick={onClose}>
                  3D Marking
                </Link>
                <Link href="/uvlasermarkingmachine" onClick={onClose}>
                  UV Laser Marking Machine
                </Link>
                <Link href="/jewellerycuttingmachine" onClick={onClose}>
                  Jewellery Cutting Machine
                </Link>
                <Link href="/" onClick={onClose}>
                  Jewellery Soldering Machine
                </Link>
              </div>
            )}
          </div>

          <Link href="/industriesweserve" className={styles.ancer}>
            Industries We Serve
          </Link>

          <Link href="/companyprofile" onClick={onClose}>
            Company Profile
          </Link>
          <Link
            href="/contactus"
            className={styles.contactBtn}
            onClick={onClose}
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </div>
  );
}
