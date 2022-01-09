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

export default function Home() {
  return (
    <div>
      <Head>
        <title>Instagram clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <Banner/>
        <KeyFeature/>
        <ServiceSection/>
        <Features/>
        <CoreFeature/>
        <Workflow/>
        <PricePlan/>
        <Teams/>
        {/* <KeyFeature/>
        <ServiceSection/>
        <Features/>
        <CoreFeature/>
        <Workflow/>
        <PricePlan/>
        <Teams/> */}
      </main>

     
    </div>
  )
}
