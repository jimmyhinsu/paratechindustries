"use client";
import React from "react";
import styles from "./review.module.scss";
import { FaStar } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const reviews = [
  {
    name: "Ravish Kumar Soni",
    city: "Haridwar",
    state: "Uttarakhand",
    product: "Fiber lase cutting machine",
    rating: 5,
    review:
      "Excellent quality with elegant texture. The color consistency and finish are truly professional!",
  },
  {
    name: "Priya Sharma",
    city: "Jaipur",
    state: "Rajasthan",
    product: "Co2 laser engraving machine",
    rating: 4,
    review:
      "Beautiful designs with smooth shine. Installation was easy and the product feels very durable.",
  },
  {
    name: "Rahul Mehta",
    city: "Surat",
    state: "Gujarat",
    product: "Jewellry cutting machine",
    rating: 5,
    review:
      "Superb product! Gives a rich wood finish look. Customer service was also great. Highly recommend!",
  },
  {
    name: "Sneha Patel",
    city: "Ahmedabad",
    state: "Gujarat",
    product: "Fiber laser marking machine",
    rating: 5,
    review:
      "This laminate totally changed the vibe of my kitchen! Glossy, premium, and easy to clean. Love it!",
  },
];

export default function Review() {
  return (
    <section className={styles.reviewSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span>Client's Testimonials</span>
          <h2>What Our Customers Say</h2>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={3}
          loop={true}
          speed={700}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            576: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className={styles.slider}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className={styles.card}>
                <div className={styles.header}>
                  <div className={styles.avatar}>
                    {review.name.charAt(0).toUpperCase()}
                  </div>

                  <div className={styles.userInfo}>
                    <h3>{review.name}</h3>
                    <span>
                      {review.city}, {review.state}
                    </span>
                  </div>
                </div>

                <div className={styles.rating}>
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} className={styles.star} />
                  ))}
                </div>

                <div className={styles.product}>{review.product}</div>
                <p>{review.review}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
