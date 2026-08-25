import React from 'react'

function Hero () {
    return ( 
        <div className='container'>
            <div className='row text-center py-5 my-5 border-bottom'>
                <h1 className=' mb-3' style={{fontSize:"30px"}}>Zerodha Products</h1>
                <h2 className='h5 text-muted mb-4'>Sleek, modern, and intuitive trading platforms</h2>
                <p className='fs-6 text-muted mb-5 pb-4'>Check out our <a href='#' className='text-decoration-none'>investment offerings →</a></p>
            </div>
        </div>
     );
}

export default Hero ;