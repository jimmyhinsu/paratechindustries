"use client";
import Commonherobanner from "@/components/commonherobanner";
import React, { useEffect } from "react";
import common from "@/assests/images/common.jpg";
import Co2lasercutting from "@/components/co2lasercutting";

export default function Co2lasercuttingmachine() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Commonherobanner
        title="Co2 Laser Cutting & Engraving Machine"
        subtitle="Solutions That Fit You."
        bgImage={common}
      />

      <Co2lasercutting />
    </>
  );
}
