import React from 'react'


const data = [
    {
      id: 1,
      title: 'Set disbursement Instructions',
      text:
        'Get your blood tests delivered at home collect a sample from the your blood tests.',
    },
    {
      id: 2,
      title: 'Assembly retrieves funds from your account',
      text:
        'Get your blood tests delivered at home collect a sample from the your blood tests.',
    },
    {
      id: 3,
      title: 'Assembly initiates disbursement',
      text:
        'Get your blood tests delivered at home collect a sample from the your blood tests.',
    },
    {
      id: 4,
      title: 'Customer receives funds payment',
      text:
        'Get your blood tests delivered at home collect a sample from the your blood tests.',
    },
  ];




const Workflow = () => {
    return (
        <div className="bg-red-400 text-white text-center md:text-left py-12 mt-20">
            <div className="my-container">
                <div className=" mb-12 text-center">
                <h2 className="text-gray-200 text-xs mb-2 ">WHATS THE FUNCTION</h2>
                <p className="text-xl md:text-2xl">Let's see how it works</p>
                </div>

                <div className="md:grid md:grid-cols-12">
                    {data.map((work,index)=>
                        <div className="max-w-xs mx-auto mb-12 md:col-span-6 xl:col-span-3">
                            <span className=" font-bold text-xl text-black bg-white p-2 rounded-xl md:text-3xl md:rounded-2xl">{`0${index+1}`}</span>
                            <p className="mt-4 md:mt-8 font-bold">{work.title}</p>
                            <p className="text-gray-100 text-sm mt-2 md:mt-4 md:leading-loose">{work.text}</p>
                        </div>
                    )}

                </div>
            </div>


            
        </div>
    )
}

export default Workflow
