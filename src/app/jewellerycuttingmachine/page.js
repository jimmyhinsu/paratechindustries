import Commonherobanner from "@/components/commonherobanner";
import common from "@/assests/images/common.jpg";
import React from "react";
import Jewellerycutting from "@/components/jewellerycutting";

export const metadata = {
  title: "Jewellery Laser Cutting Machine for Gold & Silver",
  description:
    "Jewellery laser cutting machine with German laser source. Cutting depth 0.01 micron-1.5mm for gold, silver & platinum. Manufacturer in Surat, Gujarat.",
  keywords: [
    "Jewellery Laser Cutting Machine",
    "Gold Silver Laser Cutting Machine",
    "Gold and Silver Jewelry Laser Cutting Machine",
    "Jewelry Laser Cutting Machine",
    "Gold Jewellery Laser Cutting Machine",
    "Jewellery Laser Cutting Machine for Gold and Silver",
    "Jewellery Laser Cutting Machine Manufacturer",
  ],
};

export default function Jewellerycuttingmachine() {
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
