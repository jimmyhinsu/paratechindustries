import Commonherobanner from "@/components/commonherobanner";
import React from "react";
import common from "@/assests/images/common.jpg";
import Handheldfiber from "@/components/handheldfiber";

export const metadata = {
  title: "Handheld Fiber Laser Welding Machine Manufacturer, Surat",
  description:
    "1000W-2000W Handheld Fiber Laser Welding Machines for SS, MS & aluminium. Water-cooled, industrial-grade. Manufacturer & exporter in Surat, Gujarat.",
  keywords: [
    "Handheld Fiber Laser Welding Machine",
    "Hand Held Fiber Laser Welding Machine",
    "Handheld Metal Fiber Laser Welding Machine",
    "Industrial Laser Welding Machine",
    "1000W Fiber Laser Welding Machine",
    "1.5 Kw Fiber Laser Welding Machine",
    "1.5 Kw Handheld Fiber Laser Welding Machine",
    "2000W Fiber Laser Welding Machine",
    "1500W Handheld Laser Welding Machine",
    "Fiber Laser Welding Machine Manufacturer",
  ],
};

export default function Fiberlaserweldingmachine() {
  return (
    <>
      <Commonherobanner
        title="Handheld Fiber Laser Welding Machine"
        subtitle="Solutions That Fit You."
        bgImage={common}
      />

      <Handheldfiber />
    </>
  );
}
