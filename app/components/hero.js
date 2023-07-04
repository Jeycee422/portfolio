import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Hero() {
  return (
    <div className='w-full flex justify-center items-center h-screen'>
        <div className='w-10/12 lg:w-9/12 flex lg:flex-row flex-col justify-between lg:mb-28 mb-14'>
            <div className='lg:order-first order-second flex flex-col justify-center'>
                <div className='flex flex-row items-center mb-4 lg:mb-6 mt-10'>
                    <div className='bg-[#d9d9d9] w-3 h-0.5 mr-3'></div>
                    <div className='text-[#656d72] font-medium tracking-moreWidest text-xs'>MY NAME IS</div>
                </div>
                <div className='md:text-4xl text-2xl flex flex-row font-bold mb-4 lg:mb-10'>
                    <div className='text-[#232e35] mr-2'>
                        JC
                    </div>
                    <div className='text-[#7e74f1]'>
                        Nuñez
                    </div>
                </div>
                <div className='md:text-base text-sm text-[#232e35] lg:mb-10 mb-6 w-12/12 sm:w-10/12 lg:leading-8 md:leading-7 leading-normal lg:w-[536px]'>
                    Aspiring self-taught web developer. Passionate about Programming. Proficient in JavaScript, React/Next JS framework. Knowledgeable in back-end development using Node, Express and MongoDB.
                </div>
                <div className='flex flex-row space-x-8 items-center w-36'>
                    <Link href='https://www.facebook.com/Jeycee422/' target='_blank'>
                        <Image src='/facebook.svg' width={24} height={24} alt='fb' />
                    </Link>
                    <Link href='https://github.com/Jeycee422' target='_blank'>
                        <Image src='/github.svg' width={24} height={24} alt='gh' />
                    </Link>
                    <Link href='https://www.linkedin.com/in/james-cyril-nu%C3%B1ez-161082273/' target='_blank'>
                        <Image src='/linkedin.svg' width={24} height={24} alt='li' />
                    </Link>
                </div>
            </div>
            <div className='flex flex-row justify-center items-center order-first'>
                <div className='lg:w-[336px] w-56 h-72 lg:h-[398px] bg-[#7e74f1] rounded-2xl -rotate-[9deg]'></div>
                <div className='lg:w-[336px] w-56 h-72 lg:h-[400px] bg-[#EAE6FE] rounded-2xl absolute'>
                    <div className='w-full h-full rounded-2xl relative'>
                        <Image className='absolute bottom-0 -left-5' src='/avatar.png' width={296} height={360} alt='avatar' priority />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero