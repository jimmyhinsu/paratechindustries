"use client";
import React, { useEffect } from "react";
import contact from "@/assests/images/bg.jpg";
import Commonherobanner from "@/components/commonherobanner";
import Contactsection from "@/components/contactsection";
import common from "@/assests/images/common.jpg";

export default function Products() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  
  return (
    <>
      <Commonherobanner
        title="Provides beauty"
        subtitle="Crafted Solutions For Your Needs."
        bgImage={common}
      />
      <Contactsection />
    </>
  );
}
