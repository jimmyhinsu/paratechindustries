import "./globals.css";
import { AuthProvider } from "@/common/AuthProvider";
import ClientLayout from "@/components/ClientLayout";

export const metadata = {
  title: "Paratech Industries in Surat",
  description:
    "Leading Laser Soldering Machine Manufacturer and Exporter, offering high-precision laser spot soldering machines...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title>Paratech Industries in Surat</title>
      <head>
        <meta name="google-site-verification" content="e-90jYd2uPXF1AxE6fsRs24720yY_xQlQYI-pwUhmXM" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-B8KSCQ347V"></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-B8KSCQ347V');`}
        </script>
        <script>
          {`(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "x8fa5s5s75");`}
        </script>
        <link rel="canonical" href="https://paratechindustries.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        ></link>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <AuthProvider>
          <ClientLayout>{children}</ClientLayout>
        </AuthProvider>
      </body>
    </html>
  );
}
