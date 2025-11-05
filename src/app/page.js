"use client";
import Aboutsection from "@/components/aboutsection";
import Contactsection from "@/components/contactsection";
import Herobanner from "@/components/herobanner";
import Increaser from "@/components/increaser";
import Ourservices from "@/components/ourservices";
import Review from "@/components/review";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <Herobanner />
      <Aboutsection />
      <Ourservices />
      <Increaser />
      <Review />
      <Contactsection />
    </>
  );
}
