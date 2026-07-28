import Commonherobanner from "@/components/commonherobanner";
import React from "react";
import common from "@/assests/images/common.jpg";
import Jewellerysoldering from "@/components/jewellerysoldering";

export const metadata = {
  title: "Jewellery Laser Soldering Machine, 200W | Surat, India",
  description:
    "Jewellery Laser Soldering Machine for gold & silver. Nd:YAG, 0.1-3mm weld spot, CCD/microscope options. Leading manufacturer in India.",
  keywords: [
    "Jewellery Laser Soldering Machine",
    "Gold Jewellery Laser Soldering Machine",
    "200W Jewellery Laser Soldering Machine",
    "Jewelry Laser Soldering Machine",
    "Desktop Jewellery Laser Soldering Machine",
    "CCD Laser Jewellery Soldering Machine",
    "Gold and Silver Jewelry Laser Soldering Machine",
    "Jewellery Laser Soldering Machine Manufacturer",
  ],
};

export default function Jewellerysolderingmachine() {
  return (
    <>
      <Commonherobanner
        title="Jewellery Laser Soldering Machine "
        subtitle="Paratech Industries"
        bgImage={common}
      />
      <Jewellerysoldering />
    </>
  );
}
