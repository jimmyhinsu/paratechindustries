import Commonherobanner from "@/components/commonherobanner";
import React from "react";
import common from "@/assests/images/common.jpg";
import Industriessection from "@/components/industriessection";
import ScrollToTop from "@/common/ScrollToTop";

export const metadata = {
  title: "Industries We Serve | Laser Machinery Applications",
  description:
    "Explore the diverse industries served by Paratech Industries laser machinery, including jewellery, automotive, electronics, medical, utensils, and manufacturing.",
  alternates: {
    canonical: "https://paratechindustries.com/industriesweserve",
  },
};

export default function Industriesweserve() {
  return (
    <>
      <ScrollToTop />
      <Commonherobanner
        title="Industries We Serve"
        subtitle="precision, passion, and performance."
        bgImage={common}
      />
      <Industriessection />
    </>
  );
}
