import React from 'react'

function Benefits() {
    return ( 
        <div className='container m-5 p-4'>
        <div className='row'>
            <div className='col-6'>
                <img className='mb-4' src='/media/images/acop-benefits.svg' style={{width:"60%", marginTop:"140px", marginLeft:"150px" }}/>
                <h2 className='fs-4 ms-5'>Benefits of opening a Zerodha demat account</h2>
            </div>
            <div className='col-6 px-5'>
                <h2 className='fs-5 my-4'>Unbeatable pricing</h2>
                <p className='pb-4'>Zero charges for equity & mutual fund investments. Flat ₹20 fees for intraday and F&O trades.</p>
                <h2 className='fs-5 my-4'>Best investing experience</h2>
                <p className='pb-4'>Simple and intuitive trading platform with an easy-to-understand user interface.</p>
                <h2 className='fs-5 my-4'>No spam or gimmicks</h2>
                <p className='pb-4'>Committed to transparency — no gimmicks, spam, "gamification", or intrusive push notifications.</p>
                <h2 className='fs-5 my-4'>The Zerodha universe</h2>
                <p className='pb-4'>More than just an app — gain free access to the entire ecosystem of our partner products.</p>
            </div>
        </div>
    </div>
     );
}

export default Benefits;