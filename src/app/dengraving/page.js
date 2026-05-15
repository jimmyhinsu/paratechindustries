"use client";
import Commonherobanner from "@/components/commonherobanner";
import React, { useEffect } from "react";
import common from "@/assests/images/common.jpg";
import Dengravingsection from "@/components/dengravingsection";

export default function Dengraving() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Commonherobanner
        title="3D Laser Engraving Machine "
        subtitle="Paratech Industries"
        bgImage={common}
      />

      <Dengravingsection />
    </>
  );
}
