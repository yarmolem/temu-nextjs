import { Navbar } from '@/components/layout/navbar'
import React from 'react'

const BasicLayout = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <>
      <Navbar className="sticky top-0 z-40" />
      {children}
    </>
  )
}

export default BasicLayout
