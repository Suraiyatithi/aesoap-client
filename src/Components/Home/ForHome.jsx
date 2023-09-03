
import React, { useRef,useEffect,useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';


import '../Allcss/Allcss.css';
import { Keyboard, Scrollbar, Navigation } from 'swiper/modules';
import img1 from '../../assets/Aesop_Home_Post-Poo_Drops_100mL_Web_Large_782x796px.avif';
import img2 from '../../assets/forhome2.jpg';
import img3 from '../../assets/forhome.jpg';
import img4 from '../../assets/forhome6.jpg'

import { BsArrowRight } from 'react-icons/bs';

const ForHome = () => {
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
        <div className='lg:mb-56'>
             <Swiper
        ref={swiperRef}
        slidesPerView={3}
        spaceBetween={30}
        pagination={false} 
        modules={[Keyboard, Scrollbar, Navigation]}
        className="mySwiper relative"
      > 
          
      



        <SwiperSlide>
   <div className="">
   <p className='sm:mt-12  lg:mt-24 '> For the home</p>
       <h1 className='text-3xl mb-10'>    Domestic pleasures</h1>
<p>Our range of aromatic formulations for the home are practical and pleasing in equal measure.</p>

<p className='flex mt-10'>
See all Home <BsArrowRight className='mt-1 ml-2'></BsArrowRight> </p>
   </div>






        </SwiperSlide>
        <SwiperSlide className='mr-10 lg:mt-36'><div className="text-center">
        <img src={img1} alt="" />
        <p className='font-semibold lg:mr-24 '>Nurture Bar Soap</p>
        <p className='text-center lg:mr-24 '>Offers a mild yet effective cleanse</p>
        </div>
        </SwiperSlide>
        <SwiperSlide className='lg:ml-24 lg:mt-56'>
          <div className="text-center">
          <img src={img2} alt="" />
       <p className='font-semibold mr-24 '>     Ptolemy Aromatique Candle</p>
       <p className='text-center mr-24'>A sensuous blend of leather, smoke and wood</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className='lg:ml-24 lg:mt-56'><div className="text-center">
        <img className='' src={img2} alt="" />
     <p className='font-semibold text-center'>Bronze Incense Holder</p>
     <p className='text-center '>A sensuous blend of leather, smoke and wood</p>
        </div>


        </SwiperSlide>
        <SwiperSlide className='lg:ml-24 lg:mt-56'><div className="text-center">
        <img className='' src={img2} alt="" />
     <p className='font-semibold text-center'>Callippus Aromatique Candle</p>
     <p className='text-center '>A sensuous blend of leather, smoke and wood</p>
        </div>


        </SwiperSlide> <SwiperSlide className='lg:ml-24 lg:mt-96'><div className="text-center">
        <img className='' src={img3} alt="" />
     <p className='font-semibold text-center'>Refresh Bar Soap</p>
     <p className='text-center '>Offers a thorough and enlivening cleanse</p>
        </div>


        </SwiperSlide> 
        <SwiperSlide className='lg:ml-24 lg:mt-56'><div className="text-center">
        <img className='' src={img4} alt="" />
     <p className='font-semibold text-center'> Sarashina Aromatique Incense </p>
     <p className='text-center '>A stick of Sarashina Aromatique Incense in the Kanuma pumice holder, alongside carton packaging. </p>
        </div>


        </SwiperSlide> 
        
        <SwiperSlide className='lg:ml-24 lg:mt-56'><div className="text-center">
        <img className='' src={img4} alt="" />
     <p className='font-semibold text-center'>For those who favour aromas of warm spice</p>
     <p className='text-center '>A stick of Murasaki Aromatique Incense in the Kanuma pumice holder, alongside carton packaging.</p>
        </div>


        </SwiperSlide> 
        <SwiperSlide className='lg:ml-24 lg:mt-56'><div className="text-center">
        <img className='' src={img4} alt="" />
     <p className='font-semibold text-center'>For those particularly partial to Vetiver</p>
     <p className='text-center '>A stick of Sarashina Aromatique Incense in the Kanuma pumice holder, alongside carton packaging. </p>
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

export default ForHome;