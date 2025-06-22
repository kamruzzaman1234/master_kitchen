import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Banner = ()=>{
    return(
        <div className="py-[80px] bg-black">
            <div className="max-w-[1300px] mx-auto w-full">
                <div className="lg:flex lg:justify-between lg:items-center md:flex-row flex-col">
                    <div className="w-[400px] h-[450px]">
                        <img src="https://i.ibb.co/67b1mbX5/bg-remove.png" className="w-full h-full object-cover"
                         alt="" />
                    </div>
                    <div className="w-full h-full   lg:w-[600px] lg:h-[400px]">
                         
        <Swiper
          pagination={{
            type: 'progressbar',
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
      >
        <SwiperSlide className="w-[100%] h-full"><img className="w-full h-full object-cover"
         src="https://i.ibb.co/LzQCjyPZ/pexels-rohanmuzafar-3054690.jpg"
          alt="" /></SwiperSlide>
         <SwiperSlide className="w-[100%] h-full"><img className="w-full h-full"
         src="https://i.ibb.co/4wjNNY2x/pexels-adrian-dorobantu-989175-2170317.jpg"
          alt="" /></SwiperSlide> <SwiperSlide className="w-[100%] h-full"><img className="w-full h-full object-cover"
         src="https://i.ibb.co/jvRWRwHg/pexels-mvdheuvel-2284166.jpg"
          alt="" /></SwiperSlide> <SwiperSlide className="w-[100%] h-full"><img className="w-full h-full object-cover"
         src="https://i.ibb.co/bjHtnZ6Z/pexels-reneterp-2977515.jpg"
          alt="" /></SwiperSlide>
     </Swiper>
                    </div>
                </div> 
            </div>
        </div>
    )
}
export default Banner;