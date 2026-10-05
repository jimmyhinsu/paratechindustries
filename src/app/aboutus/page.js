import Commonherobanner from "@/components/commonherobanner";
import React from "react";
import common from "@/assests/images/common.jpg";
import Contactsection from "@/components/contactsection";
import Missionvision from "@/components/missionvision";
import Whychoose from "@/components/whychoose";
import Aboutsection from "@/components/aboutsection";
import ScrollToTop from "@/common/ScrollToTop";

export const metadata = {
  title: "About Paratech Industries | Laser Machine Manufacturer in India",
  description:
    "Learn about Paratech Industries, a laser machine manufacturer in India offering marking, cutting, engraving, welding and industrial laser solutions.",
  keywords: [
    "laser machine manufacturer",
    "about Paratech Industries",
    "laser machine manufacturer in India",
    "industrial laser solutions",
    "laser machinery Gujarat",
  ],
  alternates: {
    canonical: "https://paratechindustries.com/aboutus",
  },
  openGraph: {
    title: "About Paratech Industries | Laser Machine Manufacturer in India",
    description:
      "Learn about Paratech Industries, a laser machine manufacturer in India offering marking, cutting, engraving, welding and industrial laser solutions.",
    url: "https://paratechindustries.com/aboutus",
    siteName: "Paratech Industries",
    type: "website",
  },
};

export default function Aboutus() {
  return (
    <>
      <ScrollToTop />
      <Commonherobanner
        title="About Paratech Industries"
        subtitle="Laser Machine Manufacturer, Surat"
        bgImage={common}
      />
      <Aboutsection />
      <Missionvision />
      <Whychoose />
      <Contactsection />
    </>
  );
}
