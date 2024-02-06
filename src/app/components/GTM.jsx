// components/GTM.js
import React from "react";

const GTM = () => (
  <>
    {/* Google Tag Manager */}
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function(w,d,s,l,i){
            w[l]=w[l]||[];
            w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-K7LLRMZP');
        `,
      }}
    ></script>
    {/* End Google Tag Manager */}
    {/* Google Tag Manager (noscript) */}
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=GTM-K7LLRMZP`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
      ></iframe>
    </noscript>
    {/* End Google Tag Manager (noscript) */}
  </>
);

export default GTM;
