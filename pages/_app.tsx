/* eslint-disable @next/next/no-html-link-for-pages */
import { AppProps /* , AppContext */ } from 'next/app';

import 'styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <div className="w-screen min-h-screen bg-white dark:text-gray-50 dark:bg-slate-900">
      <div className="fixed right-0 hidden p-3 lg:flex bottom-24">
        <a
          href="https://kamfeskaya.com"
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-2 text-sm font-medium bg-gray-100 border-2 rounded-lg dark:text-gray-50 text-slate-800 dark:border-gray-700 dark:bg-slate-800"
        >
          Kamfeskaya Ecosystem
        </a>
      </div>
      <Component {...pageProps} />
    </div>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// App.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default App;
