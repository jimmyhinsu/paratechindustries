"use client";
import React from "react";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import Header from "@/common/header";
import Footer from "@/common/footer";

const Whatsappbubble = dynamic(() => import("@/components/whatsappbubble"), { ssr: false });
const Callbubble = dynamic(() => import("@/components/callbubble"), { ssr: false });
const Mailbubble = dynamic(() => import("@/components/mainlbubble"), { ssr: false });
const Cataloguebubble = dynamic(() => import("@/components/cataloguebubble"), { ssr: false });
const WelcomeModal = dynamic(() => import("@/components/WelcomeModal"), { ssr: false });

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const isAdmin = pathname ? pathname.startsWith("/admin") : false;

  if (isAdmin) {
    return <main>{children}</main>;
  }

  return (
    <>
      <Header />
      <main className="layout">{children}</main>
      <Callbubble />
      <Whatsappbubble />
      <Mailbubble />
      <Cataloguebubble />
      <WelcomeModal />
      <Footer />
    </>
  );
}
