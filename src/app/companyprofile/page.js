import Commonherobanner from "@/components/commonherobanner";
import React from "react";
import common from "@/assests/images/common.jpg";
import Contactsection from "@/components/contactsection";
import Companyprofilesection from "@/components/companyprofilesection";
import ScrollToTop from "@/common/ScrollToTop";

export const metadata = {
  title: "Company Profile | Laser Machine Manufacturer in India | Paratech",
  description:
    "Explore Paratech Industries' company profile, manufacturing capabilities, product expertise and industrial laser solutions.",
  keywords: [
    "laser machine manufacturer in India",
    "Company Profile Paratech Industries",
    "manufacturing capabilities",
    "product expertise",
    "industrial laser solutions",
  ],
  alternates: {
    canonical: "https://paratechindustries.com/companyprofile",
  },
  openGraph: {
    title: "Company Profile | Laser Machine Manufacturer in India | Paratech",
    description:
      "Explore Paratech Industries' company profile, manufacturing capabilities, product expertise and industrial laser solutions.",
    url: "https://paratechindustries.com/companyprofile",
    siteName: "Paratech Industries",
    type: "website",
  },
};

export default function Companyprofile() {
  return (
    <>
      <ScrollToTop />
      <Commonherobanner
        title="Company Profile "
        subtitle="Paratech Industries"
        bgImage={common}
      />
      <Companyprofilesection />
      <Contactsection />
    </>
  );
}
