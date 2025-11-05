"use client";
import Commonherobanner from "@/components/commonherobanner";
import Fiberlaser from "@/components/fiberlaser";
import React, { useEffect } from "react";

export default function Fiberlasermarkingmachine() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Commonherobanner
        title="Fiber Laser Marking Machine"
        subtitle="Solutions That Fit You."
        bgImage="/images/contactbg.jpg"
      />
      <Fiberlaser />
    </>
  );
}
