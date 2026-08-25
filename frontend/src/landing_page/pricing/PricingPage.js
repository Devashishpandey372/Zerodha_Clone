import React from 'react'

import Hero from './Hero';
import Price from './Price';
import PricingTables from './PricingTables';
import ChargesForAcc from './ChargesForAcc';
import Demate from './Demate';
import ChargesForOpt from './ChargesForOpt';
import ChargesExp from './ChargesExp';

import Navbar from '../Navbar';
import Footer from '../Footer'

function PricingPage () {
    return ( 
        <>
            <Hero />
            <Price />
            <PricingTables />
            <ChargesForAcc />
            <Demate />
            <ChargesForOpt />
            <ChargesExp />
        </>
     );
}

export default PricingPage ;