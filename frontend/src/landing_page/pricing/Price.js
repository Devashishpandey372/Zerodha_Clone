import React from 'react'

function Price () {
    return ( 
        <div className='container'>
            <div className='row text-center pb-5' style={{ padding: "0 6%" }}>
                <div className='col-4 '>
                    <img src='media\images\pricing-0.svg' style={{width:"70%"}}/>
                    <h1 className='h3 pt-4 pb-3'>Free equity delivery</h1>
                    <p style={{lineHeight:"1.8"}}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4 '>
                    <img src='media\images\pricing-20.svg' style={{width:"70%"}}/>
                    <h1 className='h3 pt-4 pb-3'>Intraday and F&O trades</h1>
                    <p style={{lineHeight:"1.8"}}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-4 '>
                    <img src='media\images\pricing-0.svg' style={{width:"70%"}}/>
                    <h1 className='h3 pt-4 pb-3'>Free direct MF</h1>
                    <p style={{lineHeight:"1.8"}}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
     );
}

export default Price ;