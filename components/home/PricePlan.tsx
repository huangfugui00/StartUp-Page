import React from 'react'
import MyCarousel from '../MyCarousel'
import PlanObj from './PlanObj'
import useMediaQuery from '@mui/material/useMediaQuery';

const plans=[
    {
      id: 1,
      name: 'Free Plan',
      description: 'For Small teams or office',
      buttonText: 'Start free trail',
      priceWithUnit: '$0',
      points: [
        {
          id: 1,
          text: 'Drag & Drop Builder',
          isAvailable: true,
        },
        {
          id: 2,
          text: "1,000's of Templates",
          isAvailable: true,
        },
        {
          id: 3,
          text: 'Blog Support Tools',
          isAvailable: true,
        },
        {
          id: 4,
          text: 'eCommerce Store ',
          isAvailable: true,
        },
      ],
    },
    {
      id: 2,
      name: 'Business king',
      description: 'For Enterprise business',
      priceWithUnit: '$15',
      buttonText: 'Create account',
      anotherOption: 'Or Start 14 Days trail',
      points: [
        {
          id: 1,
          text: 'Drag & Drop Builder',
          isAvailable: true,
        },
        {
          id: 2,
          text: "1,000's of Templates",
          isAvailable: true,
        },
        {
          id: 3,
          text: 'Blog Support Tools',
          isAvailable: true,
        },
        {
          id: 4,
          text: 'eCommerce Store ',
          isAvailable: true,
        },
      ],
    },
    {
      id: 3,
      header: 'Suggested',
      name: 'Pro Master',
      description: 'For pro level developers',
      priceWithUnit: '$24',
      buttonText: 'Create account',
      anotherOption: 'Or Start 14 Days trail',
      points: [
        {
          id: 1,
          text: 'Drag & Drop Builder',
          isAvailable: true,
        },
        {
          id: 2,
          text: "1,000's of Templates",
          isAvailable: true,
        },
        {
          id: 3,
          text: 'Blog Support Tools',
          isAvailable: true,
        },
        {
          id: 4,
          text: 'eCommerce Store ',
          isAvailable: true,
        },
      ],
    },
  ]

const PricePlan = () => {
    const matches = useMediaQuery('(max-width:768px)');
    return (
        <div className="mt-12 my-container" id="pricing">
            <div className="max-w-ws mx-auto text-center mb-12 ">
                <h2 className="text-red-400 text-xs mb-2">PRICE PLAN</h2>
                <p className="text-xl font-bold">Choose your pricing policy</p>
            </div>
            {/* <MyCarousel/> */}
            <div >
                {matches?
                    <MyCarousel len={plans.length}>
                        {
                            plans.map((plan,index)=>
                            <div  id={`item${index}`} className={` animate__animated animate__fadeInRight relative float-left w-full`}>
                                <PlanObj plan={plan} />
                            </div>
                            )
                        }
                    </MyCarousel>:
                    <div className="flex justify-center md:gap-4 lg:gap-8">
                         {
                            plans.map((plan,index)=>
                            <div  id={`item${index}`} className={` animate__animated animate__fadeInRight relative float-left w-full`}>
                                <PlanObj plan={plan} />
                            </div>
                            )
                        }
                    </div>  
                }
            </div>
        </div>
    )
}

export default PricePlan
