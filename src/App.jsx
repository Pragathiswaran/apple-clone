import React,{ useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
const App = () => {

  // useGSAP(()=>{
  //   gsap.fromTo('#blue-box',{
  //     y:250,
  //     rotation:180,
  //     borderRadius:'50%',
  //   },{
  //     y:0,
  //     duration:1,
  //     repeat:-1,
  //     yoyo:true,
  //     rotation:360,
  //     borderRadius:'0%',
  //     // ease:'elastic'
  //   }, [])
  // })

  const timeline = gsap.timeline({repeat:-1, repeatDelay:0.5, yoyo:true})

  // useGSAP(()=>{
  //   timeline.to('#blue-box',{
  //     x:250,
  //     rotation:360,
  //     borderRadius:'50%',
  //     duration:2,
  //     ease:'back.inOut'
  //   })

  //   timeline.to('#blue-box',{
  //     x:500,
  //     scale:2,
  //     rotation:720,
  //     borderRadius:'0%',
  //     duration:2,
  //     ease:'back.inOut'
  //   })
  // },[])

  useGSAP(()=>{
    gsap.to('#blue-box',{
      y:250,
      rotation:360,
      borderRadius:'50%',
      duration:2,
      ease:'back.inOut',
      repeat:-1,
      yoyo:true,
      stagger:{
        amount:1,
        // grid:[2,1],
        // from:'center'

      },
    })
  },[])
  const BoxHandler = ()=>{
    if(timeline.paused()){
      timeline.play()
    }else{
      timeline.pause()
    }
  }
  return (
    <>
      <div className='m-10 flex' >
          <div id="blue-box" className='mt-32 mx-2 size-[100px] bg-blue-700'></div>
          <div id="blue-box" className='mt-32 mx-2 size-[100px] bg-blue-700'></div>
          <div id="blue-box" className='mt-32 mx-2 size-[100px] bg-blue-700'></div>
          <div id="blue-box" className='mt-32 mx-2 size-[100px] bg-blue-700'></div>
          <div id="blue-box" className='mt-32 mx-2 size-[100px] bg-blue-700'></div>
          <div id="blue-box" className='mt-32 mx-2 size-[100px] bg-blue-700'></div>
          <div id="blue-box" className='mt-32 mx-2 size-[100px] bg-blue-700'></div>
          {/* <div id="blue-box" className='mt-32 mx-2 size-[100px] bg-blue-700'></div> */}
          {/* <button className='mt-40 outline-none bg-gray-300 p-2 text-slate-500' onClick={BoxHandler}>Play / Pause</button> */}
      </div>
    </>
  )
}

export default App
