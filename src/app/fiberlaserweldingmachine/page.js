"use client";
import Commonherobanner from "@/components/commonherobanner";
import React, { useEffect } from "react";
import common from "@/assests/images/common.jpg";
import Handheldfiber from "@/components/handheldfiber";

export default function Fiberlaserweldingmachine() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Commonherobanner
        title="Handheld Fiber Laser Welding Machine"
        subtitle="Solutions That Fit You."
        bgImage={common}
      />

      <Handheldfiber />
    </>
  );
}
