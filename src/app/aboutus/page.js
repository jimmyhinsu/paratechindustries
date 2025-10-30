import Commonherobanner from "@/components/commonherobanner";
import React from "react";
import contact from "@/assests/images/bg.jpg";
import Contactsection from "@/components/contactsection";
import Missionvision from "@/components/missionvision";
import Whychoose from "@/components/whychoose";
import Aboutsection from "@/components/aboutsection";

export default function Aboutus() {
  return (
    <>
      <Commonherobanner
        title="Provides beauty"
        subtitle="Crafted Solutions For Your Needs."
        bgImage={contact}
      />
      <Aboutsection />
      <Missionvision />
      <Whychoose />
      <Contactsection />
    </>
  );
}
