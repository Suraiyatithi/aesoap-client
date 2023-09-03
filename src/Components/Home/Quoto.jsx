import React,{useEffect} from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const Quoto = () => {
             
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
        <div className='lg:mt-36  lg:mb-36  sm:mt-24 md:mt-24 sm:mb-24'>
            <div className="text-center">
           <h1 data-aos="fade-right" className='text-3xl mb-8 '> ‘Life never becomes a habit to me. It&apos;s always a <br />marvel.’</h1>
<p data-aos="fade-right" className=''>Katherine Mansfield</p>
            </div>
        </div>
    );
};

export default Quoto;