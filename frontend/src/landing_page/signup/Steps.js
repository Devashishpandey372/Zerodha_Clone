import React from 'react'

function Steps() {
    return ( 
        <div className=' bg-light'>
            <div className='container pt-3 pb-5'>
            <div className='row pb-3'>
            <h1 className='text-center fs-3 p-5'>Steps to open a demat account with Zerodha</h1>
            <div className='col-6'>
                        <img src='/media/images/steps-acop.svg' style={{width:"75%", marginLeft:"150px"}}/>
                    </div>
                    <div className='col-6 my-4'>
                        <h2 className='fs-5 m-4'>01 Enter the requested details</h2>
                        <hr></hr>
                        <h2 className='fs-5 m-4'>02 Complete e-sign & verification</h2>
                        <hr></hr>
                        <h2 className='fs-5 m-4'>03 Start investing!</h2>
                    </div>
            </div>
        </div>
        </div>
     );
}

export default Steps;