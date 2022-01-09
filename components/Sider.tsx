import React from 'react'
import {navType} from '../utils/type'
import Link from 'next/link'

type MenuSideProp={
    navList:navType[]
}


const Sider = ({navList}:MenuSideProp) => {

    return (
        <div className="w-48 lg:w-72 mt-12 ">
            {navList?.map((item)=>(
                <div  key={item.label} className="border-b py-3">
                    <Link href={item.path}>
                    <a>
                        {item.label}
                    </a>
                    </Link>
                </div>
            ))}
            
        </div>
    )
}

export default Sider
