import React from 'react'
import Image from 'next/image'

function Services() {
  return (
    <div id='services' className='bg-[#fbfbfb] w-full h-fit lg:py-44 py-20 text-[#232e35] flex flex-col justify-center items-center'>
        <div className='w-fit h-fit mb-20'>
            <div className='flex flex-row items-center'>
                <div className='bg-[#d9d9d9] w-3 h-0.5 mr-3'></div>
                <div className='text-[#656d72] font-medium tracking-moreWidest text-xs'>SERVICES</div>
            </div>
            <div className='md:text-4xl text-2xl font-bold'>Specialized in</div>
        </div>
        <div className='flex flex-col md:grid md:grid-cols-2 md:gap-4 lg:grid lg:grid-cols-3 lg:gap-10 items-center justify-center'>

            <div className='md:mb-0 mb-5 bg-white lg:px-12 lg:py-11 px-3 py-4 lg:w-80 w-60 shadow rounded-lg flex flex-col items-center space-y-5 text-center'>
                <div className='bg-[#f5f3fe] p-4 rounded-2xl' >
                    <Image src='/crown.svg' width={24} height={24} alt='app' />
                </div>
                <div className='lg:text-base text-sm font-medium'>UI/UX Development</div>
                <div className='lg:text-sm text-xs font-normal lg:leading-6 leading-5 text-[#656D72]'>Turn what you have in mind of a digital product into reality. For any platform you consider.</div>
            </div>

            <div className='md:mb-0 mb-5 bg-white lg:px-12 lg:py-11 px-3 py-4 lg:w-80 w-60 shadow rounded-lg flex flex-col items-center space-y-5 text-center'>
                <div className='bg-[#f5f3fe] p-4 rounded-2xl' >
                    <Image src='/app.svg' width={24} height={24} alt='app' />
                </div>
                <div className='lg:text-base text-sm font-medium'>Application Development</div>
                <div className='lg:text-sm text-xs font-normal lg:leading-6 leading-5 text-[#656D72]'>Standard designing, building, and implementing your applications with documentation.</div>
            </div>

            <div className='lg:col-auto md:col-span-2 md:flex md:justify-center'>
                <div className='md:mb-0 mb-5 bg-white lg:px-12 lg:py-11 px-3 py-4 lg:w-80 w-60 shadow rounded-lg flex flex-col items-center space-y-5 text-center'>
                    <div className='bg-[#f5f3fe] p-4 rounded-2xl' >
                        <Image src='/globe.svg' width={24} height={24} alt='app' />
                    </div>
                    <div className='lg:text-base text-sm font-medium'>Web Development</div>
                    <div className='lg:text-sm text-xs font-normal lg:leading-6 leading-5 text-[#656D72] '>Create and maintain your websites and also take care of its performance and traffic capacity.</div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Services