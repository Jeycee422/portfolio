import React from 'react'
import Image from 'next/image'

function Skills() {
  return (
    <div id='skills' className='w-full h-fit lg:py-40 py-20 text-[#232e35] flex flex-row items-center justify-center'>
        <div className='w-10/12 lg:w-9/12 flex flex-col'>
            <div className='w-fit h-fit lg:mb-20 mb-10'>
                <div className='flex flex-row items-center'>
                    <div className='bg-[#d9d9d9] w-3 h-0.5 mr-3'></div>
                    <div className='text-[#656d72] font-medium tracking-moreWidest text-xs'>LEARNING PATH</div>
                </div>
                <div className='md:text-4xl text-2xl font-bold'>Skills</div>
            </div>
            <div className='w-full md:w-9/12 space-y-10'>
                <div className='md:text-base text-sm'>
                    For 5+ years, I have been continuously learning in the field of front-end/ back-end and experimenting with new technologies and frameworks, and here you can see a summary of my skills.
                </div>
                <div className='w-11/12 space-y-3'>
                    <div className='flex flex-row items-end'>
                        <div className='mr-2'>
                            <Image src='/javascript.svg' width={24} height={24} alt='js' />
                        </div>
                        <div className='text-sm font-medium'>Javascript</div>
                    </div>
                    <div>
                        <div className='h-2 bg-[#F5F3FE] rounded-sm '>
                            <div className='h-2 w-[85%] bg-[#7E74F1] rounded-l-sm '></div>
                        </div>
                    </div>
                </div>
                <div className='w-11/12 space-y-3'>
                    <div className='flex flex-row items-end'>
                        <div className='mr-2'>
                            <Image src='/react.svg' width={24} height={24} alt='react' />
                        </div>
                        <div className='text-sm font-medium'>React</div>
                    </div>
                    <div>
                        <div className='h-2 bg-[#F5F3FE] rounded-sm '>
                            <div className='h-2 w-[70%] bg-[#7E74F1] rounded-l-sm '></div>
                        </div>
                    </div>
                </div>
                <div className='w-11/12 space-y-3'>
                    <div className='flex flex-row items-end'>
                        <div className='mr-2'>
                            <Image src='/next.svg' width={24} height={24} alt='react' />
                        </div>
                        <div className='text-sm font-medium'>Next</div>
                    </div>
                    <div>
                        <div className='h-2 bg-[#F5F3FE] rounded-sm '>
                            <div className='h-2 w-[78%] bg-[#7E74F1] rounded-l-sm '></div>
                        </div>
                    </div>
                </div>
                <div className='w-11/12 space-y-3'>
                    <div className='flex flex-row items-end'>
                        <div className='mr-2'>
                            <Image src='/node.svg' width={24} height={24} alt='react' />
                        </div>
                        <div className='text-sm font-medium'>Node</div>
                    </div>
                    <div>
                        <div className='h-2 bg-[#F5F3FE] rounded-sm '>
                            <div className='h-2 w-[50%] bg-[#7E74F1] rounded-l-sm '></div>
                        </div>
                    </div>
                </div>
                <div className='w-11/12 space-y-3'>
                    <div className='flex flex-row items-end'>
                        <div className='mr-2'>
                            <Image src='/python.svg' width={24} height={24} alt='react' />
                        </div>
                        <div className='text-sm font-medium'>Python</div>
                    </div>
                    <div>
                        <div className='h-2 bg-[#F5F3FE] rounded-sm '>
                            <div className='h-2 w-[59%] bg-[#7E74F1] rounded-l-sm '></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Skills