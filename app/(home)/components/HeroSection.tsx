import { MovingBorderBtn } from '@/components/ui/moving-border'
import Link from 'next/link'
import React from 'react'

export default function HeroSection() {
    return (
        <div className='min-h-[60vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between'>
            <div className='space-y-10 text-center lg:text-left'>
                <h1 className='text-4xl lg:text-7xl font-bold'>
                    Nice to meet you! 👋 <br /> <span className='underline underline-offset-8 decoration-green-500'>{"I'm Richard."}</span>
                </h1>

                <p className='md:w-76 text-lg text-gray-300'>
                    {"I am currently studying Computer Science at the University of Waterloo. I'm a Full-Stack Software Developer passionate about creating applications that make a difference. I love learning about different tools and technologies and how they can be used to solve real-world problems. Let's have a chat!"}
                </p>

                <Link href={"mailto:r25bai@uwaterloo.ca"} className='inline-block'>
                    <div>
                        <h1 className='text-xl font-bold hover:text-green-400 transition duration-350 ease-in'>Contact Me 📭</h1>
                        <div className='w-full h-2 bg-green-500 rounded-full'></div>
                        <div className='w-full h-2 bg-indigo-500 rounded-full translate-x-2'></div>
                    </div>
                </Link>
            </div>

            <div>
                <div className='w-72 h-72 space-y-3 -rotate-[30deg]'>
                    <div className='flex gap-3 translate-x-8'>
                        <div className='w-32 h-32 rounded-2xl bg-green-500'></div>
                        <div className='w-32 h-32 rounded-full bg-indigo-500'></div>
                    </div>
                    <div className='flex gap-3 -translate-x-8'>
                        <div className='w-32 h-32 rounded-2xl bg-indigo-500'></div>
                        <div className='w-32 h-32 rounded-full bg-green-500'></div>
                    </div>

                    <div className='glow absolute top-[40%] right-1/2 -z-10'></div>
                </div>

                <MovingBorderBtn>
                    <p>Looking for 2024 Summer CO-OP</p>
                </MovingBorderBtn>
            </div>
        </div>
    )
}
