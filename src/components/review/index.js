"use client";
import React from "react";
import styles from "./review.module.scss";
import { FaStar, FaExternalLinkAlt, FaCheckCircle } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const GOOGLE_MAPS_REVIEW_URL = "https://maps.app.goo.gl/onq4ZxLr1syUwp9j8";

const reviews = [
  {
    name: "Kartik Kalkani",
    badge: "Local Guide · 45 reviews",
    isLocalGuide: true,
    timeAgo: "5 months ago",
    product: "Fiber Laser Marking Machine",
    rating: 5,
    avatarColor: "#1a73e8",
    review:
      "Very Nice Service and Reliable Product. Also owner is very supportive and took extra care to understand our requirements.",
  },
  {
    name: "Uzair Sayyed",
    badge: "1 review",
    isLocalGuide: false,
    timeAgo: "10 months ago",
    product: "Industrial Laser Engraving Machine",
    rating: 5,
    avatarColor: "#e37400",
    review:
      "Great Performance and Precision! I’ve been using this laser machine for several months, and the results have been excellent. The engraving quality is sharp and consistent, even on detailed designs. The printing speed is faster than expected, and the software interface is easy to learn.",
  },
  {
    name: "Ritu Patel",
    badge: "3 reviews · 3 photos",
    isLocalGuide: false,
    timeAgo: "3 months ago",
    product: "Laser Marking & Laser Welding Machine",
    rating: 5,
    avatarColor: "#0f9d58",
    review:
      "Based on available reviews, Paratech Industries machines are generally considered good for precision work, especially laser marking and laser welding applications. Customers have mentioned satisfactory machine performance, product quality, and prompt support.",
  },
  {
    name: "Zeel Butani",
    badge: "6 reviews · 2 photos",
    isLocalGuide: false,
    timeAgo: "9 months ago",
    product: "Fiber Laser Marking Machine",
    rating: 5,
    avatarColor: "#9334e6",
    review:
      "I have purchased laser marking machine from paratech industries, it was very good at working and I found smooth service and response from their team. Really appreciate paratech and their team.",
  },
  {
    name: "Shubham Rajput",
    badge: "3 reviews · 2 photos",
    isLocalGuide: false,
    timeAgo: "10 months ago",
    product: "Laser Cutting & Marking Machine",
    rating: 5,
    avatarColor: "#d93025",
    review:
      "They gives best quality of Laser related machines and also provide good service support. Thank you paratech industry.",
  },
  {
    name: "Jignesh Desai",
    badge: "10 reviews",
    isLocalGuide: false,
    timeAgo: "9 months ago",
    product: "Laser Machine Solution",
    rating: 5,
    avatarColor: "#b45309",
    review:
      "Service is good and staff work intelligent.. machinery quality is premium at this rate.",
  },
  {
    name: "Usaid Sayyed",
    badge: "1 review",
    isLocalGuide: false,
    timeAgo: "10 months ago",
    product: "Laser Marking & Engraving Machine",
    rating: 5,
    avatarColor: "#0284c7",
    review:
      "Great machine for engraving and marking fast accurate and durable. Perfect for businesses that need consistent, professional results.",
  },
  {
    name: "Prashant Tarsariya",
    badge: "12 reviews · 7 photos",
    isLocalGuide: false,
    timeAgo: "9 months ago",
    product: "Precision Laser Marking Machine",
    rating: 5,
    avatarColor: "#059669",
    review:
      "Excellent services & support by staff. Service provided by staff wonderful 👏 👌",
  },
  {
    name: "Sachin Tarsariya",
    badge: "1 review",
    isLocalGuide: false,
    timeAgo: "9 months ago",
    product: "Industrial Laser Machine",
    rating: 5,
    avatarColor: "#0d9488",
    review:
      "Good quality of machine and best service provided. And also instant delivery of machine.",
  },
  {
    name: "Harshit Tarpara",
    badge: "4 reviews · 15 photos",
    isLocalGuide: false,
    timeAgo: "9 months ago",
    product: "Laser Engraving System",
    rating: 5,
    avatarColor: "#7c3aed",
    review:
      "Best service & co ordination, everything is good 😊",
  },
  {
    name: "Bharat Tarasariya",
    badge: "5 reviews",
    isLocalGuide: false,
    timeAgo: "9 months ago",
    product: "Laser Marking System",
    rating: 5,
    avatarColor: "#ea580c",
    review:
      "Good machine quality, good service and company owner is good person.",
  },
  {
    name: "Paralife Medico",
    badge: "1 review",
    isLocalGuide: false,
    timeAgo: "9 months ago",
    product: "Medical Instruments Laser Marking",
    rating: 5,
    avatarColor: "#dc2626",
    review:
      "Excellent services & support by staff as well as owner also.",
  },
];

export default function Review() {
  return (
    <section className={styles.reviewSection}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.googleBadge}>
            <FcGoogle className={styles.googleIcon} />
            <span>Google Reviews</span>
          </div>
          <h2>What Our Customers Say</h2>
          <p className={styles.subTitle}>
            Real verified reviews from manufacturing industries & businesses on Google Maps
          </p>

          {/* Rating Summary Banner */}
          <div className={styles.ratingSummary}>
            <div className={styles.scoreBox}>
              <FcGoogle className={styles.summaryGoogleLogo} />
              <div className={styles.scoreDetails}>
                <div className={styles.scoreTop}>
                  <span className={styles.scoreNumber}>4.9</span>
                  <div className={styles.stars}>
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={styles.star} />
                    ))}
                  </div>
                </div>
                <span className={styles.ratingCount}>
                  Based on 32 verified Google Reviews
                </span>
              </div>
            </div>

            <a
              href={GOOGLE_MAPS_REVIEW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.writeReviewBtn}
            >
              <span>View on Google</span>
              <FaExternalLinkAlt className={styles.btnIcon} />
            </a>
          </div>
        </div>

        {/* Reviews Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={3}
          loop={true}
          speed={800}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 16 },
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          }}
          className={styles.slider}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <div className={styles.card}>
                {/* Top Google & Verification badge */}
                <div className={styles.cardTop}>
                  <div className={styles.userInfoWrapper}>
                    <div
                      className={styles.avatar}
                      style={{ backgroundColor: review.avatarColor }}
                    >
                      {review.name.charAt(0).toUpperCase()}
                    </div>
                    <div className={styles.userInfo}>
                      <div className={styles.nameRow}>
                        <h3>{review.name}</h3>
                        <FaCheckCircle
                          className={styles.verifiedIcon}
                          title="Verified Reviewer"
                        />
                      </div>
                      <div className={styles.metaRow}>
                        {review.isLocalGuide && (
                          <span className={styles.localGuideBadge}>
                            Local Guide
                          </span>
                        )}
                        <span className={styles.location}>
                          {review.badge}
                        </span>
                      </div>
                    </div>
                  </div>
                  <FcGoogle className={styles.cardGoogleIcon} title="Google Review" />
                </div>

                {/* Rating & Time */}
                <div className={styles.ratingRow}>
                  <div className={styles.rating}>
                    {[...Array(review.rating)].map((_, i) => (
                      <FaStar key={i} className={styles.star} />
                    ))}
                  </div>
                  <span className={styles.timeAgo}>{review.timeAgo}</span>
                </div>

                {/* Product Tag */}
                <div className={styles.productTag}>
                  <span>Machine:</span> {review.product}
                </div>

                {/* Review Text */}
                <p className={styles.reviewText}>"{review.review}"</p>

                {/* Bottom Source Link */}
                <div className={styles.cardFooter}>
                  <a
                    href={GOOGLE_MAPS_REVIEW_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.cardSourceLink}
                  >
                    <span>Posted on Google</span>
                    <FaExternalLinkAlt className={styles.linkIcon} />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
