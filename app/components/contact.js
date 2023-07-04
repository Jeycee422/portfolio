'use client'
import React, {useState} from 'react'
import Image from 'next/image'


function Contact() {
	const [name,setName] = useState('')
	const [email,setEmail] = useState('')
	const [message,setMessage] = useState('')

  return (
    <div className='md:py-40 py-20 flex w-full justify-center'>
			<div className='md:w-9/12 w-10/12 flex lg:flex-row flex-col lg:space-x-24'>
				<form className='flex flex-col lg:w-[600px] w-11/12 text-[#656d72] lg:order-none md:order-1 order-1'>
					<input className='focus:outline-1 focus:outline-[#7e74f1] mb-4 text-sm bg-[#fafafa] placeholder-[#656D72] rounded px-6 py-4' type='text' placeholder='Name' value={name} onChange={(e) => {
						const rawValue = e.target.value
						const sanitizedValue = rawValue.replace(/[\t\n\r]|<\/?[a-z][^>]*>/gi, '')
						setName(sanitizedValue)
					}}/>
					<input className='focus:outline-1 focus:outline-[#7e74f1] mb-6 text-sm bg-[#fafafa] placeholder-[#656D72] rounded px-6 py-4' type='text' placeholder='Email' value={email} onChange={(e) => {
						const rawValue = e.target.value
						const sanitizedValue = rawValue.replace(/[\t\n\r]|<\/?[a-z][^>]*>/gi, '')
						setEmail(sanitizedValue.trim())
					}}/>
					<textarea className='focus:outline-1 focus:outline-[#7e74f1] mb-14 text-sm bg-[#fafafa] placeholder-[#656D72] rounded-lg px-6 py-4 resize-none' type='text' placeholder='Message' rows={8} value={message} onChange={(e) => {
						const rawValue = e.target.value
						const sanitizedValue = rawValue.replace(/[\t\n\r]|<\/?[a-z][^>]*>/gi, '')
						setMessage(sanitizedValue)
					}}/>
					<input className='cursor-pointer bg-[#7E74F1] py-4 px-6 rounded-lg font-medium text-sm text-white ' type='submit' value='Send Message' />
				</form>
				<div className='space-y-12 flex flex-col justify-center lg:mb-0 mb-16'>
					<div className='flex flex-row items-center'>
						<div className='p-4 rounded-2xl bg-[#F5F3FE] shrink-0'>
							<Image src='/pin.svg' width={24} height={24} alt='pin' />
						</div>
						<div className='ml-6'>
							<div className='font-medium text-[#232E35] md:text-base text-sm '>Address</div>
							<div className='md:text-sm text-xs text-[#656D72] leading-6'>4600 Daet, Camarines Norte</div>
						</div>
					</div>

					<div className='flex flex-row items-center'>
						<div className='p-4 rounded-2xl bg-[#F5F3FE] shrink-0'>
							<Image src='/phone.svg' width={24} height={24} alt='pin' />
						</div>
						<div className='ml-6'>
							<div className='font-medium text-[#232E35] md:text-base text-sm '>Phone</div>
							<div className='md:text-sm text-xs text-[#656D72] leading-6'>{"(+63) 09774114286"}</div>
						</div>
					</div>

					<div className='flex flex-row items-center'>
						<div className='p-4 rounded-2xl bg-[#F5F3FE] shrink-0'>
							<Image src='/mail.svg' width={24} height={24} alt='pin' />
						</div>
						<div className='ml-6'>
							<div className='font-medium text-[#232E35] md:text-base text-sm'>E-Mail</div>
							<div className='md:text-sm text-xs text-[#656D72] leading-6'>nunez.jeycee@gmail.com</div>
						</div>
					</div>
				</div>
			</div>
    </div>
  )
}

export default Contact