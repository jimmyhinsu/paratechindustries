"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./increaser.module.scss";

export default function Increaser() {
  const stats = [
    { label: "Projects Completed", value: 150 },
    { label: "Happy Clients", value: 120 },
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
      if (visible) {
        let start = 0;
        const duration = 2000;
        const step = Math.ceil(duration / end);
        const counter = setInterval(() => {
          start += 1;
          if (start >= end) {
            setCount(end);
            clearInterval(counter);
          } else setCount(start);
        }, step);
      }
    }, [visible]);
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
