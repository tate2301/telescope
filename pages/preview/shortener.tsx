import Footer from 'components/footer';
import SEO from 'components/seo';
import ShortURLCard from 'components/url-shortener/ShortURLCard';
import GradientPageBackground from 'components/utils/GradientPageBackground';

export default function Shortener() {
  return (
    <>
      <GradientPageBackground className="twizard-bg" />

      <div className="container relative flex flex-col items-center justify-center max-w-3xl min-h-screen px-2 py-0 mx-auto subpixel-antialiased font-normal">
        <SEO pageTitle={'URL Shortener'} />
        <main className="flex flex-col flex-1 w-full gap-16 px-4 pt-16 overflow-x-hidden">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl">URL Plastic Surgery</h1>
            <p>
              This tool allows you to create beautiful AKA short urls. New URLs
              will be stored for 72 hours and then automatically deleted. You
              can sign in if you want to &qout;permanently&qout; store your
              URLs.
            </p>
          </div>
          <div className="flex gap-2">
            <input
              className="input input-filled"
              placeholder="Enter your url"
              name="url"
              required
            />
            <button className="btn btn-action">Kaboom</button>
          </div>
          <div className="flex flex-col gap-8 ">
            <h2 className="text-xl">Recent patients(URLs)</h2>
            <ShortURLCard
              title={'Stripe - Online Payments Platform'}
              short_url={'https://zicheni.io/stripe/8s9bn23'}
              url={
                'https://stripe.com/sessions/2021/09/20/online-payments-stuff'
              }
            />
            <ShortURLCard
              title={'Tatenda Chinyamakobvu - Product designer & Developer'}
              short_url={'https://zicheni.io/kamfes/2yh9d28nf829'}
              url={'https://kamfeskaya.com/projects/paynow-react'}
            />
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
