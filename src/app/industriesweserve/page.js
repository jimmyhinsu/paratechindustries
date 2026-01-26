"use client";
import Commonherobanner from "@/components/commonherobanner";
import React, { useEffect } from "react";
import common from "@/assests/images/common.jpg";
import Industriessection from "@/components/industriessection";

export default function Industriesweserve() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Commonherobanner
        title="Industries We Serve"
        subtitle="precision, passion, and performance."
        bgImage={common}
      />

      <Industriessection />
    </>
  );
}
