import React from 'react'
import abtimg from "../assets/abtimg.png"
import "../css/About.css"

function About() {
  return (
    <section className='aboutsection'>
         <img src= {abtimg} alt="" className='hidden md:block' />
         <div className=' flex flex-col w-[340px]  gap-[25px] md:w-[447px] py-[100px] justify-center items-center md:items-start '>
            <h2 className='font-["Source Sans 3"] font-[600] text-[45px] leading-[27px] text-[#0E2368] text-center '>About Us</h2>
            <p className='font-[400] text-[12px] md:text-[15px] leading-[27px] text-center md:text-left'>
               Lorem Ipsum is simply dummy text of the printing and typesetting industry.
               Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
               when an unknown printer took a galley of type and scrambled it to make a type specimen book.
               t has survived not only five centuries.</p>
            <button className='text-white text-[16px] font-[700] rounded-[21px] w-[132px] h-[42px] bg-[#E23744] font-["Source Sans 3"] '>Read More</button>
         </div>
    </section>
  )
}

export default About