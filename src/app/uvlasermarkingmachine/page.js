import Commonherobanner from "@/components/commonherobanner";
import Uvlasermarking from "@/components/uvlasermarking";
import common from "@/assests/images/common.jpg";
import React from "react";

export const metadata = {
  title: "UV Laser Marking Machine Manufacturer in India",
  description:
    "UV laser marking machine, 3W/5W/30W, for PCB, glass, plastic & rubber. 0.001nm repeat accuracy, 1-year warranty. Manufacturer in Surat, Gujarat, India.",
  keywords: [
    "UV Laser Marking Machine",
    "UV Laser Marker",
    "5W UV Laser Marking Machine",
    "3W UV Laser Marking Machine",
    "UV Laser Engraving Machine",
    "UV Laser Marking Machine for PCB",
    "UV Laser Marking Machine for Plastic",
    "Cold Laser Marking Machine",
    "UV Laser Marking Machine Manufacturer",
  ],
};

export default function Uvlasermarkingmachine() {
  return (
    <>
      <Commonherobanner
        title="UV Laser Marking Machine "
        subtitle="Paratech Industries"
        bgImage={common}
      />
      <Uvlasermarking />
    </>
  );
}
