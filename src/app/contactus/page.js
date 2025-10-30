import Commonherobanner from "@/components/commonherobanner";
import Contactform from "@/components/contactform";
import Contactinfo from "@/components/contactinfo";
import React from "react";

export default function Contactus() {
  return (
    <>
      <Commonherobanner
        title="Contact Us"
        subtitle="Crafted Solutions For Your Needs."
        bgImage="/images/contactbg.jpg"
      />
      <Contactinfo />
      <Contactform />
    </>
  );
}
