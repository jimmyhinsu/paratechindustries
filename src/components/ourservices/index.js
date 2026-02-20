"use client";
import React from "react";
import styles from "./ourservices.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/common/AuthProvider";

import co from "@/assests/images/colaserengravingmachine.jpg";
import jsm from "@/assests/images/jsm.jpeg";
import jcm from "@/assests/images/jcm.jpeg";
import flcm from "@/assests/images/fiberlasercuttingmachine.jpeg";
import flmm from "@/assests/images/lasermarkingmachine.jpg";
import ulmm from "@/assests/images/uvlasermarkingmachine.jpeg";
import clmm from "@/assests/images/customiselasermachine.jpg";
import hflm from "@/assests/images/handheldfiberlaserweldingmachine.jpeg";
import spcm from "@/assests/images/sheetpipelasercuttingmachine.jpeg";
import clcmm from "@/assests/images/colasercuttingmachine.jpg";
import da from "@/assests/images/dengraving.jpg";
import dm from "@/assests/images/dmarking.jpg";
import olmm from "@/assests/images/olmm.jpg";

const services = [
  {
    title: "Fiber Laser Marking Machine",
    img: flmm,
    Link: "/fiberlasermarkingmachine",
  },
  {
    title: "Fiber Laser Cutting Machine",
    img: flcm,
    Link: "/fiberlasercuttingmachine",
  },
  {
    title: "Handheld Fiber Laser Welding Machine",
    img: hflm,
    Link: "/handheldfiberlaserweldingmachine",
  },
  {
    title: "Customise Laser Marking Machine",
    img: clmm,
    Link: "/customiselasermachine",
  },
  {
    title: "Sheet + Pipe Laser Cutting Machine",
    img: spcm,
    Link: "/sheetpipelasercuttingmachine",
  },
  {
    title: "Online Laser Marking Machine",
    img: olmm,
    Link: "/onlinelasermarkingmachine",
  },
  {
    title: "Co2 Laser Cutting & Engraving Machine",
    img: clcmm,
    Link: "/co2lasercuttingmachine",
  },
  {
    title: "Co2 Laser Engraving Machine",
    img: co,
    Link: "/co2laserengravingmachine",
  },
  { title: "3D Engraving", img: da, Link: "/dengraving" },
  { title: "3D Marking", img: dm, Link: "/dmarking" },
  {
    title: "UV Laser Marking Machine",
    img: ulmm,
    Link: "/uvlasermarkingmachine",
  },
  {
    title: "Jewellery Laser Cutting Machine",
    img: jcm,
    Link: "/jewellerycuttingmachine",
  },
  {
    title: "Jewellery Laser Soldering Machine",
    img: jsm,
    Link: "/jewellerysolderingmachine",
  },
];

export default function Ourservices() {
  const { setScrollCategory } = useAuth();

  return (
    <div className={styles.servicesSection}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <span>OUR PRODUCTS</span>
          <h2>Explore Our Products</h2>
        </div>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className={styles.slider}
        >
          {services.map((service, i) => (
            <SwiperSlide key={i}>
              <Link href={service.Link}>
                <div
                  className={styles.card}
                  onClick={() => setScrollCategory(service.title.toLowerCase())}
                >
                  <div className={styles.imageWrapper}>
                    <Image
                      src={service.img}
                      alt={service.title}
                      className={styles.image}
                    />
                  </div>
                  <div className={styles.content}>
                    <h3>{service.title}</h3>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
