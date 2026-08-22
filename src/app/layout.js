import "./globals.css";
import { AuthProvider } from "@/common/AuthProvider";
import ClientLayout from "@/components/ClientLayout";
import { Roboto } from "next/font/google";
import Script from "next/script";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata = {
  title: "Laser Marking & Cutting Machine Manufacturer in India | Paratech Industries",
  description:
    "Looking for reliable laser machines? Paratech Industries offers fiber laser marking, cutting, welding, UV laser, CO2 laser, and customized industrial laser solutions across India.",
  verification: {
    google: "e-90jYd2uPXF1AxE6fsRs24720yY_xQlQYI-pwUhmXM",
  },
  alternates: {
    canonical: "https://paratechindustries.com",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${roboto.variable} ${roboto.className}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <AuthProvider>
          <ClientLayout>{children}</ClientLayout>
        </AuthProvider>

        {/* Deferred Analytics Scripts */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-B8KSCQ347V"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-B8KSCQ347V');
          `}
        </Script>
        <Script id="clarity-analytics" strategy="lazyOnload">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "x8fa5s5s75");
          `}
        </Script>
      </body>
    </html>
  );
}
