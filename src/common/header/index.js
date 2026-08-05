"use client";
import React, { useState, useEffect } from "react";
import styles from "./header.module.scss";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assests/images/paratechlogo.png";
import { FiMenu } from "react-icons/fi";
import { FaPhoneAlt } from "react-icons/fa";
import Sidebar from "../sidebar";
import Downarrowicon from "@/assests/svg/downarrowicon";
import { fetchProductsFromSupabase, getProductHref } from "@/data/products";

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [headerProducts, setHeaderProducts] = useState([]);

  useEffect(() => {
    let isMounted = true;
    async function loadProducts() {
      const data = await fetchProductsFromSupabase();
      if (isMounted) {
        setHeaderProducts(data || []);
      }
    }
    loadProducts();
    return () => {
      isMounted = false;
    };
  }, []);

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
                  {headerProducts.map((prod) => (
                    <Link key={prod.id} href={getProductHref(prod.slug)}>
                      {prod.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link href="/companyprofile" className={styles.ancer}>
                Company Profile
              </Link>
              <Link href="/blog" className={styles.ancer}>
                Blog
              </Link>
            </nav>

            {/* Right Side Buttons */}
            <div className={styles.headerRight}>
              <Link href="/contactus" className={styles.contactBtn}>
                Contact Us
              </Link>

              <a href="tel:+919879533323" className={styles.contactPhone}>
                <FaPhoneAlt className={styles.phoneIcon} />
                <span>+91 9879533323</span>
              </a>

              {/* Hamburger Menu Icon */}
              <div
                className={styles.menuIcon}
                onClick={() => setIsSidebarOpen(true)}
                aria-label="Open menu"
              >
                <FiMenu />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar Component */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
    </>
  );
}
