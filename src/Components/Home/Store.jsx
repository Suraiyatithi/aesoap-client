
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';


// import required modules

import { FaArrowRight } from 'react-icons/fa';
import img1 from '../../assets/Aesop_HK_Store_IFC_III_Hero_Bleed_Desktop_2880x1620px.jpg'
import img2 from '../../assets/Aesop_Fashion_Walk_II_Mid_Desktop_2560x1440px.avif'
import img3 from '../../assets/Aesop_MOKO_II_Mid_Desktop_2560x1440px.avif'
import '../Store/Store.css'
import { BsArrowRight, BsArrowUpRight } from "react-icons/bs";
const Store = () => {
    return (
        <div className='mt-24'>
        <div className="lg:flex justify-between space-x-10">
         <div className="lg:w-2/5 lg:pl-16 sm:p-10">
     
         <h6 className='text-3xl mt-5 mb-7'>    Store locator </h6>
       

     <p className='text-md'>
     Our consultants are available to host you in-store and provide tailored guidance on gift purchases. 
            </p>
            <div className='border border-dark text-dark hover:bg-zinc-700 hover:text-white p-3 mr-24  sm:mb-10 mt-10 flex justify-between'>Find a nearby store 
     <BsArrowRight className='m-2'/></div>
         </div>
         <div className="lg:w-3/5">
       
      {/* <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
  <SwiperSlide>
    <img className='w-full h-full object-cover' style={ {
                  display: "block",
                  width: '100%',
                  height: '100%',
                  }} src={img1} alt="" />
  </SwiperSlide>
  <SwiperSlide>
    <img className='w-full h-full object-cover' style={ {
                  display: "block",
                  width: '100%',
                  height: '100%',
                  }} src={img2} alt="" />
  </SwiperSlide>
  <SwiperSlide>
    <img className='w-full h-full object-cover' style={ {
                  display: "block",
                  width: '100%',
                  height: '100%',
                  }} src={img3} alt="" />
  </SwiperSlide>
</Swiper> */}

<Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[ Navigation]}
        className="mySwiper"
      >
        <SwiperSlide> <img className='w-full h-full object-cover' style={ {
                  display: "block",
                  width: '100%',
                  height: '100%',
                  }} src={img1} alt="" />
  </SwiperSlide>
        <SwiperSlide>
        <img className='w-full h-full object-cover' style={ {
                  display: "block",
                  width: '100%',
                  height: '100%',
                  }} src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img className='w-full h-full object-cover' style={ {
                  display: "block",
                  width: '100%',
                  height: '100%',
                  }} src={img3} alt="" />
        </SwiperSlide>
      
      </Swiper>

         </div>
        </div>
             </div>
    );
};

export default Store;