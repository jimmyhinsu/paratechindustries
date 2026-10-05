import Aboutsection from "@/components/aboutsection";
import Contactsection from "@/components/contactsection";
import Feature from "@/components/feature";
import Herobanner from "@/components/herobanner";
import Increaser from "@/components/increaser";
import Ourservices from "@/components/ourservices";
import WhyParatech from "@/components/whyparatech";
import HomeIndustries from "@/components/homeindustries";
import Review from "@/components/review";
import OurClients from "@/components/ourclients";
import FAQ from "@/components/faq";
import { laserFaqData } from "@/data/faqs";
import ScrollToTop from "@/common/ScrollToTop";

export const metadata = {
  title: "Laser Machine Manufacturer in Surat, India",
  description:
    "Paratech Industries is a laser machine manufacturer in India with 10+ years of experience in fiber laser marking, cutting, engraving and welding machines.",
  keywords: [
    "industrial laser machine manufacturer in India",
    "laser machine manufacturer in India",
    "fiber laser marking machine",
    "laser cutting machine manufacturer Surat",
    "Paratech Industries",
  ],
  alternates: {
    canonical: "https://paratechindustries.com/",
  },
  openGraph: {
    title: "Laser Machine Manufacturer in Surat, India",
    description:
      "Paratech Industries is a laser machine manufacturer in India with 10+ years of experience in fiber laser marking, cutting, engraving and welding machines.",
    url: "https://paratechindustries.com/",
    siteName: "Paratech Industries",
    type: "website",
  },
};

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: laserFaqData.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Paratech Industries",
    url: "https://paratechindustries.com/",
    logo: "https://paratechindustries.com/images/paratechlogo.png",
    description:
      "Manufacturer and exporter of fiber, CO2 and UV laser marking, cutting, welding and engraving machines, based in Surat, Gujarat, India.",
    foundingDate: "2014",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Plot No 6, Soma Kanji Ni Wadi, Near Savera Complex, Khatodara GIDC",
      addressLocality: "Surat",
      addressRegion: "Gujarat",
      postalCode: "395002",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9879533323",
      contactType: "sales",
      areaServed: "IN",
      email: "info@paratechindustries.com",
    },
    sameAs: [],
  };

  return (
    <>
      <ScrollToTop />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <Herobanner />
      <Aboutsection />
      <Ourservices />
      <Increaser />
      <Feature />
      <WhyParatech />
      <HomeIndustries />
      <Review />
      <OurClients />
      <FAQ />
      <Contactsection />
    </>
  );
}
