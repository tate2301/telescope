import Footer from 'components/footer';
import { PublicNavbar } from 'components/navbar';
import SEO from 'components/seo';
import GradientPageBackground from 'components/utils/GradientPageBackground';
import Link from 'next/link';

export default function Main() {
  return (
    <>
      <GradientPageBackground className="main-bg" />
      <PublicNavbar />
      <div className="container relative flex flex-col max-w-screen-md px-4 py-0 mx-auto antialiased font-normal md:px-8">
        <SEO pageTitle={'Startup building in a box'} />
        <main className="flex flex-col w-full gap-16 py-8 md:py-12">
          <div className="flex flex-col w-full gap-2">
            <h1 className="text-3xl font-semibold">
              The most complete toolkit for building startups
            </h1>
            <p>
              Built to help you build the next tech unicorn. Zicheni is a
              toolkit for developers and entepreneurs building SaaS products
              focusing on cutting the total time to market and removing the
              guesswork.
            </p>
          </div>
          <div className="flex flex-col w-full gap-2">
            <h2 className="text-xl font-semibold">
              Everything you need, in one place
            </h2>
            <p className="px-4">
              <ul className="list-disc">
                <li>
                  Powerful revenue projections for subscription pricing models
                </li>
                <li>
                  Generate datasets for user simulations, powered by Faker
                </li>
                <li>
                  Build your app with datasets exported as JSON, CSV or consume
                  from the REST endpoint
                </li>
                <li>Export revenue projections as PDF or HTML</li>
              </ul>
            </p>
          </div>
          <div className="flex flex-col w-full gap-2">
            <h2 className="text-xl font-semibold">Built for everyone</h2>
            <p>
              The tools you will find here were built for my personal use before
              I decided to share them. More tools and features will be added but
              this project is not the highest of my priorities currently, so
              everything is given as is, and you&#39;re free to use them as you
              may see fit.
            </p>
            <p>
              The project is open source, if you would like to contribute, you
              can{' '}
              <Link href={'mailto:tatendachris@gmail.com'}>
                <a className="font-semibold underline">send me a message</a>
              </Link>{' '}
              (and thanks you awesome person). You can also skip the chat and
              just head over to GitHub and send in your PR or issues{' '}
              <Link href={'https://github.com/tate2301/zichenidotio'}>
                <a className="font-semibold underline">here</a>
              </Link>{' '}
              (make sure to read the guidelines please. LOL.)
            </p>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
