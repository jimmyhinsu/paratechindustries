"use client";
import Commonherobanner from "@/components/commonherobanner";
import React, { useEffect } from "react";
import common from "@/assests/images/common.jpg";
import Customisemachine from "@/components/customisemachine";

export default function Customiselasermachine() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Commonherobanner
        title="Custom Laser Marking Machine - Tailored Solutions "
        subtitle="Paratech Industries"
        bgImage={common}
      />

      <Customisemachine />
    </>
  );
}
