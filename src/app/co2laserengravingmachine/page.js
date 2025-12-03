"use client";
import Commonherobanner from "@/components/commonherobanner";
import common from "@/assests/images/common.jpg";
import React, { useEffect } from "react";
import Co2laserengraving from "@/components/co2laserengraving";

export default function Co2laserengravingmachine() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <Commonherobanner
        title="Co2 Laser Engraving Machine"
        subtitle="Solutions That Fit You."
        bgImage={common}
      />

      <Co2laserengraving />
    </div>
  );
}
