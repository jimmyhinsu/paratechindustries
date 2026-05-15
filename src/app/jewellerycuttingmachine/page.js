"use client";
import Commonherobanner from "@/components/commonherobanner";
import common from "@/assests/images/common.jpg";
import React, { useEffect } from "react";
import Jewellerycutting from "@/components/jewellerycutting";

export default function Jewellerycuttingmachine() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <div>
        <Commonherobanner
          title="Jewellery Laser Cutting Machine "
          subtitle="Paratech Industries"
          bgImage={common}
        />
      </div>

      <Jewellerycutting />
    </>
  );
}
