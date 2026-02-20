"use client";
import Commonherobanner from "@/components/commonherobanner";
import React, { useEffect } from "react";
import common from "@/assests/images/common.jpg";
import Jewellerysoldering from "@/components/jewellerysoldering";

export default function Jewellerysolderingmachine() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Commonherobanner
        title="Jewellery Laser Soldering Machine"
        subtitle="Solutions That Fit You."
        bgImage={common}
      />
      <Jewellerysoldering />
    </>
  );
}
