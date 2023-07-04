import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
  return (
    <div className='bg-[#fbfbfb] w-full flex items-center justify-center space-y-6 flex-col py-20'>
        <div className='flex flex-row space-x-8'>
          <Link href='https://github.com/Jeycee422' target='_blank'>
              <Image src='/github.svg' width={24} height={24} alt='gh' />
          </Link>
          <Link href='https://www.facebook.com/Jeycee422/' target='_blank'>
              <Image src='/facebook.svg' width={24} height={24} alt='fb' />
          </Link>
          <Link href='https://www.linkedin.com/in/james-cyril-nu%C3%B1ez-161082273/' target='_blank'>
              <Image src='/linkedin.svg' width={24} height={24} alt='li' />
          </Link>    
        </div>
        <div className='text-[#656D72] text-sm '>© 2023 - JeyceeDev</div>
    </div>
  )
}

export default Footer