import React from 'react';
import img from '../../assets/Aesop_Article_Summer_Skin_Care_2020_Mid_1_Desktop_2560x1440px.jpg'
import { FaArrowCircleRight, FaArrowRight } from 'react-icons/fa';
import { BsArrowRight, BsArrowUpRight } from "react-icons/bs";

const Autheneum = () => {
    return (
        <div className='mt-24'>
   <div className="lg:flex justify-between space-x-10">
    <div className="lg:w-2/5 lg:pl-16 sm:p-10">
    <p className=''>The Athenaeum</p>
    <h6 className='text-3xl mt-5 mb-7'>       The warm-up </h6>
<p className='text-md'>
In The Athenaeum, our digital reading room: a guide to ensuring a healthy complexion through the warmer months. 
       </p>
       <div className='border border-dark text-dark hover:bg-zinc-700 hover:text-white p-3 mr-24  sm:mb-10 mt-10 flex justify-between'>Read more 
<BsArrowRight className='m-2'/></div>
    </div>
    <div className="lg:w-3/5">
        <img className='' src={img}></img>
    </div>
   </div>
        </div>
    );
};

export default Autheneum;