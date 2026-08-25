import React from 'react';

import Hero from './Hero';
import Signup from './Signup';
import Investment from './Investment';
import Steps from './Steps';
import Benefits from './Benefits';
import Explore from './Explore';
import FAQs from './FAQs';

import Navbar from '../Navbar';
import OpenAccount from '../OpenAccount';
import Footer from '../Footer';

function SignupPage () {
    return ( 
        <>
            <Hero />
            <Signup />
            <Investment />
            <Steps />
            <Benefits />
            <Explore />
            <FAQs />
            <OpenAccount />
        </>
     );
}

export default SignupPage ;