"use client";
import Commonherobanner from "@/components/commonherobanner";
import React, { useEffect } from "react";
import common from "@/assests/images/common.jpg";
import Dmarkingsection from "@/components/dmarkingsection";

export default function Dmarking() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <Commonherobanner
        title="3d Marking"
        subtitle="Solutions That Fit You."
        bgImage={common}
      />

      <Dmarkingsection />
    </div>
  );
}
