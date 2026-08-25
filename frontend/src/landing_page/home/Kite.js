import React from 'react'

function Kite() {
    return (
        <div className='pt-3' style={{ backgroundColor: "#F6FBFF"}}>
            <div className='container' style={{margin: "0px 20px 120px"}}>
                <div className='row align-items-center'>
                    <div className='col-3'>
                        <img src='media\images\kc-logo-landing.svg' alt='Kite Connect logo' style={{ width:"65%", transform: "translateY(-10px)", marginLeft: "175px" }}/>
                    </div>
                    <div className='col-6 text-muted mb-0 pl-0' style={{fontSize:"15px", paddingLeft: "85px"}}>
                        <p style={{ width: "110%" }}>Need more? Build your own trading and investing experience with Kite Connect, simple HTTP APIs to place orders, stream market data, manage your account, and more. <a href='#' className='text-decoration-none text-nowrap'>Explore <i class="fa-solid fa-arrow-right"></i> </a> </p>
                    </div>
                    <div className='col-3 text-center'>
                        <img src='media\images\kc-banner-image.svg' alt='kc-banner' style={{width:"70%", transform: "translateY(-10px)"}}/>
                    </div>
                </div>
            </div>
        </div>
      );
}

export default Kite;