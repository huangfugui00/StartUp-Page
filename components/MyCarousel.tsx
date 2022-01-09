import React,{useState,useEffect} from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import IconButton from '@mui/material/IconButton'


type MyCarouselProp={
    children:React.ReactNode,
    len:number
}

const MyCarousel = ({children,len}:MyCarouselProp) => {
    const [showIndex,setShowIndex]=useState(0)
    const previousHandle  = ()=>{
        if(showIndex==0){
            setShowIndex(len-1)
        }
        else{
            setShowIndex(showIndex-1)
        }
    }

    const nextHandle  = ()=>{
        if(showIndex==len-1){
            setShowIndex(0)
        }
        else{
            setShowIndex(showIndex+1)
        }
    }

    useEffect(()=>{
        for(let i = 0 ;i<len;i++){
            let element = document.getElementById(`item${i}`);
            element?.classList.add('hidden')
        }
        let element = document.getElementById(`item${showIndex}`);
        element?.classList.remove('hidden')       
    },[showIndex])
    return (
        <div className="relative overflow-hidden">
            <div className="relative w-full ">
                {/* {
                    imgs.map((img,index)=>
                    <div className={`${index!==showIndex && 'hidden'} animate__animated animate__fadeInRight relative float-left w-full`}>
                    <img
                        src={img}
                        className="block w-full"
                        alt="Wild Landscape"
                    />
                    </div>
                    )
                } */}
                {children}
            
            </div>
            
            <div className="absolute top-1/2 left-0 bg-white over rounded-full opacity-50">
                <IconButton onClick={()=>previousHandle()}>
                    <ArrowBackIosIcon/>
                </IconButton>
            </div>
            <div className="absolute top-1/2 right-0 bg-white  rounded-full opacity-50">
                <IconButton onClick={()=>nextHandle()}>
                    <ArrowForwardIosIcon/>
                </IconButton>
            </div>
        </div>
    )
}

export default MyCarousel
