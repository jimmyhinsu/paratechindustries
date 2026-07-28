import Commonherobanner from "@/components/commonherobanner";
import React from "react";
import common from "@/assests/images/common.jpg";
import Dengravingsection from "@/components/dengravingsection";

export const metadata = {
  title: "3D Laser Engraving Machine | Fiber Laser, Surat India",
  description:
    "3D laser engraving machine with dynamic focus for deep relief & curved-surface engraving. 60W-100W fiber laser. Manufacturer in Surat, Gujarat.",
  keywords: [
    "3D Laser Engraving Machine",
    "3D Fiber Laser Engraving Machine",
    "Dynamic Focus Laser Engraving Machine",
    "Deep Relief Laser Engraving Machine",
    "Curved Surface Laser Engraving Machine",
    "3D Laser Engraving Machine Manufacturer",
  ],
};

export default function Dengraving() {
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
