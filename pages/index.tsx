import Footer from 'components/footer';
import { PublicNavbar } from 'components/navbar';
import SEO from 'components/seo';
import Link from 'next/link';

export default function Main() {
  return (
    <>
      <PublicNavbar />
      <div className="container relative flex flex-col max-w-screen-md px-4 py-0 mx-auto antialiased font-normal md:px-8">
        <SEO pageTitle={'Startup building in a box'} />
        <main className="flex flex-col w-full gap-16 py-8 md:py-12">
          <div className="flex flex-col w-full gap-2">
            <h2 className="mb-6 text-lg font-semibold">Inventory</h2>
            <div className="grid grid-cols-2 gap-6">
              <ArsenalCard
                description="Powerful revenue projections for subscription pricing models"
                title="SaaS revenue"
                link="/preview/telescope"
                actionText="Launch projections"
              />
              <ArsenalCard
                description="Example implementation of a finite state machine in React"
                title="React Stopwatch"
                link="https://github.com/tate2301/react-stopwatch"
                actionText="View on GitHub"
              />
              <ArsenalCard
                description="Example implementation of a trustless EVM bridge between BSC and ETH"
                title="EVM Bridge"
                link="https://github.com/tate2301/react-paynow"
                actionText="View on GitHub"
              />
              <ArsenalCard
                description="Accept online payments with Paynow without a dedicated backend"
                title="React Paynow SDK"
                link="https://github.com/tate2301/react-paynow"
                actionText="View on GitHub"
              />
              <ArsenalCard
                description="Send your customers a SMS with an alphanumeric sender ID"
                title="Chromastone"
                link="https://github.com/tate2301/react-paynow"
                actionText="View on GitHub"
              />
              <ArsenalCard
                description="Ready made Figma components for designing calendar apps"
                title="Datezilla"
                link="https://github.com/tate2301/react-paynow"
                actionText="View on Figma"
                comingSoon={true}
              />
            </div>
          </div>
          <div className="flex flex-col w-full gap-2">
            <h2 className="font-semibold">Built for everyone</h2>
            <p>
              The tools you will find here are built in the order of my personal
              interests. More tools and features will be added but this project
              is not the highest of my priorities currently, so everything is
              given as is, and you&#39;re free to use them as you may see fit.
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

function ArsenalCard({
  title,
  description,
  link,
  actionText,
  comingSoon,
}: {
  title: string;
  description: string;
  link: string;
  actionText: string;
  comingSoon?: boolean;
}) {
  return (
    <div className="col-span-1 p-4 rounded-2xl bg-white/50">
      <div className="h-[80px] mb-6"></div>
      <h3 className="font-semibold">{title}</h3>
      <p className="mb-4">{description}</p>
      {!comingSoon && (
        <Link href={link}>
          <a className="bg-zinc-900/10 px-4 h-[36px] rounded-xl flex items-center w-fit">
            {actionText}
          </a>
        </Link>
      )}
      {comingSoon && (
        <p className="bg-zinc-900/5 px-4 h-[36px] rounded-xl flex items-center w-fit font-semibold text-zinc-400">
          Coming soon
        </p>
      )}
    </div>
  );
}
