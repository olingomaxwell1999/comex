import dynamic from "next/dynamic";
import Head from "next/head";
import "./globals.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Process from "./components/Process";
import Properties from "./components/Properties";
import MapComponent from "./components/MapComponent";
import Getproperty from "./components/Getproperty";
import Whycomex from "./components/Whycomex";
import Contactus from "./components/Contactus";
import PopupModal from "./components/PopupModal";
const Homebanner = dynamic(() => import("./components/Homebanner"), {
  ssr: false,
});
const Cover = dynamic(() => import("./components/Cover"), { ssr: false });
const Covertwo = dynamic(() => import("./components/Covertwo"), { ssr: false });
const Revealarea = dynamic(() => import("./components/Revealarea"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Comex Homes</title>
        <meta
          name="description"
          content="The official balozi suites is an area of residence ready to be bought. Here you will find all the information you need."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              function loadScript(a){var b=document.getElementsByTagName("head")[0],c=document.createElement("script");c.type="text/javascript",c.src="https://tracker.metricool.com/resources/be.js",c.onreadystatechange=a,c.onload=a,b.appendChild(c)}loadScript(function(){beTracker.t({hash:"fa199c8d48c8cf04b58c065d5c96587b"})});
            `,
          }}
        ></script>

        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              var $zoho=$zoho || {};
              $zoho.salesiq = $zoho.salesiq || {widgetcode: "e9d202d9e744bd817759ea6dab3438a3be85a8fdad626057265123f3d5af7add1e873f1fea789d2454eec55d29ee6f4e", values:{},ready:function(){}};
              var d=document;
              s=d.createElement("script");
              s.type="text/javascript";
              s.id="zsiqscript";
              s.defer=true;
              s.src="https://salesiq.zoho.com/widget";
              t=d.getElementsByTagName("script")[0];
              t.parentNode.insertBefore(s,t);
            `,
          }}
        />

        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-5J274L6');
            `,
          }}
        ></script> */}
      </Head>

      <PopupModal />
      <Homebanner />
      <Getproperty />
      <Covertwo />
      <Revealarea />
      <Properties />
      <Whycomex />
      {/* <Process /> */}
      <Cover />
      <MapComponent />
      <Contactus />
    </>
  );
}
