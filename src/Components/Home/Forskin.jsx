
import React, { useRef,useEffect,useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';


// import '../Allcss/Allcss.css';
import { Keyboard, Scrollbar, Navigation } from 'swiper/modules';
import img1 from '../../assets/Aesop_Skin_Lucent_Facial_Concentrate_60mL_Web_Large_684x668px.png';
import img2 from '../../assets/Aesop_Skin_Purifying_Facial_Cream_Cleanser_100mL_Web_Large_843x1000px.webp';
import img3 from '../../assets/forskin3.jpg';
import img4 from '../../assets/forskin4.jpg';
import img5 from '../../assets/forskin5.jpg';
import img6 from '../../assets/forskin7.jpg'
import '../Store/Forskin.css'

import { BsArrowRight } from 'react-icons/bs';

const Forskin = () => {
 
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
        <div className='lg:mt-56 lg:mb-56 sm:mt-16 md:mt-16 sm:mb-12 md:mb-16'>
              <div className="">
     
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
   <p className='sm:mt-12  lg:mt-24 '>For the skin</p>
       <h1 className='text-3xl mb-10'>Attention for all types</h1>
<p>
The well-being of your skin is the product of hydration, nourishment,
 and protection through discerning rituals. Explore requisite skin care for all skin types.</p>

<p className='flex mt-10'>See all skin Care<BsArrowRight className='mt-1 ml-2'></BsArrowRight> </p>
   </div>

        </SwiperSlide>
        <SwiperSlide className=' lg:mt-56'><div className="text-center">
        <img className='w-full' src={img1} alt="" />
        <p className='font-semibold lg:mr-24 '>  Lucent Facial Concentrate</p>
        <p className='text-center lg:mr-24 '>A Vitamin C-rich layering serum</p>
        </div>
        </SwiperSlide>
        <SwiperSlide className='lg:ml-24 lg:mt-36 '>
          <div className="text-center">
          <img className='p-10' src={img2} alt="" />
       <p className='font-semibold mr-24 mt-3 '> Purifying Facial Cream Cleanser</p>
       <p className='text-center mr-24'>A daily cream cleanser for dry skin</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='lg:ml-24 lg:mt-96'><div className="text-center">
        <img className='' src={img3} alt="" />
     <p className='font-semibold text-center'>Camellia Nut Facial Hydrating Cream</p>
     <p className='text-center '>
For normal, dry or sensitive skin</p>
        </div>


        </SwiperSlide>
        <SwiperSlide className='lg:ml-24 lg:mt-96'><div className="text-center">
        <img className='' src={img4} alt="" />
     <p className='font-semibold text-center'>Parsley Seed Anti-Oxidant Eye Cream</p>
     <p className='text-center '>Nourishes delicate skin around eyes</p>
        </div>
        </SwiperSlide> 
        <SwiperSlide className='lg:ml-24 lg:mt-96'><div className="text-center">
        <img className='' src={img5} alt="" />
     <p className='font-semibold text-center'>B Triple C Facial Balancing Gel</p>
     <p className='text-center '>Anti-oxidant gel infused with Vitamin B and C</p>
        </div>


        </SwiperSlide>
        <SwiperSlide className='lg:ml-24 lg:mt-96'><div className="text-center">
        <img className='' src={img3} alt="" />
     <p className='font-semibold text-center'>Mandarin Facial Hydrating Cream</p>
     <p className='text-center '>Rapidly absorbed, lightly hydrating</p>
        </div>


        </SwiperSlide>
        <SwiperSlide className='lg:ml-24 lg:mt-36'><div className="text-center">
        <img className='' src={img6 } alt="" />
     <p className='font-semibold text-center mt-10'>Parsley Seed Anti-Oxidant Intense Serum</p>
     <p className='text-center '>Parsley Seed Anti-Oxidant Intense Serum</p>
        </div>


        </SwiperSlide>
        <SwiperSlide className='lg:ml-24 lg:mt-96'><div className="text-center">
        <img className='' src={img3} alt="" />
     <p className='font-semibold text-center'>A hydrating serum to bolster skin</p>
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
        </div>
    );
};

export default Forskin;