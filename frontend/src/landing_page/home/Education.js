import React from 'react'

function Education() {
    return ( 
        <div className='container '>
            {/* align-items-center add kiya taaki dono ek dusre ke aamne samne vertically center ho jayein */}
            <div className='row align-items-center pb-2'>
                <div className='col-5 offset-1' style={{marginLeft: "100px" }}>
                    <img src='media\images\index-education.svg' alt='Education' style={{ width: "83%" }}/>
                </div>

                <div className='col-6 ' style={{marginLeft:"10px"}}>
                    <h1 className='fs-4 pb-3' style={{color:"#424242"}}>Free and open market education</h1>
                    <p style={{color:"#424242"}}>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <p className='pb-3' style={{color:"#424242"}}><a href='#' style={{textDecoration:"none"}}>Varsity  <i class="fa-solid fa-arrow-right"></i></a></p>
                    <p style={{color:"#424242"}}>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <p><a href='#'  style={{textDecoration:"none"}}>TradingQ&A  <i class="fa-solid fa-arrow-right"></i></a></p>
                </div>
            </div>
        </div>
     );
}

export default Education;