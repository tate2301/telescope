import Calculator from 'components/calculator';
import Footer from 'components/footer';
import SEO from 'components/seo';

export default function Telescope() {
  return (
    <>
      <div className="container relative flex flex-col items-center justify-center max-w-3xl min-h-screen px-4 py-0 mx-auto subpixel-antialiased font-normal">
        <SEO pageTitle={'Estimate my revenue'} />
        <main className="flex flex-col flex-1 w-full px-0 pt-8 pb-20 overflow-x-hidden">
          <Calculator />
        </main>
      </div>
      <Footer />
    </>
  );
}
