'use client'
import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Project = ({name,href,src,framework,blur}) => {
    return (
        <div className='hover:shadow rounded-lg hover:scale-105 ease-out duration-150'>
            <div className={`lg:w-80 sm:w-56 w-40 ${src} bg-cover lg:h-52 sm:h-36 h-20  rounded-t-lg`}>
                <div className={`w-full h-full ${blur} rounded-t-lg`}></div>
            </div>
            <div className='lg:w-80 sm:w-56 w-40 rounded-b-lg border border-neutral-100 flex flex-col lg:p-5 p-3 lg:space-y-2 space-y-1 md:text-base text-xs text-[#232e35] font-medium'>
                <div>{name}</div>
                <div className='flex flex-row space-x-4'>
                    <div className='rounded border border-[#f1f1f1] px-2 py-1 text-[#656d72] md:text-xs text-[10px] font-medium'>{framework}</div>
                    <Link href={href} target='_blank'>
                        <Image src='/link.svg' width={24} height={24} alt='link' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

function Projects() {
    const [projList,setProjList] = useState([
        {
            name:'2048 Game',
            href:'https://nunez-jeycee-2048-g.vercel.app/',
            src:"bg-[url('/2048G.png')]",
            framework:'Next',
            blur: 'bg-black/10'
        },
        {
            name:'Memory Game',
            href:'https://nunez-jeycee-memory-g.vercel.app/',
            src:"bg-[url('/memoryG.png')]",
            framework:'Next',
            blur: 'bg-black/50'
        },
        {
            name:'Mines',
            href:'https://nunez-jeycee-mines-g.vercel.app/',
            src:"bg-[url('/minesG.png')]",
            framework:'Next',
            blur: 'bg-black/50'
        },
        {
            name:'Wordle Game',
            href:'https://nunez-jeycee-wordle.vercel.app/',
            src:"bg-[url('/wordle.png')]",
            framework:'Next',
            blur: 'bg-black/10'
        },
        {
            name:'Quiz App',
            href:'https://jeycee422.github.io/QuizApp/',
            src:"bg-[url('/quizApp.png')]",
            framework:'React',
            blur: 'bg-black/10'
        },
        {
            name:'Tenzies Game',
            href:'https://jeycee422.github.io/tenzies-react/',
            src:"bg-[url('/tenziesApp.png')]",
            framework:'React',
            blur: 'bg-black/50'
        }
    ])
  return (
    <div id='projects' className='h-fit lg:py-40 py-20 text-[#232e35] flex flex-col justify-center items-center'>
        <div className='w-fit h-fit mb-20'>
            <div className='flex flex-row items-center'>
                <div className='bg-[#d9d9d9] w-3 h-0.5 mr-3'></div>
                <div className='text-[#656d72] font-medium tracking-moreWidest text-xs'>MY WORKS</div>
            </div>
            <div className='md:text-4xl text-2xl font-bold'>Featured Projects</div>
        </div>


        <div className='lg:grid lg:grid-cols-3 lg:grid-rows-none lg:gap-10 md:grid md:grid-cols-3 md:grid-flow-row md:grid-rows-none grid grid-rows-3 grid-flow-col gap-3'>
            {
                projList.map((proj,indx) => <Project name={proj.name} href={proj.href} src={proj.src} framework={proj.framework} blur={proj.blur} key={indx} />)
            }
        </div>
    </div>
  )
}

export default Projects