import React ,{useState}from 'react'
import Image from 'next/image'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import IconButton from '@mui/material/IconButton'
// import ModalVideo from 'react-modal-video'

const data = {
    subTitle: 'our services',
    title: 'Business Goals Achieved with Design',
    features: [
      {
        id: 1,
        imgSrc: '/assets/services/smart.svg',
        altText: 'Smart Features',
        title: 'Smart Features',
        text:
          'Get your blood tests delivered at let home collect sample from the victory of the managements. your blood tests.',
      },
      {
        id: 2,
        imgSrc: '/assets/services/secure.svg',
        altText: 'Secure Contents',
        title: 'Secure Contents',
        text:
          'Get your blood tests delivered at let home collect sample from the victory of the managements. your blood tests.',
      },
    ],
  };

const ServiceSection = () => {
    const [open,setOpen] = useState(false)


    return (
        <div className="my-container mt-12 md:grid md:grid-cols-12 md:gap-4">
            
           
            {/* sevices */}
            <div className="mb-8  md:col-span-6 md:ml-4 lg:ml-24 max-w-md">
                <div className="text-center md:text-left mx-auto  ">
                    <h2 className="text-red-500 md:text-lg lg:text-xl">{data.subTitle}</h2>
                    <p className="text-2xl  lg:text-4xl font-bold mt-4">{data.title}</p>
                </div>
                <div className="mt-8  flex flex-col mx-auto  ">
                {
                    data.features.map((feature)=>(
                        <div className="flex gap-4 mb-4">
                            <div>
                                <div className="relative w-12 h-16">
                                    <Image src={feature.imgSrc} alt={feature.altText} layout="fill"/>
                                </div> 
                            </div>
                            <div>
                                <h2 className="font-bold mb-2">{feature.title}</h2>
                                <p className="text-gray-500 text-sm font-serif leading-loose">{feature.text}</p>
                            </div>  
                        </div>
                    ))
                }
                </div>
            </div>
            {/* image button */}
            <div className="relative md:col-span-6 md:order-first">
                    <Image src={ '/assets/service-thumb.png'} alt={'thumb'} layout="responsive" objectFit="contain"
                    className="rounded-lg"
                    height={100}
                    width={100}/>
                <div className="absolute top-1/2 left-1/2 bg-gray-100 rounded-full bg-opacity-30" >
                    <IconButton onClick={()=>setOpen(true)}>
                        <PlayArrowIcon sx={{width:'4rem',height:'4rem',color:'white'}}/>
                    </IconButton>
                </div>
            </div>

            {/* <ModalVideo isOpen={open} onClose={()=>setOpen(false)}
             videoId="ZNA9rmDsYVE"
             channel="youtube"
             /> */}
          
        </div>
    )
}

export default ServiceSection
