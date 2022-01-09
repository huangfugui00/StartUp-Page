import React from 'react'
import Image from 'next/image'
import TitleHeader from './TitleHeader'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import IconButton from '@mui/material/IconButton'
const data = [
    {
      id: 1,
      imgSrc: '/assets/team/member-1.png',
      altText: 'Saimon Harmer',
      title: 'Saimon Harmer',
      designation: 'CEO and Founder',
      socialProfile: [
        {
          id: 1,
          name: 'facebook',
          path: '#',
          icon: <FacebookIcon/>,
        },
        {
          id: 2,
          name: 'twitter',
          path: '#',
          icon: <TwitterIcon />,
        },
        {
          id: 3,
          name: 'instagram',
          path: '#',
          icon: <InstagramIcon />,
        },
      ],
    },
    {
      id: 2,
      imgSrc: '/assets/team/member-2.png',
      altText: 'Aaron Nunez',
      title: 'Aaron Nunez',
      designation: 'Founder',
      socialProfile: [
        {
          id: 1,
          name: 'facebook',
          path: '#',
          icon: <FacebookIcon />,
        },
        {
          id: 2,
          name: 'twitter',
          path: '#',
          icon: <TwitterIcon />,
        },
        {
          id: 3,
          name: 'instagram',
          path: '#',
          icon: <InstagramIcon />,
        },
      ],
    },
    {
      id: 3,
      imgSrc: '/assets/team/member-3.png',
      altText: 'Aaron Nunez',
      title: 'Aaron Nunez',
      designation: 'Web Designer',
      socialProfile: [
        {
          id: 1,
          name: 'facebook',
          path: '#',
          icon: <FacebookIcon />,
        },
        {
          id: 2,
          name: 'twitter',
          path: '#',
          icon: <TwitterIcon />,
        },
        {
          id: 3,
          name: 'instagram',
          path: '#',
          icon: <InstagramIcon />,
        },
      ],
    },
    {
      id: 4,
      imgSrc: '/assets/team/member-4.png',
      altText: 'Lina Jutila',
      title: 'Lina Jutila',
      designation: 'Web Developer',
      socialProfile: [
        {
          id: 1,
          name: 'facebook',
          path: '#',
          icon: <FacebookIcon />,
        },
        {
          id: 2,
          name: 'twitter',
          path: '#',
          icon: <TwitterIcon />,
        },
        {
          id: 3,
          name: 'instagram',
          path: '#',
          icon: <InstagramIcon />,
        },
      ],
    },
    {
      id: 5,
      imgSrc: '/assets/team/member-5.png',
      altText: 'Saimon Harmer',
      title: 'Saimon Harmer',
      designation: 'CEO and Founder',
      socialProfile: [
        {
          id: 1,
          name: 'facebook',
          path: '#',
          icon: <FacebookIcon />,
        },
        {
          id: 2,
          name: 'twitter',
          path: '#',
          icon: <TwitterIcon />,
        },
        {
          id: 3,
          name: 'instagram',
          path: '#',
          icon: <InstagramIcon />,
        },
      ],
    },
    {
      id: 6,
      imgSrc: '/assets/team/member-6.png',
      altText: 'Aaron Nunez',
      title: 'Aaron Nunez',
      designation: 'Web Designer',
      socialProfile: [
        {
          id: 1,
          name: 'facebook',
          path: '#',
          icon: <FacebookIcon />,
        },
        {
          id: 2,
          name: 'twitter',
          path: '#',
          icon: <TwitterIcon />,
        },
        {
          id: 3,
          name: 'instagram',
          path: '#',
          icon: <InstagramIcon />,
        },
      ],
    },
  ];

const Teams = () => {
    return (
        <div className="mt-12 my-container">
            <TitleHeader title={'OUR TEAM'} subTitle={'The most qualified and talented individuals'}/>
        <div className="grid grid-cols-12 justify-center sm:gap-8  mx-auto">
            {
                data.map((member)=>
                <div className="py-4 hover:shadow-md ease-in-out duration-500 group rounded-lg col-span-6 md:col-span-4 relative flex flex-col items-center text-center" key={member.title}>
                    <div className="relative w-20 h-20 border rounded-full border-red-500 md:w-24 md:h-24 lg:w-28 lg:h-28">
                        <Image src={member.imgSrc} alt={member.title} layout='fill'/>
                    </div>
                    <div>
                        <p className="font-bold mt-4 group-hover:text-red-500 ease-in-out duration-500" >{member.title}</p>
                        <p className="mt-2 text-sm text-gray-500 group-hover:text-red-500  font-serif ease-in-out duration-500">{member.designation}</p>
                    </div>
                    <div className="flex md:hidden  mt-2">
                    <IconButton>
                        <FacebookIcon sx={{width:'18px',color:'black'}}/>
                    </IconButton>
                    <IconButton>
                        <TwitterIcon sx={{width:'18px',color:'black'}} />
                    </IconButton>
                    <IconButton>
                        <InstagramIcon sx={{width:'18px',color:'black'}}/>
                    </IconButton>
                    </div> 
                    <div className="absolute hidden md:group-hover:block  animate__animated animate__fadeInUp flex flex-col   right-[30px] bottom-[16px]">
                        <div>
                            <FacebookIcon sx={{width:'18px',color:'red'}}/>
                        </div>
                        <div>
                            <TwitterIcon sx={{width:'18px',color:'red'}} />
                        </div>
                        <div>
                            <InstagramIcon sx={{width:'18px',color:'red'}}/>
                        </div>
                    </div>

                </div>
                )
            }
            </div>
        </div>
    )
}

export default Teams
