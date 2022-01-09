import React from 'react'
import Feature_card from './Feature_card'

const data = [
    {
      id: 1,
      imgSrc: '/assets/feature/performance.svg',
      altText: 'Fast Performance',
      title: 'Fast Performance',
      text:
        'Let’s just get this out of the way - there will always be a kit version of Edu flow. Paid subscriptions allow us to continue helping learners around the world.',
    },
    {
      id: 2,
      imgSrc:  '/assets/feature/partnership.svg',
      altText: 'Pro Subscription',
      title: 'Pro Subscription',
      text:
        'We believe it’s important for everyone to have access to software – especially when it comes to digital learning be navigated by keyboard and screen readers.',
    },
    {
      id: 3,
      imgSrc: '/assets/feature/subscription.svg',
      altText: 'Partnership deal',
      title: 'Partnership deal',
      text:
        'Let’s just get this out of the way - there will always be a kit version of Edu flow. Paid subscriptions allow us to continue helping learners around the world.',
    },
    {
      id: 4,
      imgSrc: '/assets/feature/support.svg',
      altText: 'Customer Support',
      title: 'Customer Support',
      text:
        'We believe it’s important for everyone to have access to software – especially when it comes to digital learning be navigated by keyboard and screen readers.',
    },
  ];

const Features = () => {
    return (
        <div className="mt-12 my-container">
        {/* header / */}
            <div className="text-center mb-16">
                <p className="text-red-500 mb-4 font-bold">QUALITY FEATURES</p>
                <p className="text-2xl">Amazing useful features</p>
            </div>
            <div className="md:grid md:grid-cols-12 md:gap-12">
                {data.map((feature)=>(
                    <div className="mb-8 md:col-span-6">
                        <Feature_card  feature={feature}/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Features
