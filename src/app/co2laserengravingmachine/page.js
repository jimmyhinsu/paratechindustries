"use client";
import Commonherobanner from "@/components/commonherobanner";
import React, { useEffect } from "react";

export default function Co2laserengravingmachine() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <Commonherobanner
        title="Co2 Laser Engraving Machine"
        subtitle="Solutions That Fit You."
        bgImage="/images/contactbg.jpg"
      />
    </div>
  );
}
