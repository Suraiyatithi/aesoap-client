import React ,{useEffect}from 'react';
import bg6 from '../../assets/banner.jpg'
import '../Allcss/Allcss.css'
import { FaArrowRight } from 'react-icons/fa';
import { BsArrowRight, BsArrowUpRight } from "react-icons/bs";
import 'aos/dist/aos.css';
import AOS from 'aos';

const Banner = () => {
           
  const triggerAnimations = () => {
    AOS.refresh(); // Refresh AOS to trigger animations
  };

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
    });

    // Attach the scroll event listener
    window.addEventListener('scroll', triggerAnimations);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', triggerAnimations);
    };
  }, []);
    return (
        <div className="bg-cover bg-no-repeat background w-full h-screen flex-items-center" style={{backgroundImage:`url(${bg6})`}}>
            <div className="lg:flex sm:p-10">
                <div className="lg:w-2/10">
                    <h1 data-aos="fade-right" className='text-white   lg:pt-20 lg:pl-12 text-center'> <span className='lg:text-5xl sm:text-xl mt-8'> Aesop</span>©</h1>
                </div>
                <div className="lg:w-3/10 content-center  mt-6 lg:pt-14 lg:mb-12 ms-8  text-white">
                <p data-aos="fade-right" className='mb-6 mt-8'>Bar Soaps</p>
             <p data-aos="fade-right" className=' text-4xl mb-6 '>   A body care classic,<br /> reimagined </p>

<p data-aos="fade-right" className='text-md leading-relaxed '>Breathing new life into the humble bar soap are <br /> Nurture, Polish and Refresh—three additions to <br /> the range, 
each imparting a unique <br /> constellation of benefits. </p>
<div data-aos="fade-right" className='border border-white text-white hover:bg-white hover:text-black p-3 lg:mt-10 sm:mb-14 flex justify-between'>Discover Bar Soaps 
<BsArrowRight className='m-2'/></div>
       
                </div>
     
                <div className="lg:w-5/10"></div>
            </div>

            
        </div>
    );
};

export default Banner;