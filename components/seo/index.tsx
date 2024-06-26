import Head from 'next/head';
import { ReactNode } from 'react';

export default function SEO({ pageTitle }: { pageTitle: ReactNode }) {
  return (
    <nav>
      <Head>
        <title>{pageTitle} | Zicheni</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta
          name="description"
          content="Get actionable projections about how much money you will make and how much money you will lose if you use a given SaaS pricing model"
        />
        <meta name="author" content="Kamfeskaya" />
        <meta name="keywords" content="Keywords" />

        {/* Android */}
        <meta name="mobile-web-app-capable" content="yes" />

        {/* iOS */}
        <meta name="apple-mobile-web-app-title" content="Application Title" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />

        {/* Windows  */}
        <meta name="msapplication-TileImage" content="ms-icon-144x144.png" />
        <meta name="msapplication-config" content="browserconfig.xml" />

        {/* Pinned Sites  */}
        <meta name="application-name" content="Application Name" />
        <meta name="msapplication-tooltip" content="Tooltip Text" />
        <meta name="msapplication-starturl" content="/" />

        {/* Tap highlighting  */}
        <meta name="msapplication-tap-highlight" content="no" />

        {/* UC Mobile Browser  */}
        <meta name="full-screen" content="yes" />
        <meta name="browsermode" content="application" />

        {/* Disable night mode for this page  */}
        <meta name="nightmode" content="enable/disable" />

        {/* Fitscreen  */}
        {/* <meta name="viewport" content="uc-fitscreen=yes" /> */}

        {/* Layout mode */}
        <meta name="layoutmode" content="fitscreen/standard" />

        {/* imagemode - show image even in text only mode  */}
        <meta name="imagemode" content="force" />

        {/* Orientation  */}
        <meta name="screen-orientation" content="portrait" />

        {/*  Main Link Tags  */}
        {/* <link href="favicon-16.png" rel="icon" type="image/png" sizes="16x16" />
        <link href="favicon-32.png" rel="icon" type="image/png" sizes="32x32" />
        <link href="favicon-48.png" rel="icon" type="image/png" sizes="48x48" /> */}

        {/*  iOS  */}
        {/* <link href="touch-icon-iphone.png" rel="apple-touch-icon" />
        <link href="touch-icon-ipad.png" rel="apple-touch-icon" sizes="76x76" />
        <link href="touch-icon-iphone-retina.png" rel="apple-touch-icon" sizes="120x120" />
        <link href="touch-icon-ipad-retina.png" rel="apple-touch-icon" sizes="152x152" /> */}

        {/*  Startup Image  */}
        {/* <link href="touch-icon-start-up-320x480.png" rel="apple-touch-startup-image" /> */}

        {/*  Pinned Tab  */}
        {/* <link href="path/to/icon.svg" rel="mask-icon" sizes="any" color="red" /> */}

        {/*  Android  */}
        <link href="icons/icon-192x192.png" rel="icon" sizes="192x192" />
        {/* <link href="icons/icon-128x128.png" rel="icon" sizes="128x128" /> */}

        {/*  Others */}
        <link href="favicon.ico" rel="shortcut icon" type="image/x-icon" />

        {/*  UC Browser  */}
        {/* <link href="images/icon-52x52.png" rel="apple-touch-icon-precomposed" sizes="57x57" />
        <link href="images/icon-72x72.png" rel="apple-touch-icon" sizes="72x72" /> */}

        {/*  Manifest.json  */}
        <link href="manifest.json" rel="manifest" />
        <meta property="og:image" content="/popgraph.png" />
        <meta property="og:url" content="https://telescope.kamfeskaya.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="SaaS Pricing Calculator | Telescope"
        />
        <meta
          property="og:description"
          content="Get actionable projections about how much money you will make and how much money you will lose if you use a given SaaS pricing model"
        />
        <meta
          property="og:image"
          content="https://telescope.kamfeskaya.com/popgraph.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="telescope.kamfeskaya.com" />
        <meta
          property="twitter:url"
          content="https://telescope.kamfeskaya.com/"
        />
        <meta
          name="twitter:title"
          content="SaaS Pricing Calculator | Telescope"
        />
        <meta
          name="twitter:description"
          content="Get actionable projections about how much money you will make and how much money you will lose if you use a given SaaS pricing model"
        />
        <meta
          name="twitter:image"
          content="https://telescope.kamfeskaya.com/popgraph.png"
        />
      </Head>
    </nav>
  );
}
