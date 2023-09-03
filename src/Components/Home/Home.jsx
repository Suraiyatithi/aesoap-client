import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import Forbody from './Forbody';
import Autheneum from './Autheneum';
import Poopup from './Poopup';
import Store from './Store';
import Quoto from './Quoto';
import Footer from './Footer';
import Forskin from './Forskin';
import ForHome from './ForHome';

const Home = () => {
    return (
        <div className='font-serif '>
           <Navbar></Navbar> 
           <Banner></Banner>
           <Forbody></Forbody>
           <Autheneum></Autheneum>
           <Forskin></Forskin>
           <Poopup></Poopup>
           <ForHome></ForHome>
           <Store></Store>
           <Quoto></Quoto>
           <Footer></Footer>
        </div>
    );
};

export default Home;