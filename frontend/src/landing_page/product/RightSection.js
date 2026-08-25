import React from 'react'

function RightSection ({
    productName,
    productDescription,
    learnMore,
    imageURL,
}) {
    return ( 
        <div className='container '>
            <div className='row align-items-center' style={{ minHeight: "400px" }}>
                <div className='col-6' style={{ paddingLeft:"105px"}}>
                    <h1 className="h3 mb-3">{productName}</h1>
                    <p className=" text-muted fw-normal mb-0" style={{fontSize:"17px", lineHeight:"1.8", width:"80%"}}>{productDescription}</p>
                    <a href={learnMore} className="text-decoration-none fs-6">Learn More →</a>
                </div>

                <div className='col-6' style={{marginLeft:"-90px"}}>
                    <img src={imageURL} />
                </div>
            </div>
        </div>
     );
}

export default RightSection ;