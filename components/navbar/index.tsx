import Link from 'next/link';
import { useState } from 'react';

export function PublicNavbar() {
  const [isMenuShowing, setIsMenuShowing] = useState(false);

  const toggleMenuVisibility = () => setIsMenuShowing(!isMenuShowing);
  return (
    <>
      <nav className="container relative justify-between hidden w-full max-w-screen-md py-6 mx-auto md:flex md:flex-row md:px-8">
        <Link href={'https://github.com/tate2301/zichenidotio'}>
          <a className="font-semibold">GitHub</a>
        </Link>
      </nav>

      <nav className="relative z-20 w-screen py-4 md:hidden group">
        <div className="flex items-center justify-between px-4">
          <Link href={'/'}>
            <a className="sf">Zicheni</a>
          </Link>
          <button
            className="p-2 rounded shadow bg-zinc-100"
            onClick={toggleMenuVisibility}
          >
            {!isMenuShowing && (
              <span className="transition-all duration-200">Menu</span>
            )}
            {isMenuShowing && (
              <span className="transition-all duration-200">Close</span>
            )}
          </button>
        </div>
        {isMenuShowing && (
          <div className="relative w-full transition-all duration-300">
            <div className="absolute top-0 left-0 flex flex-col w-full gap-8 p-4 pb-8 bg-white shadow-xl">
              <ul className="flex flex-col gap-4">
                <li>
                  <Link href={'/features'}>
                    <a>Features</a>
                  </Link>
                </li>
                <li>
                  <Link href={'/tools'}>
                    <a>Tools</a>
                  </Link>
                </li>
              </ul>
              <div className="flex flex-col gap-4 text-center">
                <Link href={'/auth'}>
                  <a className="px-3 py-2 rounded shadow text-zinc-900 bg-zinc-100">
                    Login
                  </a>
                </Link>
                <Link href={'/preview/telescope'}>
                  <a className="px-3 py-2 text-white rounded shadow bg-zinc-900">
                    Estimate my revenue
                  </a>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export function AppNavbar() {
  return <nav className="flex w-full py-4"></nav>;
}
