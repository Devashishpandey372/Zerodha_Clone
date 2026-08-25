import React from 'react'

function Stats() {
    return ( 
        <div className='container my-5'>
            <div className='row pt-5'>
                <div className='col-5' style={{ paddingLeft: "110px", paddingRight: "30px" }}>
                    <h1 className='mb-5' style={{color:"#424242" , fontSize:"26px"}}>Trust with confidence</h1>
                    <h2 style={{color:"#424242", fontSize:"22px"}}>Customer-first always</h2>
                    <p className='text-muted' style={{marginBottom:"32px", fontSize:"17px", lineHeight:"29px"}}>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                    <h2 className='fs-5 mt-4' style={{color:"#424242"}}>No spam or gimmicks</h2>
                    <p className='text-muted' style={{marginBottom:"32px", fontSize:"17px", lineHeight:"29px"}}>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. <a href='#' className='text-decoration-none'>Our philosophies.</a></p> 
                    <h2 className='fs-5 mt-4' style={{color:"#424242"}}>The Zerodha universe</h2>
                    <p className='text-muted' style={{marginBottom:"32px",fontSize:"17px", lineHeight:"29px"}}>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h2 className='fs-5 mt-4' style={{color:"#424242"}}>Do better with money</h2>
                    <p className='text-muted' style={{marginBottom:"32px", fontSize:"17px", lineHeight:"29px"}}>With initiatives like <a href='#' className='text-decoration-none'>Nudge</a> and <a href='#' className='text-decoration-none'>Kill Switch</a>, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>

                <div className='col-7'>
                    <img src='media/images/ecosystem.png' style={{width:"85%"}}/>

                    <div className='text-center'>
                        <a href='#' className='text-decoration-none mx-5'>Explore our products <i class="fa-solid fa-arrow-right-long" aria-hidden="true"></i> </a>
                        <a href='#' className='text-decoration-none'>Try Kite demo <i class="fa-solid fa-arrow-right-long"></i> </a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;