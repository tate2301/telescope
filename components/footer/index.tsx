import Link from 'next/link';

const Footer = () => (
  <footer className="px-2 mt-16">
    <div className="container flex justify-between max-w-screen-md py-4 mx-auto border-t">
      <ul className="flex gap-4">
        <li>
          <Link href={'https://github.com/tate2301/zichenidotio'}>
            <a className="font-semibold">GitHub</a>
          </Link>
        </li>
        <li>
          <Link href={'https://twitter.com/zichenidotio'}>
            <a className="font-semibold">Twitter</a>
          </Link>
        </li>
      </ul>
      <p>
        Crafted by{' '}
        <Link href={'https://kamfeskaya.com'}>
          <a className="font-semibold" target={'_blank'} rel={'noopener'}>
            Tatenda
          </a>
        </Link>
      </p>
    </div>
  </footer>
);

export default Footer;
