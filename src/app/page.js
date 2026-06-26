"use client";
import Aboutsection from "@/components/aboutsection";
import Contactsection from "@/components/contactsection";
import Feature from "@/components/feature";
import Herobanner from "@/components/herobanner";
import Increaser from "@/components/increaser";
import Ourservices from "@/components/ourservices";
import Review from "@/components/review";
import FAQ from "@/components/faq";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Paratech Industries",
            "url": "https://paratechindustries.com/",
            "logo": "https://paratechindustries.com/.../paratechlogo.png",
            "description": "Manufacturer and exporter of fiber, CO2 and UV laser marking, cutting, welding and engraving machines, based in Surat, Gujarat, India.",
            "foundingDate": "2014",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Plot No 6, Soma Kanji Ni Wadi, Near Savera Complex, Khatodara GIDC",
              "addressLocality": "Surat",
              "addressRegion": "Gujarat",
              "postalCode": "395002",
              "addressCountry": "IN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-9879533323",
              "contactType": "sales",
              "areaServed": "IN",
              "email": "info@paratechindustries.com"
            },
            "sameAs": []
          })
        }}
      />
      <Herobanner />
      <Aboutsection />
      <Ourservices />
      <Increaser />
      <Feature />
      <Review />
      <FAQ />
      <Contactsection />
    </>
  );
}
