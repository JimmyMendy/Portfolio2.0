import Link from "next/link";


interface MenuProps {
  setMobileMenuOpen: (open: boolean) => void;
  mobileMenuOpen: boolean;
}

export default function MobileMenu({
  setMobileMenuOpen,
  mobileMenuOpen,
}: MenuProps) {
  return (
    <section className='bg-mobile w-screen h-screen absolute left-0 top-0 z-140 flex flex-col justify-between py-8 px-8 text-white'>
      <header>
        <div className='flex justify-between text-xl'>
          <Link href='/'>Jimmy Mendy</Link>
          <span onClick={() => setMobileMenuOpen(mobileMenuOpen)}>Close</span>
        </div>
      </header>
      <div className='mt-25'>
        <ul className='list-none'>
          <li>
            <Link href='/' className="inline-block relative mb-5" onClick={() => setMobileMenuOpen(mobileMenuOpen)}>
              <span className="text-10xl leading-tight underline uppercase">
                <span>Home</span> 
                <span aria-hidden className="opacity-0">H</span>
                <span aria-hidden className="opacity-0">O</span>
                <span aria-hidden className="opacity-0">M</span>
                <span aria-hidden className="opacity-0">E</span>
              </span>
            </Link>
          </li>
          <li>
            <Link href='/work' className="inline-block relative mb-5" onClick={() => setMobileMenuOpen(mobileMenuOpen)}>
              <span className="text-10xl uppercase">
                <span>WORK</span> 
                <span aria-hidden className="opacity-0">W</span>
                <span aria-hidden className="opacity-0">O</span>
                <span aria-hidden className="opacity-0">R</span>
                <span aria-hidden className="opacity-0">K</span>
              </span>
            </Link>
          </li>
          <li>
            <Link href='/about' className="inline-block relative mb-5" onClick={() => setMobileMenuOpen(mobileMenuOpen)}>
              <span className="text-10xl uppercase">
                <span>About</span> 
                <span aria-hidden className="opacity-0">A</span>
                <span aria-hidden className="opacity-0">B</span>
                <span aria-hidden className="opacity-0">O</span>
                <span aria-hidden className="opacity-0">U</span>
                <span aria-hidden className="opacity-0">T</span>
              </span>
            </Link>
          </li>
          <li>
            <Link href='/contact' className="inline-block relative mb-5" onClick={() => setMobileMenuOpen(mobileMenuOpen)}>
              <span className="text-10xl uppercase">
                <span>Contact</span> 
                <span aria-hidden className="opacity-0">C</span>
                <span aria-hidden className="opacity-0">O</span>
                <span aria-hidden className="opacity-0">N</span>
                <span aria-hidden className="opacity-0">T</span>
                <span aria-hidden className="opacity-0">A</span>
                <span aria-hidden className="opacity-0">C</span>
                <span aria-hidden className="opacity-0">T</span>
              </span>
            </Link>
          </li>
        </ul>
        <div className="mt-8 text-xl leading-special">
          <p>Currently</p> 
          <p>Open to work</p>
        </div>
        <div className="mt-5 text-xl leading-special">
          <p>Based in London</p> 
           <p>United Kingdom</p>
        </div>
      </div>
    </section>
  );
}
