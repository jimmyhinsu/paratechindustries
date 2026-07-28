import Commonherobanner from "@/components/commonherobanner";
import React from "react";
import common from "@/assests/images/common.jpg";
import Onlinelasermarking from "@/components/onlinelasermarking";

export const metadata = {
  title: "Online Laser Marking Machine | Flying Laser, Surat India",
  description:
    "Online flying laser marking machines with Fiber, CO2 & UV options. Mark moving production lines at up to 300m/min. Manufacturer in Surat, Gujarat.",
  keywords: [
    "Online Laser Marking Machine",
    "Flying Laser Marking Machine",
    "CO2 Flying Laser Marking Machine",
    "CO2 Flying Laser Coding Machine",
    "Fiber Laser Coding Machine",
    "In-line Laser Marking Machine",
    "Conveyor Laser Marking Machine",
    "Production Line Laser Marking Machine",
  ],
};

export default function Onlinelasermarkingmachine() {
  return (
    <>
      <Commonherobanner
        title="Online Laser Marking Machine – Flying Laser "
        subtitle="Paratech Industries"
        bgImage={common}
      />

      <Onlinelasermarking />
    </>
  );
}
