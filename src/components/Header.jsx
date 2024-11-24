import React from 'react'
import main from '../assets/main.png'
import "../css/Header.css"
import logo from "../assets/logo.png"
import vector from "../assets/Vector.png"

function Header() {
  return (
    <>

    <header className='flex flex-col-reverse md:flex-row md:justify-between justify-center gap-[80px] items-center relative '>
        <nav className='flex flex-col md:flex-row justify-between items-end md:items-center absolute w-[100%] top-0 z-[1] pt-[10px] md:pt-0'>
            <img src= {logo} alt="" className='pl-[60px] hidden md:block' />
            <button className='w-[122px] h-[42px] rounded-[21px]  border-white border-[1px]  text-[14px] text-white mr-[30px]'>
                Get in touch
            </button>
        </nav>
        <div className='flex flex-col justify-center items-center md:items-start gap-[40px] md:pl-[60px]'>
          <h1 className='text-[62px] font-[700] leading-[69px] text-[#0E2368] text-center md:text-left'>
            Discover the <br/>
            <span className='text-[#E23744]'>Best</span> Food <br />
              and Drinks
          </h1>
          <p className='text-[16.44px] leading-[27.41px] text-[400] text-center md:text-left  '>
            Naturally made Healthcare Products for the <br />
            better care & support of your body.
          </p>
          <button className='text-white text-[18px] font-[700] rounded-[34px] w-[190px] h-[63px] bg-[#E23744] '>
            Explore Now!
          </button>
        </div>

        <div className='mainimage'>
            <img src= {main} alt=""  />
            <div className='messy_design'>
                    {/* <svg width="752" height="839" viewBox="0 0 752 839" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M111.512 36.3371C40.9348 45.1719 7.76349 15.7936 0 0L752 1.42498V835.396C484.285 867.417 547.679 676.51 560.03 640.173C572.381 603.836 657.779 365.152 547.679 190.591C437.579 16.031 199.733 25.2934 111.512 36.3371Z" fill="#E23744"/>
                    </svg> */}
                    <img src= {vector} alt="" />
            </div>

        </div>




    </header>
    </>
  )
}

export default Header