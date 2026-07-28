import Commonherobanner from "@/components/commonherobanner";
import React from "react";
import common from "@/assests/images/common.jpg";
import Dmarkingsection from "@/components/dmarkingsection";

export const metadata = {
  title: "3D Laser Marking Machine | Fast Coding, Curved Parts",
  description:
    "3D fiber laser marking machine for high-speed coding, serials & logos on curved or stepped parts. 60W-100W. Manufacturer in Surat, Gujarat, India.",
  keywords: [
    "3D Laser Marking Machine",
    "3D Fiber Laser Marking Machine",
    "Curved Surface Laser Marking Machine",
    "Dynamic Focus Laser Marking Machine",
    "3D Laser Coding Machine",
    "Laser Marking Machine for Curved Parts",
    "3D Laser Marking Machine Manufacturer",
  ],
};

export default function Dmarking() {
  return (
    <div>
      <Commonherobanner
        title="3D Laser Marking Machine "
        subtitle="Paratech Industries"
        bgImage={common}
      />

      <Dmarkingsection />
    </div>
  );
}
