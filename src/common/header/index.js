"use client";
import React, { useState } from "react";
import styles from "./header.module.scss";
import Link from "next/link";
import Menuicon from "@/assests/svg/menuicon";
import logo from "@/assests/images/paratechlogo.png";
import Image from "next/image";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    {
      title: "Laser Engraving Machine",
      sub: [
        "Laser 3D Die Engraving Brass Machine",
        "Laser Marking And Engraving Machine For Metals",
        "3D Laser Engraving and Die Making Machine",
        "Laser Marking Engraving Machine",
        "Industrial Laser Engraving Machine",
        "Gift Article Laser Engraving Machine",
        "Surgical Instruments Marking Machine",
        "Metal 3D Die Deep Laser Engraving",
        "50W Laser Engraving Machine",
      ],
    },
    {
      title: "Jewellery Laser Soldering Machine",
      sub: [
        "Jewellery Laser Soldering Machine",
        "Jewellery Laser Soldering Machine",
        "Laser Spot Soldering Machine",
        "Desktop Jewellery Laser Soldering Welding Machine",
        "200W Desktop Jewelry Laser Soldier Machine",
        "Param Laser Soldering Machine Jewelry Laser Welding Machine",
      ],
    },
    {
      title: "Fiber Laser Rotary",
      sub: [
        "Fiber Laser Marking Rotary Device",
        "Jewellery Fiber Laser Marking Rotary Device",
      ],
    },
    { title: "Hot Stamping Machine", sub: [] },
    { title: "Galvo Head Scanner With Red Beam", sub: [] },
    {
      title: "Laser Lense",
      sub: ["F-theta Lenses For Fiber Laser Marking Machine"],
    },
    {
      title: "Portable Jewellery Laser Welding Machine",
      sub: [],
    },
    {
      title: "Laser Printing Machine",
      sub: ["Led Bulb Printing Machine", "Metal Laser Printing Machine"],
    },
    {
      title: "Fiber Laser Marking Machine",
      sub: ["F-theta Lenses For Fiber Laser Marking Machine"],
    },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerflex}>
          {/* Logo */}
          <div className={styles.logo}>
            <Link href="/">
              <Image src={logo} />
            </Link>
          </div>

          {/* Navigation */}
          <nav className={`${styles.nav} ${mobileMenuOpen ? styles.open : ""}`}>
            <Link href="/" className={styles.headername}>
              Home
            </Link>
            <Link href="/aboutus" className={styles.headername}>
              About Us
            </Link>
            <Link href="/companyprofile" className={styles.headername}>
              Company Profile
            </Link>

            {/* Dropdown */}
            <div className={styles.dropdown}>
              <span className={styles.dropdownToggle}>Our Products ▾</span>
              <div className={styles.dropdownMenu}>
                {menuItems.map((item, idx) => (
                  <div className={styles.dropdownItem} key={idx}>
                    <span className={styles.parent}>{item.title}</span>
                    {item.sub.length > 0 && (
                      <div className={styles.subMenu}>
                        {item.sub.map((subItem, subIdx) => (
                          <Link href={`/products/${subIdx}`} key={subIdx}>
                            {subItem}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <Link href="/contactus" className={styles.contactBtn}>
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Icon */}
          <div
            className={styles.menuIcon}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menuicon />
          </div>
        </div>
      </div>
    </header>
  );
}
