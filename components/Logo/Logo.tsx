import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <Image
        src="/images/logo-full.png"
        alt="BanglaBriz Logo"
        width={150}
        height={50}
        className="object-contain"
        priority
    />
  )
}

export default Logo