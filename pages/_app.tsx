import { AppProps /* , AppContext */ } from 'next/app';

import 'styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <div className="relative min-h-screen dark:text-gray-50">
      <Component {...pageProps} />
    </div>
  );
}

export default App;
