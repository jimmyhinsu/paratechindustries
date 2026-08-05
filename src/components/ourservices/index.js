"use client";
import React, { useRef, useState, useEffect } from "react";
import styles from "./ourservices.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/common/AuthProvider";
import { fetchProductsFromSupabase, getProductHref } from "@/data/products";

export default function Ourservices() {
  const { setScrollCategory } = useAuth();
  const swiperRef = useRef(null);
  const [productsList, setProductsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    async function loadProducts() {
      const data = await fetchProductsFromSupabase();
      if (isMounted) {
        setProductsList(data || []);
        setLoading(false);
      }
    }
    loadProducts();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className={styles.servicesSection}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <span>OUR PRODUCTS</span>
          <h2>Explore Our Products</h2>
        </div>

        <div className={styles.sliderWrapper}>
          <button
            className={`${styles.navBtn} ${styles.prevBtn}`}
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Previous slide"
          >
            <FaChevronLeft />
          </button>

          {!loading && productsList.length > 0 && (
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              modules={[Autoplay, Navigation]}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={productsList.length >= 3}
              spaceBetween={20}
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className={styles.slider}
            >
              {productsList.map((product) => (
                <SwiperSlide key={product.id}>
                  <Link href={getProductHref(product.slug)}>
                    <div
                      className={styles.card}
                      onClick={() => setScrollCategory(product.name.toLowerCase())}
                    >
                      <div className={styles.imageWrapper}>
                        {product.cardImage && (
                          typeof product.cardImage === "string" ? (
                            <img
                              src={product.cardImage}
                              alt={product.name}
                              className={styles.image}
                              loading="lazy"
                            />
                          ) : (
                            <Image
                              src={product.cardImage}
                              alt={product.name}
                              className={styles.image}
                              width={400}
                              height={300}
                              unoptimized
                            />
                          )
                        )}
                      </div>
                      <div className={styles.content}>
                        <h3>{product.name}</h3>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          )}

          <button
            className={`${styles.navBtn} ${styles.nextBtn}`}
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Next slide"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
