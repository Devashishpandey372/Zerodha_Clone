import React from 'react'

function Investment() {
    return ( 
        <div className='container pb-5'>
            <h1 className='fs-3 text-center m-5'>Investment options with Zerodha demat account</h1>
            <div className='row m-5'>
                <div className='col-6'>
                    <div className="d-flex align-items-center m-5 px-5">
                        <img src='/media/images/stocks-acop.svg'/>
                        <div className='ms-4'>
                            <h1 className='fs-5'>Stocks</h1>
                            <p>Invest in all exchange-listed securities</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center m-5 px-5">
                        <img src='/media/images/ipo-acop.svg'/>
                        <div className='ms-4'>
                            <h1 className='fs-5'>IPO</h1>
                            <p>Apply to the latest IPOs instantly via UPI</p>
                        </div>
                    </div>

                </div>
                <div className='col-6'>
                    <div className="d-flex align-items-center my-5" style={{marginRight:"100px"}} >
                        <img src='/media/images/mf-acop.svg'/>
                        <div className='ms-4'>
                            <h1 className='fs-5'>Mutual funds</h1>
                            <p>Invest in commission-free direct mutual funds</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center my-5" style={{marginRight:"100px"}}>
                        <img src='/media/images/fo-acop.svg'/>
                        <div className='ms-4'>
                            <h1 className='fs-5'>Features & options</h1>
                            <p>Hedge and mitigate market risk through simplified F&O trading</p>
                        </div>
                    </div>
                </div>
                <div className='text-center mb-3'>
                    <button className='btn btn-primary fs-4 '>Explore Investment</button>
                </div>
            </div>
                
        </div>
     );
};

export default Investment;