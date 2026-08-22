"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./increaser.module.scss";

export default function Increaser() {
  const stats = [
    { label: "Projects Completed", value: 150 },
    { label: "Happy Clients", value: 3800 },
    { label: "Years of Experience", value: 10 },
    { label: "Products", value: 20 },
  ];

  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setVisible(true);
      },
      { threshold: 0.4 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

  const Counter = ({ end }) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
      if (!visible) return;
      let animationFrameId;
      let startTime = null;
      const duration = 1800;

      const easeOutQuad = (t) => t * (2 - t);

      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const eased = easeOutQuad(progress);
        setCount(Math.floor(eased * end));

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(step);
        } else {
          setCount(end);
        }
      };

      animationFrameId = requestAnimationFrame(step);
      return () => cancelAnimationFrame(animationFrameId);
    }, [visible, end]);

    return <>{count}</>;
  };

  return (
    <section className={styles.increaserSection} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.gridoverlay}>
          {stats.map((item, i) => (
            <div className={styles.card} key={i}>
              <h2>
                {visible ? <Counter end={item.value} /> : 0}+
              </h2>
              <p >{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
