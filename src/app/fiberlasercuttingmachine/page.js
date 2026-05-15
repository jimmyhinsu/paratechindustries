"use client";
import Commonherobanner from "@/components/commonherobanner";
import Fibercutting from "@/components/fibercutting";
import React, { useEffect } from "react";
import common from "@/assests/images/common.jpg";

export default function Fiberlasercuttingmachine() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Commonherobanner
        title="Fiber Laser Cutting Machine - Precision Cutting "
        subtitle="Paratech Industries"
        bgImage={common}
      />
      <Fibercutting />
    </>
  );
}
