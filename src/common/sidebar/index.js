"use client";
import React, { useState, useEffect } from "react";
import styles from "./sidebar.module.scss";
import Link from "next/link";
import { IoClose, IoChevronDown, IoChevronUp } from "react-icons/io5";
import Image from "next/image";
import logo from "@/assests/images/paratechlogo.png";
import { fetchProductsFromSupabase, getProductHref } from "@/data/products";

export default function Sidebar({ isOpen, onClose }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [sidebarProducts, setSidebarProducts] = useState([]);

  useEffect(() => {
    let isMounted = true;
    async function loadProducts() {
      const data = await fetchProductsFromSupabase();
      if (isMounted) {
        setSidebarProducts(data || []);
      }
    }
    loadProducts();
    return () => {
      isMounted = false;
    };
  }, []);

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
                {sidebarProducts.map((prod) => (
                  <Link key={prod.id} href={getProductHref(prod.slug)} onClick={onClose}>
                    {prod.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/companyprofile" onClick={onClose}>
            Company Profile
          </Link>
          <Link href="/blog" onClick={onClose}>
            Blog
          </Link>
          <Link href="/contactus" onClick={onClose}>
            Contact Us
          </Link>
        </nav>
      </div>
    </div>
  );
}
