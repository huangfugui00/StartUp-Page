import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const data = {
    subTitle: 'Core features',
    title: 'Smart Jackpots that you may love this anytime & anywhere',
    description:
      'Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever.',
    btnName: 'Get Started',
    btnURL: '#',
    featureThumb:'/assets/core-feature.png',
    shapePattern:'/assets/shape-pattern2.png'
  };
  

const CoreFeature = () => {
    return (
        <div className="my-container pt-8 md:grid md:grid-cols-12 md:gap-4 ">
            <div className="text-center mb-4 sm:mb-8 md:col-span-6 md:text-left ">
                <h3 className="text-red-500 mb-2 sm:text-lg ">{data.subTitle}</h3>
                <p className="text-xl font-bold mb-4 max-w-md mx-auto sm:text-lg   md:mx-0 md:text-3xl md:mb-6 lg:text-4xl"> {data.title}</p>
                <p className="text-sm text-gray-600 mb-8 max-w-md mx-auto md:mx-0 md:leading-loose md:text-md lg:text-lg">{data.description}</p>
                <Link href={data.btnURL}>
                <a>
                    <button className="bg-red-400 text-white px-4 py-2 rounded-full md:px-6 md:py-3">{data.btnName}</button>
                </a>
                </Link>
            </div>
     
            <div className="md:col-span-6 relative overflow-hidden ">
                <Image src={data.featureThumb} layout="responsive" objectFit="contain"
                className="rounded-lg  "
                height={200}
                width={200}/>
                <div className="hidden md:block w-96 h-96 absolute -bottom-20 -right-20 -z-1">
                    <Image src={data.shapePattern} layout="fill" objectFit="contain"
                    />
                </div>
            </div>
        </div>
    )
}

export default CoreFeature
