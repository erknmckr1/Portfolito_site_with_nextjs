import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
function Logo() {
  return (
    <Link href="/">
      <Image alt='sss' width={54} height={54} src="/logo.png"/>
    </Link>
  )
}

export default Logo
