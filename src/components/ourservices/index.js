"use client";
import React from "react";
import styles from "./ourservices.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/common/AuthProvider";

import bg from "@/assests/images/colasermarkingmachine.jpg";
import co from "@/assests/images/colasermarkingmachine.jpg";
import fly from "@/assests/images/flylasermarkingmachine.jpg";
import jsm from "@/assests/images/jewellerylaserweldingorsoldiermachine.jpg";
import jcm from "@/assests/images/jewellerylaserweldingorsoldiermachine3.jpg";
import flcm from "@/assests/images/fiberlasercuttingmachine.jpg";
import flmm from "@/assests/images/lasermarkingmachine.jpg";
import ulmm from "@/assests/images/uvlasermarkingmachine.jpg";
import flwm from "@/assests/images/fiberlaserweldingmachine.jpg";
import clmm from "@/assests/images/lasermarkingmachine1.jpg";

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
    img: flwm,
    Link: "/handheldfiberlaserweldingmachine",
  },
  {
    title: "Customise Laser Marking Machine",
    img: clmm,
    Link: "/customiselasermachine",
  },
  {
    title: "Sheet + Pipe Laser Cutting Machine",
    img: flmm,
    Link: "/sheetpipelasercuttingmachine",
  },
  {
    title: "Online Laser Marking Machine",
    img: fly,
    Link: "/onlinelasermarkingmachine",
  },
  {
    title: "Co2 Laser Cutting & Engraving Machine",
    img: bg,
    Link: "/co2lasercuttingmachine",
  },
  {
    title: "Co2 Laser Engraving Machine",
    img: co,
    Link: "/co2laserengravingmachine",
  },
  { title: "3D Engraving", img: bg, Link: "/dengraving" },
  { title: "3D Marking", img: bg, Link: "/dmarking" },
  {
    title: "UV Laser Marking Machine",
    img: ulmm,
    Link: "/uvlasermarkingmachine",
  },
  {
    title: "Jewellery Cutting Machine",
    img: jcm,
    Link: "/jewellerycuttingmachine",
  },
  {
    title: "Jewellery Soldering Machine",
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
