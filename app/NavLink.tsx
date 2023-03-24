'use client';

import Link from "next/link"
import { useSelectedLayoutSegment} from 'next/navigation'

interface Props {
  children: string
  className: string
  href: string
}

function NavLink({className, href, children, ...args}: Props) {
  let segment = useSelectedLayoutSegment()
  let active = href === `/${segment}`
  return (
    <Link href={href}
      className={`${className} ${active ? 'underline' : ''}`}>{children}</Link>
  )
}

export default NavLink