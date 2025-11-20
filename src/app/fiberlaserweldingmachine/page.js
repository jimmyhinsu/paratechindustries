"use client";
import Commonherobanner from "@/components/commonherobanner";
import React, { useEffect } from "react";

export default function Fiberlaserweldingmachine() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Commonherobanner
        title="Fiber Laser Welding Machine"
        subtitle="Solutions That Fit You."
        bgImage="/images/contactbg.jpg"
      />
    </>
  );
}
