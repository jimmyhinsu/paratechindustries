"use client";
import Commonherobanner from "@/components/commonherobanner";
import React, { useEffect } from "react";
import common from "@/assests/images/common.jpg";
import Onlinelasermarking from "@/components/onlinelasermarking";

export default function Onlinelasermarkingmachine() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Commonherobanner
        title="Online Laser Marking Machine"
        subtitle="Solutions That Fit You."
        bgImage={common}
      />

      <Onlinelasermarking />
    </>
  );
}
