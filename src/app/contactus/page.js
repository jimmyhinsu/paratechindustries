"use client";
import Commonherobanner from "@/components/commonherobanner";
import Contactform from "@/components/contactform";
import Contactinfo from "@/components/contactinfo";
import React, { useEffect } from "react";

export default function Contactus() {
    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
  return (
    <>
      <Commonherobanner
        title="Contact Us"
        subtitle="Solutions That Fit You."
        bgImage="/images/contactbg.jpg"
      />
      <Contactinfo />
      <Contactform />
    </>
  );
}
