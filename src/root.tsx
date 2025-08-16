import { component$ } from "@qwik.dev/core";
import { QwikRouterProvider, RouterOutlet, ServiceWorkerRegister } from "@qwik.dev/router";
import { RouterHead } from "./components/router-head/router-head";
import { QwikPartytown } from "./components/partytown/partytown";
import { GTAG } from "./config/constants";

import "./global.css";

export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikRouterProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <QwikPartytown forward={["gtag", "dataLayer.push"]} />
        <script
          type="text/partytown"
          dangerouslySetInnerHTML={`
          window.dataLayer = window.dataLayer || [];
          window.gtag = function() {
            dataLayer.push(arguments);
          }
          gtag('js', new Date());
          gtag('config', '${GTAG}');
          `}
        />
        <script async type="text/partytown" src={`https://www.googletagmanager.com/gtag/js?id=${GTAG}`} />
        <RouterHead />
      </head>
      <body lang="en">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikRouterProvider>
  );
});
