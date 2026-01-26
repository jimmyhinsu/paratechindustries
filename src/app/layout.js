import Header from "@/common/header";
import "./globals.css";
import Footer from "@/common/footer";
import { AuthProvider } from "@/common/AuthProvider";
import Whatsappbubble from "@/components/whatsappbubble";
import Callbubble from "@/components/callbubble";
import Mailbubble from "@/components/mainlbubble";
import Cataloguebubble from "@/components/cataloguebubble";

export const metadata = {
  title: "Paratech Industries in Surat",
  description:
    "Leading Laser Soldering Machine Manufacturer and Exporter, offering high-precision laser spot soldering machines designed for durability, accuracy, and superior performance for industrial applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        ></link>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <AuthProvider>
          <Header />
          <main className="layout">{children}</main>
          <Callbubble />
          <Whatsappbubble />
          <Mailbubble />
          <Cataloguebubble />
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
