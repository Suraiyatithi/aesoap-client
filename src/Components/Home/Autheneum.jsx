import React ,{useEffect}from 'react';
import img from '../../assets/Aesop_Article_Summer_Skin_Care_2020_Mid_1_Desktop_2560x1440px.jpg'
import { FaArrowCircleRight, FaArrowRight } from 'react-icons/fa';
import { BsArrowRight, BsArrowUpRight } from "react-icons/bs";
import 'aos/dist/aos.css';
import AOS from 'aos';

const Autheneum = () => {
          
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
        <div className='mt-24'>
   <div className="lg:flex justify-between space-x-10">
    <div className="lg:w-2/5 lg:pl-16 sm:p-10">
    <p className=''data-aos="fade-right">The Athenaeum</p>
    <h6 className='text-3xl mt-5 mb-7'data-aos="fade-right">       The warm-up </h6>
<p className='text-md'data-aos="fade-right">
In The Athenaeum, our digital reading room: a guide to ensuring a healthy complexion through the warmer months. 
       </p>
       <div data-aos='fade-right' className='border border-dark text-dark hover:bg-zinc-700 hover:text-white p-3 mr-24  sm:mb-10 mt-10 flex justify-between'>Read more 
<BsArrowRight className='m-2'/></div>
    </div>
    <div className="lg:w-3/5">
        <img data-aos="fade-left" className='' src={img}></img>
    </div>
   </div>
        </div>
    );
};

export default Autheneum;