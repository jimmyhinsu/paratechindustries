"use client";
import Commonherobanner from "@/components/commonherobanner";
import React, { useEffect } from "react";
import common from "@/assests/images/common.jpg";
import Contactsection from "@/components/contactsection";
import Missionvision from "@/components/missionvision";
import Whychoose from "@/components/whychoose";
import Aboutsection from "@/components/aboutsection";

export default function Aboutus() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Commonherobanner
        title="About Us"
        subtitle="precision, passion, and performance."
        bgImage={common}
      />
      <Aboutsection />
      <Missionvision />
      <Whychoose />
      <Contactsection />
    </>
  );
}
