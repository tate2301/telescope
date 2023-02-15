import Calculator from 'components/calculator';
import Nav from 'components/nav';

export default function Main() {
  return (
    <div className="container flex flex-col items-center justify-center max-w-3xl min-h-screen px-2 py-0 mx-auto subpixel-antialiased font-normal">
      <Nav pageTitle={'SaaS Pricing Calculator'} />
      <main className="flex flex-col flex-1 w-full px-0 pt-8 pb-20 overflow-x-hidden">
        <Calculator />
      </main>
    </div>
  );
}
