import React from 'react'
import sm1 from "../assets/sm1.png"
import sm2 from '../assets/sm2.png'
import sm3 from "../assets/sm3.png"
import footimg from "../assets/footimg.png"

function Footer() {
  return (
    <footer className='flex flex-col md:flex-row  gap-[100px] md:gap-0  bg-[#F8F8F8] justify-center md:justify-around items-center py-[100px]'>

        <img src= {footimg} alt="" className='' />


        <div className='flex flex-col w-[350px] md:w-[232px] ] h-[145px] gap-[15px]'>
            <h2 className='font-["Source Sans 3"] font-[600] text-[18.84px] text-[#0E2368]'>Contact Us</h2>
            <p className='font-["Source Sans 3" font-[400] text-[15px] text-[#646874]'>Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</p>
            <p className='font-["Source Sans 3" font-[400] text-[15px] text-[#646874]'>example2020@gmail.com</p>
            <p className='font-["Source Sans 3" font-[400] text-[15px] text-[#646874]'>(904) 443-0343</p>
        </div>

        <div className='flex flex-col gap-[15px] w-[350px] md:w-[153px] h-[145px]'>
            <h2 className='font-["Source Sans 3"] font-[600] text-[18.84px] text-[#0E2368]'>More</h2>
            <p className='font-["Source Sans 3"] font-[400] text-[15px] text-[#646874]'>About Us</p>
            <p className='font-["Source Sans 3"] font-[400] text-[15px] text-[#646874]'>Products</p>
            <p className='font-["Source Sans 3"] font-[400] text-[15px] text-[#646874]'>Careers</p>
            <p className='font-["Source Sans 3"] font-[400] text-[15px] text-[#646874]'>Contact Us</p>
        </div>


        <div>
            <h2 className='font-["Source Sans 3"] font-[600] text-[18.84px] text-[#0E2368]'>Social Links</h2>
            <div className='flex flex-row justify-center items-center'>
                <img src= {sm3} alt="" className='w-[21px] h-[21px]'/>
                <img src= {sm1} alt="" />
                <img src={sm2} alt="" className='w-[21px] h-[21px]' />
            </div>
        </div>

    </footer>
  )
}

export default Footer