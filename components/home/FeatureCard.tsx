import React from 'react'
import {keyFeature} from '../../utils/type'
import Image from 'next/image'
type featureCardProp={
    feature:keyFeature
}
const FeatureCard = ({feature}:featureCardProp) => {
    return (
        <div className="flex flex-col items-center md:items-start">
            <div className="relative h-24 w-20 mt-4 -mb-4">
                <Image src={feature.imgSrc} alt={feature.altText} layout="fill" objectFit="cover" />
            </div>
            <h2 className="mb-2">{feature.title}</h2>
            <p className="leading-loose w-1/2  text-sm text-gray-500 text-center md:w-full md:text-left">{feature.text}</p>
        </div>
    )
}

export default FeatureCard
