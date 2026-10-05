"use client";
import React, { useRef } from "react";
import styles from "./ourclients.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";

const clients = [
  {
    name: "Apar Industries",
    image: "/images/apar-industrie-1785996254259.jpeg",
  },
  {
    name: "Arvin",
    image: "/images/Arvin-1785996195160.jpeg",
  },
  {
    name: "Arvind",
    image: "/images/Arvind-1785996221700.jpeg",
  },
  {
    name: "BHEL",
    image: "/images/homeBhe-1785996238477.jpeg",
  },
  {
    name: "Siemens & L&T",
    image: "/images/siemens-lt-1785996273704.jpeg",
  },
  {
    name: "Hind Rectifiers",
    image: "/images/trectifie-1785996296276.jpeg",
  },
];

// Duplicate list so Swiper loop has plenty of buffer items for smooth infinite sliding across all viewports
const allClients = [...clients, ...clients];

export default function OurClients() {
  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev(800);
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext(800);
    }
  };

  return (
    <section className={styles.clientSection} id="our-clients">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span>TRUSTED PARTNERS</span>
          <h2>Our Clients</h2>
          <p>
            Proud to power leading manufacturing and industrial enterprises across India with precision laser technology.
          </p>
        </div>

        <div className={styles.sliderWrapper}>
          <button
            className={`${styles.navBtn} ${styles.prevBtn}`}
            onClick={handlePrev}
            aria-label="Previous client slide"
          >
            <FaChevronLeft />
          </button>

          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            modules={[Autoplay, Navigation]}
            spaceBetween={24}
            slidesPerView={2}
            loop={true}
            speed={800}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: { slidesPerView: 2, spaceBetween: 16 },
              576: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 24 },
              1024: { slidesPerView: 4, spaceBetween: 30 },
              1280: { slidesPerView: 5, spaceBetween: 32 },
            }}
            className={styles.slider}
          >
            {allClients.map((client, index) => (
              <SwiperSlide key={index}>
                <div className={styles.clientCard}>
                  <div className={styles.logoWrapper}>
                    <img
                      src={client.image}
                      alt={client.name}
                      className={styles.clientLogo}
                      loading="lazy"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            className={`${styles.navBtn} ${styles.nextBtn}`}
            onClick={handleNext}
            aria-label="Next client slide"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
