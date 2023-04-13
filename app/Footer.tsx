"use client"

import React from 'react'
import Link from 'next/link'
import { motion } from "framer-motion";
import { FadeIn } from "../Motions/motions";

interface bgcolorProps {
  bgColor: string;
  textColor: string;
}

function Footer({bgColor, textColor} : bgcolorProps) {
  return (
    <motion.footer
      initial='initial'
      animate='animate'
    >
      <motion.div className='text-xl flex justify-between pb-14 items-center' variants={FadeIn}>
      <div className="flex flex-col">
        <span>Jimmy Mendy</span>
        <span>Front end developer</span>
      </div>
      <div className="flex">
        <Link href="https://twitter.com/JimmyMendy">Twitter</Link>
        <Link href="https://github.com/JimmyMendy">Github</Link>
      </div>
      <div>
        Development Jimmy Mendy
      </div>
      </motion.div>
    </motion.footer>
  )
}

export default Footer