"use client";
import Commonherobanner from "@/components/commonherobanner";
import Fibercutting from "@/components/fibercutting";
import React, { useEffect } from "react";

export default function Fiberlasercuttingmachine() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Commonherobanner
        title="Fiber Laser Cutting Machine"
        subtitle="Solutions That Fit You."
        bgImage="/images/contactbg.jpg"
      />
      <Fibercutting />
    </>
  );
}
