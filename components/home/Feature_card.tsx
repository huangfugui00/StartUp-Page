import React from 'react'
import {keyFeature} from '../../utils/type'
import Image from 'next/image'
type featureCardProp={
    feature:keyFeature
}
const Feature_card = ({feature}:featureCardProp) => {
    return (
        <div className="flex gap-4">
            <div>
                <div className="relative h-20 w-16 mt-4 -mb-4">
                    <Image src={feature.imgSrc} alt={feature.altText} layout="fill" objectFit="cover" />
                </div>
            </div>
            <div>
                <h2 className="mb-2 font-bold font-serif">{feature.title}</h2>
                <p className=" leading-loose  text-sm text-gray-500  w-full md:text-left">{feature.text}</p>
            </div>
        </div>
    )
}
export default Feature_card
