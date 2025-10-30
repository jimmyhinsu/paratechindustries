import React from "react";
import contact from "@/assests/images/bg.jpg";
import Commonherobanner from "@/components/commonherobanner";
import Contactsection from "@/components/contactsection";

export default function Products() {
  return (
    <>
      <Commonherobanner
        title="Provides beauty"
        subtitle="Crafted Solutions For Your Needs."
        bgImage={contact}
      />
      <Contactsection />
    </>
  );
}
