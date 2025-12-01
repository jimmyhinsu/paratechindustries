"use client";
import Commonherobanner from "@/components/commonherobanner";
import Uvlasermarking from "@/components/uvlasermarking";
import common from "@/assests/images/common.jpg";
import React, { useEffect } from "react";

export default function Uvlasermarkingmachine() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Commonherobanner
        title="UV Laser Marking Machine"
        subtitle="Solutions That Fit You."
        bgImage={common}
      />
      <Uvlasermarking />
    </>
  );
}
