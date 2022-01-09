import React from 'react'
import FeatureCard from './FeatureCard';


const data = [
    {
      id: 1,
      imgSrc: '/assets/key-feature/performance.svg',
      altText: 'Fast Performance',
      title: 'Fast Performance',
      text:
        'Get your blood tests delivered at home collect a sample from the your blood tests.',
    },
    {
      id: 2,
      imgSrc: '/assets/key-feature/partnership.svg',
      altText: 'Partnership deal',
      title: 'Partnership deal',
      text:
        'Get your blood tests delivered at home collect a sample from the your blood tests.',
    },
    {
      id: 3,
      imgSrc: '/assets/key-feature/subscription.svg',
      altText: 'Pro Subscription',
      title: 'Pro Subscription',
      text:
        'Get your blood tests delivered at home collect a sample from the your blood tests.',
    },
    {
      id: 4,
      imgSrc: '/assets/key-feature/support.svg',
      altText: 'Customer Support',
      title: 'Customer Support',
      text:
        'Get your blood tests delivered at home collect a sample from the your blood tests.',
    },
  ];


const KeyFeature = () => {
    return (
        <div className="mt-12 my-container">
            {/* header / */}
            <div className="text-center mb-8">
                <p className="text-red-500 mb-4 font-bold">WHATS THE FUNCTION</p>
                <p className="text-2xl">Meet the feature of product</p>
            </div>
            <div className="md:grid md:grid-cols-12 md:gap-12">
                {data.map((feature)=>(
                    <div className="mb-4 md:col-span-6 lg:col-span-3">
                    <FeatureCard  feature={feature}/>
                    </div>
                ))}
            </div>

            
        </div>
    )
}

export default KeyFeature
