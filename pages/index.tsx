import Footer from 'components/footer';
import SEO from 'components/seo';
import Link from 'next/link';

export default function Main() {
  return (
    <>
      <SEO pageTitle={'Startup building in a box'} />
      <main className="container relative flex flex-col max-w-screen-md px-4 py-0 mx-auto mb-24 antialiased font-normal md:px-8">
        <div className="flex flex-col w-full gap-2">
          <div className="mx-auto mb-8 text-center w-fit">
            <h2 className="mb-1 text-2xl font-semibold">
              Given with love from us
            </h2>
            <p className="max-w-sm text-zinc-600">
              Whatever you find here is free to use, forever. Trust me, we will
              never say otherwise.
            </p>
          </div>
          <div className="grid grid-cols-2 border-b border-r divide-x divide-y inventory-grid border-zinc-400/20 divide-zinc-400/20">
            <ArsenalCard
              description="Powerful revenue projections for subscription pricing models"
              title="SaaS revenue"
              link="/preview/telescope"
              actionText="Launch app"
              category="production"
            />
            <ArsenalCard
              description="Example implementation of a finite state machine in React"
              title="React Stopwatch"
              link="https://github.com/tate2301/react-stopwatch"
              actionText="View on GitHub"
              category="github"
            />
            <ArsenalCard
              description="Example implementation of a trustless EVM bridge between BSC and ETH"
              title="EVM Bridge"
              link="https://github.com/tate2301/react-paynow"
              actionText="View on GitHub"
              category="github"
            />
            <ArsenalCard
              description="Accept online payments with Paynow without a dedicated backend"
              title="React Paynow SDK"
              link="https://github.com/tate2301/react-paynow"
              actionText="View on GitHub"
              category="github"
            />
            <ArsenalCard
              description="Send your customers a SMS with an alphanumeric sender ID"
              title="Chromastone"
              link="https://github.com/tate2301/react-paynow"
              actionText="View on GitHub"
              category="github"
            />
            <ArsenalCard
              description="Ready made Figma components for designing calendar apps"
              title="Datezilla"
              link="https://github.com/tate2301/react-paynow"
              actionText="View on Figma"
              comingSoon={true}
              category="external"
            />
            <div className="col-span-2">
              <ArsenalHighlightCard
                title="Developer Index"
                description="Find and connect with other developers in Zimbabwe"
                actionText="Go to the website"
                link="https://developerindex.xyz"
                waitlist
                comingSoon
              />
            </div>
          </div>
        </div>
      </main>

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
  category?: 'github' | 'production' | 'external';
}) {
  return (
    <div className="col-span-1 p-6 bg-white/20 border-zinc-400/20">
      <div className="h-[80px] mb-6"></div>
      <h3 className="font-semibold">{title}</h3>
      <p className="mb-4">{description}</p>
      {!comingSoon && (
        <Link href={link}>
          <a className="bg-zinc-900/5 px-4 h-[36px] rounded-xl flex items-center w-fit text-zinc-900">
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

function ArsenalHighlightCard({
  title,
  description,
  link,
  actionText,
  comingSoon,
  waitlist,
}: {
  title: string;
  description: string;
  link: string;
  actionText: string;
  comingSoon?: boolean;
  waitlist?: boolean;
}) {
  return (
    <div className="col-span-2 p-4 bg-white/20">
      <div className="h-[80px] mb-6"></div>
      <h3 className="font-semibold">{title}</h3>
      {comingSoon && (
        <p className="mb-2 text-sm font-medium text-zinc-500">
          Launching in July
        </p>
      )}

      <p className="mb-6">{description}</p>
      {!comingSoon && (
        <Link href={link}>
          <a className="bg-zinc-900/5 px-4 h-[36px] rounded-xl flex items-center w-fit">
            {actionText}
          </a>
        </Link>
      )}
      {comingSoon && !waitlist && (
        <p className="bg-zinc-900/5 px-4 h-[36px] rounded-xl flex items-center w-fit font-semibold text-zinc-400">
          Coming soon
        </p>
      )}
      {waitlist && (
        <>
          <button className="bg-zinc-900/5 px-4 h-[36px] rounded-xl flex items-center w-fit font-semibold text-zinc-400 mb-1">
            Join the waitlist
          </button>
        </>
      )}
    </div>
  );
}
