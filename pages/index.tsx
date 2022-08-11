import Calculator from 'components/calculator';
import Nav from 'components/nav';

export default function Main() {
  return (
    <div className="container flex flex-col items-center justify-center max-w-3xl min-h-screen px-2 py-0 mx-auto">
      <Nav pageTitle={'SaaS Pricing Calculator'} />
      <main className="flex flex-col flex-1 w-full px-0 py-20">
        <Calculator />
      </main>

      <footer className="flex items-center justify-center w-full h-24"></footer>
    </div>
  );
}
