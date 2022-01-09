import React from 'react'
import Image from 'next/image'

const data=['Home','Adversite','Supports','Marketing','Contact']

const Footer = () => {
    return (
        <div className="flex flex-col  items-center pt-10 border-t">
             <div className="relative w-48 h-8 sm:h-10  ">
                <Image src={'/assets/logo.svg'} layout="fill" objectFit="contain" objectPosition="left"
                />
            </div>
            <div className="mt-4 text-xs text-gray-500 font-serif flex items-center justify-center gap-4 md:gap-4 lg:gap-8 md:text-base">
                {data.map((item)=>
                <span key={item}>{item}</span>
                )}
            </div>
            <p className="mt-4 font-serif text-sm md:text-lg text-gray-600">Copyright by 2022 RedQ, Inc</p>
            
        </div>
    )
}

export default Footer
