"use client";
import React, { useEffect } from "react";
import common from "@/assests/images/common.jpg";
import Commonherobanner from "@/components/commonherobanner";
import Handheldfiber from "@/components/handheldfiber";

export default function handheldfiberlaserweldingmachine() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <Commonherobanner
        title="Handheld Fiber Laser Welding Machine"
        subtitle="Solutions That Fit You."
        bgImage={common}
      />

      <Handheldfiber />
    </div>
  );
}
