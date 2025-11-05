import type { Metadata } from "next";
import Script from "next/script";
import {
  Manrope,
  Space_Grotesk,
  Urbanist,
  Vazirmatn,
} from "next/font/google";
import "./globals.css";

// Fonts
const urbanist = Urbanist({ subsets: ["latin"], variable: "--font-urbanist" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });
const vazirmatn = Vazirmatn({ subsets: ["latin"], variable: "--font-vazir" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

// SEO Metadata
export const metadata: Metadata = {
  title: "Zyphon",
  description: "Professional Apple device repair with doorstep service.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts (extra) */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />

        {/* Google Tag Manager */}
        <Script id="gtm-init" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),
                  dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-M8VDCDRP');
          `}
        </Script>

        {/* Google Ads / GA4 Tag */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17631803811"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17631803811');
            gtag('config', 'G-KMLF8XJZ9T');
          `}
        </Script>
      </head>

      <body
        className={`${urbanist.variable} ${spaceGrotesk.variable} ${vazirmatn.variable} ${manrope.variable} antialiased`}
      >
        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M8VDCDRP"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {children}
      </body>
    </html>
  );
}
