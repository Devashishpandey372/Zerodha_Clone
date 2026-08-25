import React from 'react';
import Hero from './Hero';
import Stats from './Stats';
import Kite from './Kite';
import Pricing from './Pricing';
import Education from './Education';

import Navbar from '../Navbar';
import OpenAccount from '../OpenAccount';
import Footer from '../Footer';

function HomePage() {
    return ( 
        <>
            
            <Hero/>
            <Stats/>
            <Kite/>
            <Pricing/>
            <Education/>
            <OpenAccount/>
            
        </>
     );
}

export default HomePage;