import React from 'react'

function Universe () {
    return ( 
        <div className='container'>
            <div className='row pt-5 mt-5 text-center'>
                <h1 className='h3 mb-4 '>The Zerodha Universe</h1>
                <p className='fs-6 fw-normal'>Extend your trading and investment experience even further with our partner platforms</p>
            </div>

            <div className='row text-center ' style={{ padding: "0 12%" }}>
                <div className='col-4 p-5' >
                    <img src='media\images\zerodhaFundhouse.png'style={{width:"85%"}}/>
                    <p className='mt-3' style={{color:"#9B9B9B", fontSize:"12px", lineHeight:"1.6"}}>Our asset management venture that is creating simple and transparent index funds to help you save for your goals.</p>
                </div>

                <div className='col-4 p-5 '>
                    <img src='media\images\sensibullLogo.svg'style={{width:"90%"}}/>
                    <p className='mt-4' style={{color:"#9B9B9B", fontSize:"12px", lineHeight:"1.6"}}>Options trading plateform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.</p>
                </div>

                <div className='col-4 p-5'>
                    <img src='media\images\tijori.svg' style={{width:"60%"}}/>
                    <p className='mt-3' style={{color:"#9B9B9B", fontSize:"12px", lineHeight:"1.6"}}>Investment research plateform that offers detailed insights on stocks, sectors, supply chains, and more.</p>
                </div>
                

            </div>

            <div className='row  text-center' style={{ padding: "0 12%" }}>
                <div className='col-4 p-5 pt-2'>
                    <img src='media\images\streakLogo.png'style={{width:"70%"}}/>
                    <p className='mt-2' style={{color:"#9B9B9B", fontSize:"12px", lineHeight:"1.6"}}>Systematic trading plateform that allows you to create and backtest strategies without coding.</p>
                </div>
                

                <div className='col-4 p-5 pt-2'>
                    <img src='media\images\smallcaseLogo.png'style={{width:"85%"}}/>
                    <p className='mt-2' style={{color:"#9B9B9B", fontSize:"12px", lineHeight:"1.6"}}>Thematic investing plateform that helps you invest in diversified baskets of stocks on ETFs.</p>
                </div>

                <div className='col-4 p-5 pt-2'>
                    <img src='media\images\dittoLogo.png'style={{width:"60%"}}/>
                    <p className='mt-2' style={{color:"#9B9B9B", fontSize:"12px", lineHeight:"1.6"}}>Personalized advice on life and health insurence. No spam and no mis-selling</p>
                </div>
                    <button className=' btn p-2 mb-4 fs-5 ' style={{width:"20%", margin: "0 auto", backgroundColor:"#387ed1", color:"white"}}>Sign up for free</button>
            </div>
            
        </div>
    );
}

export default Universe ;