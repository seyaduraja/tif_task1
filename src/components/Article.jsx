import React from 'react'
import image1 from "../assets/image1.png"
import image2 from "../assets/image2.png"
import image3 from "../assets/image3.png"
import image4 from "../assets/image4.png"
import image5 from "../assets/image5.png"
import image6 from "../assets/image6.png"
import { Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { EffectCreative } from 'swiper/modules';

function Post (props) {
    return(
      <article className='flex flex-col w-[381px] h-[554px] gap-[10px] border-[2px] border-[#93A2D361] rounded-[20.94px] justify-center items-center '>
        <img src= {props.image} alt="" className='w-[326px] h-[257px]' />
        <div className='flex flex-col w-[295px] h-[195px] gap-[10px]'>
        <h2 className='font-["Poppins"] font-[700] text-[21px] text-[#0E2368]'>{props.posttitle}</h2>
        <p className='font-[Open Sans] font-[400] text-[15px] text-[#444957]'>
            PLorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard...</p>
        <button className='w-[131px] h-[42px] rounded-[21px] border-[1px] border-[#424961]'>Read more</button>
        </div>
      </article>
    )
}

function Article() {
  return (
    <div>
      <div className='md:ml-[130px]  mt-[130px]  '>
        <h1 className='font-[Source Sans 3] font-[600] text-[46px] md:text-[56px] leading-[42px] text-[#0E2368] text-center md:text-left '>Latest Articles</h1>
      </div>
         <div className='flex flex-row justify-center items-center pt-[50px] pb-[100px]'>
 
      <Swiper 
       
       // install Swiper modules
       modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
       spaceBetween={10}
       slidesPerView={1}
       
    
     
      //  breakpoints={{
      //    768: {
      //      slidesPerView: 3,
      //      spaceBetween: 40,
          
         
           
      //    },
      //  }}
       
    
       navigation
       pagination={{
        type: 'fraction',
      }}
       
       
     >
        <SwiperSlide > 
          <div className='flex flex-col md:flex-row justify-center items-center gap-[50px]'>
             <Post image={image1} posttitle = "Grilled  Tomatoes at Home"/>
             <Post image={image1} posttitle = "Grilled  Tomatoes at Home"/>
             <Post image={image1} posttitle = "Grilled  Tomatoes at Home"/>
          </div>
              
        </SwiperSlide>

        <SwiperSlide > 
          <div className='flex flex-col md:flex-row justify-center items-center gap-[50px]' >
             <Post image={image1} posttitle = "Grilled  Tomatoes at Home"/>
             <Post image={image1} posttitle = "Grilled  Tomatoes at Home"/>
             <Post image={image1} posttitle = "Grilled  Tomatoes at Home"/>
          </div>
              
        </SwiperSlide>


     </Swiper>
            


         </div>
    </div>
  )
}

export default Article