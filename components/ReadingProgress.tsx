import React, {useState,useEffect} from 'react'

type ReadingProgressProp={
    targetEl:string,
}
//传递targetEl，该组件将知道目标div
const ReadingProgress = ({targetEl}:ReadingProgressProp) => {

    // const [targetElemt,setTargetElemt]= useState<Element>()
    const targetElemt:any =targetEl?document.querySelector(targetEl) : document.body
    if(!targetElemt){
        return<></>
    }
    const rootElemt = window

    const [value,setValue]=useState(10)
    const [targetHeight,setTargetHeight]=useState(0)
    const [viewportH,setViewportH]=useState(0)
    const [max,setMax]=useState(100)

    useEffect(()=>{
        rootElemt.addEventListener('scroll', handleScroll)
        window.addEventListener('resize', handleResize)
        return ()=>{
            rootElemt.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', handleResize)
        }
    },[])

    const handleResize = () => {
        throttle(measure(), 100)
      }

    
    const handleScroll = () => {
        throttle(update(), 100)
    }

    const update = () => {
        const value = !targetEl ?
          window.pageYOffset || document.documentElement.scrollTop
          :
          targetElemt.scrollTop
        console.log( targetElemt.scrollTop)
    
        setValue(value)
      }
    


     const  measure = () =>{
        const height = targetElemt.getBoundingClientRect().height
        const viewportH = measureViewportHeight()
        setTargetHeight(targetElemt.getBoundingClientRect().height)
        setViewportH( measureViewportHeight())
        setMax( height - viewportH+ targetElemt.offsetTop)
        console.log('height',height)
        console.log('viewportH',viewportH)
        // console.log('max',height)
        // this.max =
      }


      const measureViewportHeight  = ()=> {
        return !targetEl ?
          Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
          :
          targetElemt.clientHeight
      }
    

    return (
        <div className="relative">
             <progress
                value={ value }
                max={ max }
                className="sticky top-0"
                // className={ this.props.className }
                // style={ this.props.style }
            />
        </div>
    )
}



const throttle = ( fn:any, threshold = 100) => {
    let last:number
    let timer: ReturnType<typeof setTimeout> 
  
    return () => {
      const now = +new Date()
      const timePassed = !!last && (now < last + threshold)
  
      if (timePassed) {
        clearTimeout(timer)
  
        timer = setTimeout(() => {
          last = now
          fn()
        }, threshold)
      } else {
        last = now
        fn()
      }
    }
  }
  

export default ReadingProgress
