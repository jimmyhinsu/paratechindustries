import Commonherobanner from "@/components/commonherobanner";
import Fiberlaser from "@/components/fiberlaser";
import React from "react";
import common from "@/assests/images/common.jpg";

export const metadata = {
  title: "Fiber Laser Marking Machine Manufacturer in Surat, India",
  description:
    "Fiber Laser Marking Machines for metal, plastic & jewelry. Mark SS, MS, aluminium, gold & more. Manufacturer & exporter in India.",
  keywords: [
    "Fiber Laser Marking Machine",
    "Fiber Laser Marker",
    "Metal Laser Marking Machine",
    "Handheld Fiber Laser Marking Machine",
    "Desktop Fiber Laser Marking Machine",
    "Portable Fiber Laser Marking Machine",
    "Mini Fiber Laser Marking Machine",
    "Industrial Fiber Laser Marking Machine",
    "20W Fiber Laser Marking Machine",
    "30W Fiber Laser Marking Machine",
    "50W Fiber Laser Marking Machine",
    "60W Fiber Laser Marking Machine",
    "100W Fiber Laser Marking Machine",
    "Fiber Laser Marking Machine Manufacturer",
    "Fiber Laser Marking Machine for Metal",
  ],
};

export default function Fiberlasermarkingmachine() {
  return (
    <>
      <Commonherobanner
        title="Fiber Laser Marking Machine - Metal & Plastic "
        subtitle="Paratech Industries"
        bgImage={common}
      />
      <Fiberlaser />
    </>
  );
}
