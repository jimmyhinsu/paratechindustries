"use client";
import React from "react";
import styles from "./ourservices.module.scss";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";
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
import { useAuth } from "@/common/AuthProvider";
import Link from "next/link";

const services = [
  { title: "Fiber Laser Marking Machine", img: flmm },
  { title: "Fiber Laser Cutting Machine", img: flcm },
  { title: "Fiber Laser Welding Machine", img: flwm },
  { title: "Customise Laser Marking Machine", img: clmm },
  { title: "Pipe Laser Cutting Machine", img: bg },
  { title: "Sheet + Pipe Laser Cutting Machine", img: bg },
  { title: "Battery Welding Laser Machine", img: bg },
  { title: "Online Laser Marking Machine", img: fly },
  { title: "Co2 Laser Cutting & Engraving Machine", img: bg },
  { title: "Co2 Laser Engraving Machine", img: co },
  { title: "3D Engraving", img: bg },
  { title: "UV Laser Marking Machine", img: ulmm },
  { title: "3D Marking", img: bg },
  { title: "Die Mould Welding", img: bg },
  { title: "Jewellery Cutting Machine", img: jcm },
  { title: "Jewellery Soldering Machine", img: jsm },
];

// Custom Arrows
const NextArrow = ({ onClick }) => (
  <div className={`${styles.arrow} ${styles.next}`} onClick={onClick}>
    <FaArrowRight />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className={`${styles.arrow} ${styles.prev}`} onClick={onClick}>
    <FaArrowLeft />
  </div>
);

export default function Ourservices() {
  const { setScrollCategory } = useAuth();

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className={styles.servicesSection}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <span>OUR PRODUCTS</span>
          <h2>Explore Our Products</h2>
        </div>

        <Slider {...settings} className={styles.slider}>
          {services.map((service, i) => (
            <Link href="/" key={i}>
              <div
                className={styles.card}
                onClick={() => setScrollCategory(service.title?.toLowerCase())}
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
          ))}
        </Slider>
      </div>
    </div>
  );
}
