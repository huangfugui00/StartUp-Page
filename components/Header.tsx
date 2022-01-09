import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import MenuSide from '../components/MenuSide'
const navlist=[
    {
      path: '#home',
      label: 'Home',
    },
    {
      path: '#feature',
      label: 'Features',
    },
    {
      path: '#pricing',
      label: 'Pricing',
    },
    {
      path: '#testimonial',
      label: 'Testimonial',
    },
  ];
  

const Header = () => {
    return (
        <div className="py-4  items-center grid grid-cols-12">
            <div className="relative w-36 md:w-48 h-8 sm:h-10 col-span-4">
                <Image src={'/assets/logo.svg'} layout="fill" objectFit="contain" objectPosition="left"/>
            </div>
        

             {/* nav item  */}
             <div className="hidden md:block md:col-span-4">
                <div className="flex justify-between">
                    {navlist.map((item)=>(
                        <Link href={item.path} key={item.label}>
                        <a>
                            <span className=" font-serif animate__animated animate__bounce">{item.label}</span>
                        </a>
                        </Link>
                    ))}
                </div>
             </div>
            
            {/* start and menu */}
             <div className="col-span-8 md:col-span-4 flex justify-end items-center md:gap-4">
                <button className="text-red-600 px-4 py-2 sm:px-8 sm:py-3 text-sm md:text-md border border-red-600 rounded-full">Get Started</button>
                <div className="md:hidden">
                    <MenuSide navList={navlist}/>
                </div>
             </div>
            
        </div>
    )
}

export default Header
