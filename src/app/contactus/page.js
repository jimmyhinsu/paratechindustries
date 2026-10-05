import Commonherobanner from "@/components/commonherobanner";
import Contactform from "@/components/contactform";
import Contactinfo from "@/components/contactinfo";
import React from "react";
import ScrollToTop from "@/common/ScrollToTop";

export const metadata = {
  title: "Contact Us | Laser Machine Manufacturer in Surat, India",
  description:
    "Get in touch with Paratech Industries for high precision fiber laser marking, cutting, and welding machinery inquiries, quotes, and customer support in Surat, India.",
  alternates: {
    canonical: "https://paratechindustries.com/contactus",
  },
};

export default function Contactus() {
  return (
    <>
      <ScrollToTop />
      <Commonherobanner
        title="Contact Paratech Industries "
        subtitle="Get a Quote Today"
        bgImage="/images/contactbg.jpg"
      />
      <Contactinfo />
      <Contactform />
    </>
  );
}
