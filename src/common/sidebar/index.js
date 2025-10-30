"use client";
import React, { useState } from "react";
import Link from "next/link";
import styles from "./sidebar.module.scss";
import Closeicon from "@/assests/svg/closeicon";

export default function Sidebar({ menuOpen, setMenuOpen }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      <div className={`${styles.sidebar} ${menuOpen ? styles.open : ""}`}>
        {/* Sidebar Header */}
        <div className={styles.sidebarHeader}>
          <span>Menu</span>
          <div onClick={() => setMenuOpen(false)}>
            <Closeicon />
          </div>
        </div>

        {/* Sidebar Links */}
        <div className={styles.sidebarLinks}>
          <Link href="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link href="/aboutus" onClick={() => setMenuOpen(false)}>
            About Us
          </Link>

          {/* Dropdown Item */}
          <div
            className={`${styles.dropdown} ${
              dropdownOpen ? styles.active : ""
            }`}
          >
            <button
              className={styles.dropdownToggle}
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              Services
              <span className={styles.arrow}>{dropdownOpen ? "▲" : "▼"}</span>
            </button>
            {dropdownOpen && (
              <div className={styles.dropdownMenu}>
                <Link href="/services/web" onClick={() => setMenuOpen(false)}>
                  Web Development
                </Link>
                <Link href="/services/app" onClick={() => setMenuOpen(false)}>
                  App Development
                </Link>
                <Link href="/services/seo" onClick={() => setMenuOpen(false)}>
                  SEO Services
                </Link>
              </div>
            )}
          </div>

          <Link href="/products" onClick={() => setMenuOpen(false)}>
            Products
          </Link>
          <Link
            href="/contactus"
            className={styles.contactBtn}
            onClick={() => setMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div className={styles.overlay} onClick={() => setMenuOpen(false)} />
      )}
    </>
  );
}
