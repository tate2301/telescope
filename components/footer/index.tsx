import Link from 'next/link';

const Footer = () => (
  <footer className="px-2 mt-16">
    <div className="container flex max-w-screen-md gap-8 py-4 mx-auto">
      <p
        style={{
          boxShadow: '0 2px 12px -8px rgba(0,0,0,0.16)',
        }}
        className="px-4 py-2 mx-auto text-sm border rounded-full shadow text-zinc-600 border-zinc-400/20 bg-white/30"
      >
        Crafted by{' '}
        <Link href={'https://atipamara.xyz'}>
          <a className="font-semibold" target={'_blank'} rel={'noopener'}>
            Atipamara
          </a>
        </Link>{' '}
        the{' '}
        <Link href={'https://hrurdza.tech'}>
          <a className="font-semibold" target={'_blank'} rel={'noopener'}>
            Hurudza
          </a>
        </Link>{' '}
        team
      </p>
    </div>
  </footer>
);

export default Footer;
