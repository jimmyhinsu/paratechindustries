"use client";
import React from "react";
import Slider from "react-slick";
import styles from "./review.module.scss";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "Ravish Kumar Soni",
    city: "Haridwar",
    state: "Uttarakhand",
    product: "Premium Laminate Sheet",
    rating: 5,
    review:
      "Excellent quality with elegant texture. The color consistency and finish are truly professional!",
  },
  {
    name: "Priya Sharma",
    city: "Jaipur",
    state: "Rajasthan",
    product: "Designer Laminate",
    rating: 4,
    review:
      "Beautiful designs with smooth shine. Installation was easy and the product feels very durable.",
  },
  {
    name: "Rahul Mehta",
    city: "Surat",
    state: "Gujarat",
    product: "Wood Texture Laminate",
    rating: 5,
    review:
      "Superb product! Gives a rich wood finish look. Customer service was also great.",
  },
  {
    name: "Sneha Patel",
    city: "Ahmedabad",
    state: "Gujarat",
    product: "Glossy Finish Laminate",
    rating: 5,
    review:
      "This laminate totally changed the vibe of my kitchen! Glossy, premium, and easy to clean.",
  },
];

export default function Review() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
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
    <section className={styles.reviewSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span>Client's Testimonials</span>
          <h2>What Our Customers Say</h2>
        </div>
        <Slider {...settings} className={styles.slider}>
          {reviews.map((review, index) => (
            <div className={styles.card} key={index}>
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
          ))}
        </Slider>
      </div>
    </section>
  );
}
