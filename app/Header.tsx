"use client";

import Link from "next/link";
import { useState } from "react";
import MobileMenu from "./Mobile-menu";
import NavLink from "./NavLink";
import { motion } from "framer-motion";
import { FadeIn } from "../Motions/motions";

interface bgcolorProps {
  bgColor: string;
  textColor: string;
}

function Header({ bgColor, textColor }: bgcolorProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toogleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <motion.header
      className={`${bgColor} ${textColor} sticky bg-opacity-0 z-50 `}
      initial='initial'
      animate='animate'
    >
      <motion.div className='h-24 pt-header md:pt-10 flex justify-between text-xl' variants={FadeIn}>
        <Link href='/'>
          <h1>Jimmy Mendy</h1>
        </Link>
        <ul className='hidden md:flex space-x-2 cursor-pointer'>
          <NavLink
            href='/work'
            className='underline-offset-8 hover:underline hover:duration-300 '
          >
            Work,
          </NavLink>
          <NavLink
            href='/about'
            className='underline-offset-8 hover:underline hover:duration-300 '
          >
            About Me,
          </NavLink>
          <NavLink
            href='/contact'
            className="inline-block transition-all duration-500 relative before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-1 before:transition-all before:opacity-0 before:duration-500 before:bg-black hover:before:w-full hover:before:opacity-full"
          >
            Contact
          </NavLink>
        </ul>
        <span className='md:hidden' onClick={toogleMobileMenu}>
          Menu
        </span>
        <div
          id='mobile-menu'
          className={mobileMenuOpen ? "block h-screen " : "hidden"}
        >
          <MobileMenu setMobileMenuOpen={setMobileMenuOpen} />
        </div>
      </motion.div>
    </motion.header>
  );
}

export default Header;
