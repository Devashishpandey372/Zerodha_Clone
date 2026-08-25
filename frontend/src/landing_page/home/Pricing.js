import React from 'react'

function Pricing() {
    return ( 
        <div>
            <div className='container ' style={{paddingBottom:"120px"}}>
                <div className='row'>
                    <div className='col-4 offset-1' style={{marginLeft:"100px"}}>
                        <h1 className='fs-4 mb-4' style={{color:"#424242"}}>Unbeatable pricing</h1>
                        <p style={{fontSize:"17px", width: "120%"}}>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                        <a href='#' className='text-decoration-none'>See pricing <i class="fa-solid fa-arrow-right"></i> </a>
                    </div>
                    <div className='col-7 d-flex justify-content-between pb-5'>
                        <div className=' position-relative d-flex align-items-center'>
                            <img src='media\images\pricing-0.svg' alt='Pricing 0' style={{ width: "50%", marginTop:"30px" }}/>
                            <p className='text-muted position-absolute w-100' style={{fontSize:"10px" , marginTop:"70px", marginLeft:"100px"}}>Free account <br /> opening</p>
                        </div>
                        
                        <div className=' position-relative d-flex align-items-center' >
                            <img src='media\images\pricing-0.svg' alt='Pricing 0' style={{ width: "50%", marginTop:"30px" }}/>
                            <p  className='text-muted position-absolute w-100 ' style={{fontSize:"10px", marginTop:"70px", marginLeft:"100px"}}>Free equity delivery <br /> and direct mutual funds</p>
                        </div>
                        
                        <div className=' position-relative d-flex align-items-center' >
                            <img src='media\images\pricing-20.svg' alt='Pricing 20' style={{ width: "50%", marginTop:"30px" }}/>
                        <p  className='text-muted position-absolute w-100 ' style={{fontSize:"10px" , marginTop:"68px" , marginLeft:"120px"}}>Intraday and <br /> F&O</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;