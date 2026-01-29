"use client";
import Commonherobanner from "@/components/commonherobanner";
import React, { useEffect } from "react";
import common from "@/assests/images/common.jpg";
import Fibercutting from "@/components/fibercutting";

export default function Sheetpipelasercuttingmachine() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Commonherobanner
        title="Sheet + Pipe Laser Cutting Machine"
        subtitle="Solutions That Fit You."
        bgImage={common}
      />

      <Fibercutting />
    </>
  );
}
