"use client"
import Commonherobanner from "@/components/commonherobanner";
import common from "@/assests/images/common.jpg";
import React, { useEffect } from "react";

export default function Jewellerycuttingmachine() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <div>
        <Commonherobanner
          title="Jewellery Cutting Machine"
          subtitle="Solutions That Fit You."
          bgImage={common}
        />
      </div>
    </>
  );
}
