import Commonherobanner from "@/components/commonherobanner";
import React from "react";
import common from "@/assests/images/common.jpg";
import Co2lasercutting from "@/components/co2lasercutting";

export const metadata = {
  title: "CO2 Laser Cutting & Engraving Machine, Surat India",
  description:
    "CO2 laser cutting & engraving machines, 80W-200W, cutting area up to 1600x1000mm. For acrylic, wood, leather & non-metal materials. Surat manufacturer.",
  keywords: [
    "CO2 Laser Cutting Machine",
    "CO2 Laser Cutting and Engraving Machine",
    "CO2 Laser Cutting Machine for Acrylic",
    "CO2 Laser Cutting Machine for Wood",
    "Non-Metal Laser Cutting Machine",
    "Sealed Glass CO2 Laser Tube Machine",
    "CO2 Laser Cutting Machine Manufacturer",
    "Acrylic Laser Cutting Machine",
  ],
};

export default function Co2lasercuttingmachine() {
  return (
    <>
      <Commonherobanner
        title="CO2 Laser Cutting & Engraving Machine "
        subtitle="Paratech Industries"
        bgImage={common}
      />

      <Co2lasercutting />
    </>
  );
}
