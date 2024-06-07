import Link from 'next/link';

const Footer = () => (
  <footer className="px-2 pb-16">
    <div className="container max-w-screen-md gap-8 py-4 mx-auto">
      <div className="flex flex-col w-full max-w-screen-md gap-2 px-4 mx-auto mb-6 md:px-8">
        <h2 className="mb-4 font-semibold">Built for everyone</h2>
        <p>
          The tools you will find here are built in the order of my personal
          interests. More tools and features will be added but this project is
          not the highest of my priorities currently, so everything is given as
          is, and you&#39;re free to use them as you may see fit.
        </p>
        <p>
          The project is open source, if you would like to contribute, you can{' '}
          <Link href={'mailto:tatendachris@gmail.com'}>
            <a className="font-semibold underline">send me a message</a>
          </Link>{' '}
          (and thanks you awesome person). You can also skip the chat and just
          head over to GitHub and send in your PR or issues{' '}
          <Link href={'https://github.com/tate2301/zichenidotio'}>
            <a className="font-semibold underline">here</a>
          </Link>{' '}
          (make sure to read the guidelines please. LOL.)
        </p>
      </div>
      <p className="px-4 md:px-8">&copy; {new Date().getFullYear()} Hurudza</p>
    </div>
  </footer>
);

export default Footer;
