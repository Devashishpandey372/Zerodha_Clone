import React from 'react';

import Hero from './Hero';
import About from './About';
import Team from './Team';

import Navbar from '../Navbar';
import Footer from '../Footer';

function AboutPage() {
    return ( 
        <>
            <Hero />
            <About />
            <Team />
        </>
     );
}

export default AboutPage;