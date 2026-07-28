import Commonherobanner from "@/components/commonherobanner";
import Fibercutting from "@/components/fibercutting";
import React from "react";
import common from "@/assests/images/common.jpg";

export const metadata = {
  title: "Fiber Laser Cutting Machine Manufacturer in Surat, India",
  description:
    "500W-5KW CNC Fiber Laser Cutting Machines for SS, MS, aluminium & brass sheets. IPG/Raycus source, high precision. Manufacturer in Surat, Gujarat, India.",
  keywords: [
    "Fiber Laser Cutting Machine",
    "CNC Fiber Laser Cutting Machine",
    "Metal Laser Cutting Machine",
    "Sheet Metal Laser Cutting Machine",
    "Industrial Laser Cutting Machine",
    "Fiber Laser Cutting Machine Manufacturer",
    "Fiber Laser Cutting Machine for Stainless Steel",
    "IPG Fiber Laser Cutting Machine",
    "Raycus Fiber Laser Cutting Machine",
    "High Power Fiber Laser Cutting Machine",
  ],
};

export default function Fiberlasercuttingmachine() {
  return (
    <>
      <Commonherobanner
        title="Fiber Laser Cutting Machine - Precision Cutting "
        subtitle="Paratech Industries"
        bgImage={common}
      />
      <Fibercutting />
    </>
  );
}
