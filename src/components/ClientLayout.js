"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Header from "@/common/header";
import Footer from "@/common/footer";
import Whatsappbubble from "@/components/whatsappbubble";
import Callbubble from "@/components/callbubble";
import Mailbubble from "@/components/mainlbubble";
import Cataloguebubble from "@/components/cataloguebubble";

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
      <Footer />
    </>
  );
}
