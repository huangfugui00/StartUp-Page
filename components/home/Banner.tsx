import React from 'react'
import Image from 'next/image'

const Banner = () => {
    return (
        <div >
            <div className="mt-24 flex flex-col justify-center items-center">
                <div className="w-72 md:w-96">
                    <h1 className="text-center text-2xl md:text-4xl font-semibold leading-normal  hover:animate-bounce ">Top Quality Digital Products To Explore</h1>
                    <p className="text-center text-sm md:text-md mt-6 leading-loose">  Get your blood tests delivered at let home collect sample from the
                    victory of the managements that supplies best design system
                    guidelines ever.</p>
                </div>
                <button className="px-6 py-3 mt-6 rounded-full text-white bg-red-500">Explore</button>     
            </div>
            <div className="relative mt-8 h-[28rem] md:h-[40rem] lg:h-[48rem]">
                    <div className="absolute w-1/2 xl:w-1/3 -z-1 h-[24rem]  lg:h-[64rem] lg:-top-48 ">
                        <Image src={'/assets/shape-left.png'} layout="fill" objectFit="contain" objectPosition="top left"/>
                    </div>
                    <div className="absolute  w-full h-[28rem] md:h-[40rem] lg:h-[48rem] " >
                        <Image src={'/assets/banner-thumb.png'} layout="fill" objectFit="contain" objectPosition="top "/>
                    </div>
                    <div className="absolute w-1/2 xl:w-1/3 -z-1 right-0 top-24 lg:-top-12 h-[24rem] lg:h-[64rem]" >
                        <Image src={'/assets/shape-right.png'} layout="fill" objectFit="contain" objectPosition="top right"/>
                    </div>
            </div>
        </div>
       
    )
}

export default Banner
