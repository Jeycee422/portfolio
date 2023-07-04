'use client'
import {React,useState,useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'

function Header() {
    const [shadowOn,setShadowOn] = useState(false)
    const [onMenu,setOnMenu] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setShadowOn(true)
            } else {
                setShadowOn(false)
            }
          }
        window.addEventListener('scroll',handleScroll)

        return () => {
            window.removeEventListener('scroll',handleScroll)
        }
    },[])
    const shadowNav = shadowOn ? 'shadow-sm' : ''

    const nav = <>
        <Link prefetch={false} href='#skills' className='cursor-pointer hover:underline hover:underline-offset-8'>Skills</Link>
        <Link prefetch={false} href='#projects' className='cursor-pointer hover:underline hover:underline-offset-8'>Projects</Link>
        <Link prefetch={false} href='#services' className='cursor-pointer hover:underline hover:underline-offset-8'>Services</Link>
    </>
  return (
    <div className={`${shadowNav} w-full flex justify-center md:py-5 py-2 sticky z-10 top-0 bg-white`}>
        <div className='w-10/12 lg:w-9/12 flex justify-between items-center text-[#232e35] font-normal'>
            <div className='md:hidden cursor-pointer relative md:space-y-8 space-y-[17px]'>
                <Image
                    onClick={() => setOnMenu(prevState => !prevState)}
                    src={onMenu ?'/exit.svg' : '/menu.svg'}
                    width={onMenu ? 30 : 32}
                    height={onMenu ? 30 : 32}
                    alt='menu'
                />
                {onMenu && <div className='absolute pt-4 pb-5 px-6 flex flex-col space-y-2 -left-5 rounded-b-lg bg-white border-neutral-100 border-x border-b-2'>{nav}</div>}
            </div>
            <div className='items-center font-extrabold text-xl hidden md:inline-flex'>

                <Image src='/braille.svg' alt='braille' height={38} width={38} />
                JC.
            </div>
            <div className='hidden md:inline-flex flex flex-row justify-center w-6/12 sm:space-x-6 lg:space-x-14 text-base'>
                {nav}
                {/* <Image src='/three-dot.svg' alt='dot' width={11} height={2} /> */}
            </div>
            <div className='flex flex-row items-center space-x-4 md:text-base text-sm'>
                <Image className='cursor-pointer' src='/moon.svg' width={24} height={24} alt='Moon' />
                <div className='border border-[#f1f1f1] hover:border-[#7e74f1] hover:bg-[#7e74f1] hover:text-white md:px-6 md:py-4 px-4 py-3.5 rounded-lg cursor-pointer'>Resume</div>
            </div>
        </div>
    </div>
  )
}

export default Header