"use client";
import Commonherobanner from "@/components/commonherobanner";
import React, { useEffect } from "react";
import common from "@/assests/images/common.jpg";
import Contactsection from "@/components/contactsection";
import Companyprofilesection from "@/components/companyprofilesection";

export default function Companyprofile() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Commonherobanner
        title="Company Profile"
        subtitle="Engineering Excellence. Always."
        bgImage={common}
      />
      <Companyprofilesection />
      <Contactsection />
    </>
  );
}
