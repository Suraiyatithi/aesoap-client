import React from 'react';
import { FaArrowRight, FaArrowUp, FaArrowsAlt, FaExpandArrowsAlt, FaLocationArrow, FaTicketAlt } from 'react-icons/fa';
import { BsArrowRight, BsArrowUpRight } from "react-icons/bs";
const Footer = () => {
    return (
        <div className='bg-neutral-900 text-white leading-loose divide-y-4 divide-solid lg:mt-24'>
            <div className="">
                <div className="lg:flex p-3">
                    <div className="lg:w-2/5 p-6">
                   <h4> Subscribe to Aesop communications</h4>
                   <p>____________________________________________</p>

<div className='text-xl font-bold p-1 border rounded border-white text-white hover:bg-zinc-500 hover:text-white  mt-4 flex justify-between'>
Email address
<BsArrowRight className='m-2'/></div>

<p className='flex'><FaTicketAlt></FaTicketAlt> Subscribe to receive communications from Aesop. By subscribing, 
you confirm you have read and understood our privacy policy.</p>
                    </div>
        <div className="w-3/5 md:flex lg:flex">
           <div className="lg:w-1/3 p-6">
                  <h4>  Orders and support</h4>
                  <p>_______________________</p>
<p className='flex'>Contact us<BsArrowUpRight className='pl-1 mt-2'/> </p>
<p className='flex'>FAQs<BsArrowUpRight className='pl-1 mt-2'></BsArrowUpRight> </p>
<p className='flex'>Shipping<BsArrowUpRight className='pl-1 mt-2'></BsArrowUpRight></p> 
<p className='flex'>Returns <BsArrowUpRight className='pl-1 mt-2'></BsArrowUpRight> </p>
<p>Order history</p>
<p>Terms and conditions</p>
                    </div>
                    <div className="lg:w-1/3 p-6">
                        <h4>  Services</h4>
                    <p>______________________</p>
                    <p>Live assistance</p>
                    <p>Corporate gifts</p>
                    <p>Facial Appointments</p>
                    <p>Click and Collect</p>
                    <p>Video consultation</p>
                    </div>
                    <div className="lg:w-1/3 p-6">
                   <h4> Location preferences</h4>
                    <p>______________________</p>
                    <p>Shipping:</p>
                    <p className='underline'>Hong Kong SAR, China</p>
                    <p>Language:</p>
                    <p className='underline'>English</p>
                    <p>繁體中文</p>
                    </div>
                    </div>
           </div>
            
                <div className="lg:flex">
                <div className="lg:w-2/5 p-6">
                   <h4> Sustainability</h4>
                   <p>______________________________________________</p>



<p className='flex'>All Aesop products are vegan, and we do not test our formulations or ingredients on animals. 
We are Leaping Bunny approved and a Certified B Corporation. Learn more</p>
                    </div>
                    <div className="w-3/5 md:flex lg:flex">
                    <div className="lg:w-1/3 p-6">
                   <h4>   About </h4>
                    <p>______________________</p>
                    <p>Our story</p>
                    <p>Foundation</p>
                    <p>Careers</p>
                    <p>Privacy policy</p>
                    <p>Accessibility</p>
                    <p>Cookie Policy</p>
                    </div>
                    <div className="lg:w-1/3 p-6">
                        <h4>   Social media</h4>
                        <p>_____________________</p>
                    <p className='flex'>Instagram <BsArrowUpRight className='pl-1 mt-2'></BsArrowUpRight> </p>
                    <p className='flex'>Twitter<BsArrowUpRight className='pl-1 mt-2'></BsArrowUpRight> </p>
                    <p className='flex'>LinkedIn <BsArrowUpRight className='pl-1 mt-2'></BsArrowUpRight></p>
                    <p>WeChat</p>
                    <p className='flex'>Weibo <BsArrowUpRight className='pl-1 mt-2'></BsArrowUpRight></p>
                    </div>
                </div>
                </div>
               
   
    
            </div>
            <div className="lg:p-8">
<h1 className='text-lg'>© Aesop</h1>
                </div>
        </div>
    );
};

export default Footer;