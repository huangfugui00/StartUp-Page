import React from 'react'
import {planType} from '../../utils/type'
import CheckIcon from '@mui/icons-material/Check';

type PlanObjProp={
    plan:planType
}

const PlanObj = ({plan}:PlanObjProp) => {
    return (
        <div className=" px-6 py-4  border rounded-xl max-w-xs md:max-w-lg mx-auto">
            {plan.header&&<p className="fixed -top-4 bg-orange-300 rounded-lg px-2 py-1 text-white  ">{plan.header}</p>}
            <div className="mt-4">
                <h2 className="mb-2 text-lg font-bold">{plan.name}</h2> 
                <h3 className="font-serif">{plan.description}</h3>
            </div>
            <div className="mt-6">
                {
                    plan.points?.map((point)=>(
                        <div className="flex gap-4 items-center mb-4" key={point.id}>
                            <CheckIcon sx={{width:'16px',height:'16px',padding:'2px' ,color:'white' , backgroundColor:'red',borderRadius:'50px'}}/>
                            <span className="text-md font-serif">{point.text} </span>
                        </div>  
                    ))
                }
            </div>
            <div className="my-8 mx-auto justify-center flex flex-col items-center">
                <p className="font-serif mb-4">{`${plan.priceWithUnit}/Monthly`}</p>
                <button className="mb-2 text-white text-sm bg-red-500 px-6 py-2 rounded-full">{plan.buttonText}</button>
                <p className="text-blue-500 text-sm  ">{plan.anotherOption}</p>
            </div>
        </div>
    )
}

export default PlanObj
