import React from 'react'

function Hero () {
    return ( 
        <div className='container p-5'>
            <div className='row text-center'>
                <img src='media/images/homeHero.svg' alt='Hero Image' className='mb-5 mt-4 mx-auto d-block' style={{ width: "60%" }} />
                <h2 className='mt-3 fs-2' style={{ color: "#424242" }}>Invest in everything</h2>
                <p className='fs-5 fs-4' style={{ color: "#424242" }}>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className=' btn p-2 mt-4 fs-5' style={{width:"17%", margin: "0 auto", backgroundColor:"#387ed1", color:"white"}}>Sign up for free</button>
            </div>
        </div>
     );
}

export default Hero ;