import React,{useRef,RefObject} from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/home/Banner'
import KeyFeature from '../components/home/KeyFeature'
import ServiceSection from '../components/home/ServiceSection' 
import Features from '../components/home/Features' 
import CoreFeature from '../components/home/CoreFeature'
import Workflow from '../components/home/Workflow'
import PricePlan from '../components/home/PricePlan'
import Teams from '../components/home/Teams'
import ClientSection from '../components/home/ClientSection'
import { useScrollspy} from '../components/scrollpy/index'
import StickyTop from '../components/StickyTop'

export default function Home() {
  const SIZE = 4;
  let sectionRefs:any= [] 
  for(let i =0;i<SIZE;i++){
    sectionRefs.push(useRef<HTMLDivElement>(null))
  }
  const {currentElementIndexInViewport}=useScrollspy({sectionRefs})
  return (
    <div>
      <Head >
        <title>Instagram clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StickyTop>
            <div className="pb-4 border-b">
            <div className="my-container ">
                <Header curNavIndex={currentElementIndexInViewport}/>
            </div>
            </div>
        </StickyTop>
      <main className="" id="home">
        <div ref={sectionRefs[0]}>
        <Banner/>
        </div>
        <div ref={sectionRefs[1]}  id="feature" data-aos="fade-up">
        <KeyFeature/>
        </div>
        <div data-aos="fade-up">
        <ServiceSection/>
        </div>
        <div  ref={sectionRefs[2]} data-aos="fade-up">
        <Features/>
        </div>
        <div data-aos="fade-up">
        <CoreFeature/>
        </div>
        <div data-aos="fade-up">
        <Workflow/>
        </div>
        <div  ref={sectionRefs[2]} data-aos="fade-up">
        <PricePlan/>
        </div>
        <div data-aos="fade-up">
        <Teams/>
        </div>
      </main>

     
    </div>
  )
}
