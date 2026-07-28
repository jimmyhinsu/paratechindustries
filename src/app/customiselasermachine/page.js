import Commonherobanner from "@/components/commonherobanner";
import React from "react";
import common from "@/assests/images/common.jpg";
import Customisemachine from "@/components/customisemachine";

export const metadata = {
  title: "Custom Fiber Laser Marking Machine in India",
  description:
    "Custom fiber laser marking machines with working areas up to 1500x3000mm & 30-200W power. Encoder-synced for large, stitching-free graphics. Surat manufacturer.",
  keywords: [
    "Custom Fiber Laser Marking Machine",
    "Large Size Fiber Laser Marking Machine",
    "Large Format Fiber Laser Marking Machine",
    "Custom Working Area Laser Marking Machine",
    "Encoder Synced Laser Marking Machine",
    "Continuous Laser Marking Machine",
    "Conveyor Fiber Laser Marking Machine",
    "200W Fiber Laser Marking Machine",
    "Custom Laser Marking Machine Manufacturer",
  ],
};

export default function Customiselasermachine() {
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
