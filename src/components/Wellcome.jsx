import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

const Wellcome = () => {
  return (
    <div className="home-background flex flex-col pt-[6rem] text-4xl text-zinc-200 bg-[#000322] h-[130vh] lg:h-[140vh] w-[100%]">
      <div className='w-[100%] h-60vh flex lg:flex-row-reverse flex-col-reverse justify-evenly px-4 lg:px-12'>
        <div className="wellcome-text px-10 lg:items-start items-center flex flex-col lg:w-[57vw] w-[100%] h-max lg:mt-[14vh] lg:mr-[20vw]">
          <h1 className='lg:text-[3.3rem] text-[2rem] text-center lg:text-start py-3 font-semibold text-zinc-300'>Welcome to <span className='text-[#4a57de]'>FXRateMaster</span></h1>
          <p className='lg:text-xl text-[0.95rem] leading-[18px] text-center lg:text-left lg:tracking-wider tracking-normal lg:pt-4 text-zinc-300'>FXRateMaster offers accurate and efficient currency exchange for travelers and professionals. Our app provides real-time rates, over 150 currencies, and historical data. Enjoy a user-friendly interface, effortless conversions, and quick access to favorite pairs. Rely on FXRateMaster for all your currency exchange needs.</p>
          <Link to='convert' className="get-started-btn text-center lg:mt-8 mt-[1rem] text-zinc-200 bg-[#4a57de] hover:bg-[#363fa3] w-[110px] lg:w-[130px] rounded-lg text-lg py-[0.3rem] lg:py-2 mb-[1rem] ">Get started</Link>
        </div>
      </div>
    </div>
  )
}

export default Wellcome