import Commonherobanner from "@/components/commonherobanner";
import React from "react";
import contact from "@/assests/images/bg.jpg";
import Contactsection from "@/components/contactsection";
import Companyprofilesection from "@/components/companyprofilesection";

export default function Companyprofile() {
  return (
    <>
      <Commonherobanner
        title="Company Profile"
        subtitle="Crafted Solutions For Your Needs."
        bgImage={contact}
      />
      <Companyprofilesection />
      <Contactsection />
    </>
  );
}
