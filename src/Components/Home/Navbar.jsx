import React from 'react';
import { FaBeer, FaSearch } from "react-icons/fa";

const Navbar = () => {
    return (
        <div>
            <div className="bg-[#c2c2af]">
                <p className='p-2 text-center'>Trained Aesop consultations are available to provide bespoke skin care advise.<span className='font-semi-bold'> Book a video consultation</span></p>
            </div>
            <div className="bg-[#252525]">
                <p className='p-2 text-white text-center'>Click and Collect is now available at Hong Kong stores. Enjoy complimentary shipping on orders over HK$400 &nbsp; &nbsp; &nbsp; +</p>
            </div>
            <div className="">
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Skin Care</a></li>
        <li>
          <a>Body & Hand</a> </li>
  <li><a href="">  Hair</a></li>
  <li><a>Fragrance</a></li>
  <li><a>Home</a></li>
  <li><a>Kits & Travel</a></li>
  <li><a>Gifts</a></li>
  <li><a>Read</a></li>
  <li><a>Stores</a></li>
  <li><a>Facial Appointments</a></li>
  <li><a>Log in</a></li>
  <li><a href="">Cabinet</a></li>
       
        <li><a>Cart</a></li>
      </ul>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li><a>Skin Care</a></li>
        <li>
          <a>Body & Hand</a> </li>
  <li><a href="">  Hair</a></li>
  <li><a>Fragrance</a></li>
  <li><a>Home</a></li>
  <li><a>Kits & Travel</a></li>
  <li><a>Gifts</a></li>
  <li><a>Read</a></li>
  <li><a>Stores</a></li>
  <li><a>Facial Appointments</a></li>
  <li><a href=""><FaSearch></FaSearch>  </a></li>
  <li className='lg:ml-24'><a>Log in</a></li>
  <li><a href="">Cabinet</a></li>
       
        <li><a>Cart</a></li>
      </ul>
  </div>

</div>
            </div>
        </div>
        </div>
    );
};

export default Navbar;