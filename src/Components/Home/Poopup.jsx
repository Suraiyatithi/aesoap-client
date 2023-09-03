import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import img from '../../assets/Aesop_Home_2023_Post-Poo_Drops_Web_Homepage_Secondary_Mid_Desktop_2560x1540px.avif'
import { BsArrowRight, BsArrowUpRight } from "react-icons/bs";
const Poopup = () => {
    return (
        <div className='mt-24'>
        <div className="lg:flex justify-between space-x-10">
        <div className="lg:w-3/5">
             <img className='' src={img}></img>
         </div>
         <div className="lg:w-2/5 lg:pl-16 sm:p-10">
       
         <h6 className='text-3xl mt-5 mb-7'>  Post-Poo Drops has <br /> returned </h6>
         


     <p className='text-md'>
     Here to make the malodorous melodious once again. Dispense this favoured formulation into the toilet bowl after
      flushing to effectively mask disagreeable odours.
            </p>
            <div className='border border-dark text-dark hover:bg-zinc-700 hover:text-white p-3 mr-24 mt-10 flex justify-between'>Discover Post-Poo Drops 
     <BsArrowRight className='m-2'/></div>
         </div>
       
        </div>
             </div>
    );
};

export default Poopup;