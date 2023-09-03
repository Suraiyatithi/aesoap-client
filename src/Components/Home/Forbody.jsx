
import React, { useRef,useEffect,useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';


import '../Allcss/Allcss.css';
import { Keyboard, Scrollbar, Navigation } from 'swiper/modules';
import img1 from '../../assets/bodysoap5.jpg';
import img2 from '../../assets/bodysoap3.jpg';
import img3 from '../../assets/bodysoap4.jpg';

import { BsArrowRight } from 'react-icons/bs';
const Forbody = () => {
  const swiperRef = useRef(null);
  const [isPrevButtonVisible, setIsPrevButtonVisible] = useState(false);

  useEffect(() => {
    const swiper = swiperRef.current && swiperRef.current.swiper;

    if (swiper) {
      // Listen to the "slideChange" event to determine whether to show the previous button
      swiper.on('slideChange', () => {
        setIsPrevButtonVisible(swiper.activeIndex > 0);
      });

      // Trigger an initial check to hide the previous button if needed
      setIsPrevButtonVisible(swiper.activeIndex > 0);
    }
  }, []);

  const handleNext = () => {
    try {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slideNext();
      }
    } catch (error) {
      console.error('Error in handleNext:', error);
    }
  };

  const handlePrev = () => {
    try {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slidePrev();
      }
    } catch (error) {
      console.error('Error in handlePrev:', error);
    }
  };
  return (
    <div className=" lg:mb-56 lg:mt-24 sm:mt-12 md:mt-16 sm:mb-12 md:mb-16">
     
     <Swiper
        ref={swiperRef}
        slidesPerView={3}
        spaceBetween={30}
        pagination={false} 
        modules={[Keyboard, Scrollbar, Navigation]}
        className="mySwiper relative"
      > 
          
   
        <SwiperSlide>
   <div className="lg:mb-56">
   <p className='sm:mt-12  lg:mt-24 '> For the body</p>
       <h1 className='text-3xl mb-10'>An Expression of Care</h1>
<p>Aesop formulations offer the body deserving care, to cleanse, replenish, 
and nourish skin. Each product is a sensory pleasure to use with its own delightful aroma.</p>

<p className='flex mt-10'>See all Body Care<BsArrowRight className='mt-1 ml-2'></BsArrowRight> </p>
   </div>




        </SwiperSlide>
        <SwiperSlide className='mr-10 lg:mt-56'><div className="text-center p-12">
        <img src={img1} alt="" />
        <p className='font-semibold lg:mr-24 '>Nurture Bar Soap</p>
        <p className='text-center lg:mr-24 '>Offers a mild yet effective cleanse</p>
        </div>
        </SwiperSlide>
        <SwiperSlide className='lg:ml-24 lg:mt-56'>
          <div className="text-center p-12">
          <img src={img2} alt="" />
       <p className='font-semibold mr-24 '>   Polish Bar Soap</p>
       <p className='text-center mr-24'>Thoroughly cleanses and exfoliates skin</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='lg:ml-24 lg:mt-56'><div className="text-center p-12">
        <img className='' src={img3} alt="" />
     <p className='font-semibold text-center'>Refresh Bar Soap</p>
     <p className='text-center '>Offers a thorough and enlivening cleanse</p>
        </div>


        </SwiperSlide>
      
      </Swiper>
      {/* absolute inset-x-0 bottom-8 -py-1*/}
      {/* Custom navigation buttons */}
      <div className=" relative custom-navigation flex ">
      
        <div className="absolute right-0 top-0">
        <button className="custom-next relatve text-white text-7xl bg-black py-2 px-4" onClick={handleNext}>
          &gt;
        </button>
        </div>
        {isPrevButtonVisible && (
       <div className="absolute top-0 left-0">
           <button className="custom-prev relative text-white text-7xl bg-black py-2 px-4" onClick={handlePrev}>
            &lt;
          </button>
       </div>
        )}
      </div>
   
    </div>
  );
};

export default Forbody;

