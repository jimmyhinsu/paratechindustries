import Commonherobanner from "@/components/commonherobanner";
import common from "@/assests/images/common.jpg";
import React from "react";
import Co2laserengraving from "@/components/co2laserengraving";

export const metadata = {
  title: "CO2 Laser Engraving Machine for Wood, Acrylic, Surat",
  description:
    "CO2 laser engraving machines, 30W-100W, for wood, acrylic, leather, marble, glass & fabric. Engraving accuracy <0.01mm. Manufacturer in Surat, Gujarat.",
  keywords: [
    "CO2 Laser Engraving Machine",
    "CO2 Laser Engraving Machine for Wood",
    "CO2 Laser Engraving Machine for Acrylic",
    "Non-Metal Laser Engraving Machine",
    "Laser Engraving Machine for Leather",
    "Laser Engraving Machine for Marble",
    "Gift Article Laser Engraving Machine",
    "CO2 Laser Engraving Machine Manufacturer",
  ],
};

export default function Co2laserengravingmachine() {
  return (
    <div>
      <Commonherobanner
        title="CO2 Laser Engraving Machine "
        subtitle="Paratech Industries"
        bgImage={common}
      />

      <Co2laserengraving />
    </div>
  );
}
