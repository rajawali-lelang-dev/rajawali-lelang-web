'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import { Navbar01 } from '../ui/shadcn-io/navbar'

const Header = () => {
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  return (
    <header className="w-full">
      <Navbar01 isHomePage={isHomePage} />
    </header>
  )
}

export default Header