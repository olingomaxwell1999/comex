import Head from "next/head";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import WhatsAppButton from "./components/WhatsAppButton";

export const metadata = {
  title: "Comex Homes",
  description:
    "Our Properties are stategically situated in prime locations in Nairobi With the state of the art, convinience and ultra luxurious amenities. Choose from our spetacular range of Iconic Properties starting from 2.2M.",
};

export default function RootLayout({ children }) {
  let GTM_ID = "GTM-K7LLRMZP";

  return (
    <html lang="en">
      <Head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GTM_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        {/* Start of HubSpot Embed Code */}
        <script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js-eu1.hs-scripts.com/25735940.js"
        />
        {/* End of HubSpot Embed Code */}
      </Head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5J274L6"
            height="0"
            width="0"
          ></iframe>
        </noscript>
        <Navbar />
        {children}
        <WhatsAppButton />
        <Footer />
      </body>
    </html>
  );
}
