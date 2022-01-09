import React from 'react'

type TitleHeaderProp={
    title:string,
    subTitle:string
}

const TitleHeader = ({title,subTitle}:TitleHeaderProp) => {
    return (
        <div className="max-w-md mx-auto text-center mb-12 ">
        <h2 className="text-red-400 text-sm md:text-md mb-2">{title}</h2>
        <p className="text-xl md:text-2xl  font-bold">{subTitle}</p>
         </div>       
    )
}

export default TitleHeader
