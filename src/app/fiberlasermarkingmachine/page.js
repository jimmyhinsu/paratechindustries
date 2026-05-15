"use client";
import Commonherobanner from "@/components/commonherobanner";
import Fiberlaser from "@/components/fiberlaser";
import React, { useEffect } from "react";
import common from "@/assests/images/common.jpg";

export default function Fiberlasermarkingmachine() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Commonherobanner
        title="Fiber Laser Marking Machine - Metal & Plastic "
        subtitle="Paratech Industries"
        bgImage={common}
      />
      <Fiberlaser />
    </>
  );
}
