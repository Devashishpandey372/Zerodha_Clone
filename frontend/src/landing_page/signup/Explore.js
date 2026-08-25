import React from 'react'

function Explore() {
    return ( 
        <div className='container mt-5 mb-5'>
            <h2 className='fs-3 text-center mb-5'>Explore different account types</h2>
            
            <div className='row justify-content-center gap-4'>
                
                {/* Column 1 */}
                <div className='col-3'>
                    <div className='border p-4 mb-5 rounded'>
                        {/* Heading aur Image ka Wrapper */}
                        <div className="d-flex align-items-center mb-3">
                            <img src="/media/images/acop-individual.svg" alt="icon" style={{ width: "30px" }} className="me-3" />
                            <h2 className='fs-5 mb-0'>Individual Account</h2>
                        </div>
                        <p className='text-muted mb-0'>Invest in equity, mutual funds and derivatives</p>
                    </div>

                    <div className='border p-4 rounded'>
                        <div className="d-flex align-items-center mb-3">
                            <img src="/media/images/acop-minor.svg" alt="icon" style={{ width: "30px" }} className="me-3" />
                            <h2 className='fs-5 mb-0'>Minor Account</h2>
                        </div>
                        <p className='text-muted mb-0'>Teach your little ones about money & invest for their future with them</p>
                    </div>
                </div>
                    
                {/* Column 2 */}
                <div className='col-3'>
                    <div className='border p-4 mb-5 rounded'>
                        <div className="d-flex align-items-center mb-3">
                            <img src="/media/images/acop-huf.svg" alt="icon" style={{ width: "30px" }} className="me-3" />
                            <h2 className='fs-5 mb-0'>NRI Account</h2>
                        </div>
                        <p className='text-muted mb-0'>Invest in equity, mutual funds, debentures, and more</p>
                    </div>

                    <div className='border p-4 rounded'>
                        <div className="d-flex align-items-center mb-3">
                            <img src="/media/images/acop-corporate.svg" alt="icon" style={{ width: "30px" }} className="me-3" />
                            <h2 className='fs-5 mb-0'>Corporate / LLP</h2>
                        </div>
                        <p className='text-muted mb-0'>Manage your bussiness surplus and investments easily</p>
                    </div>
                </div>

                {/* Column 3 */}
                <div className='col-3'>
                    <div className='border p-4 rounded'>
                        <div className="d-flex align-items-center mb-3">
                            <img src="/media/images/acop-nri.svg" alt="icon" style={{ width: "30px" }} className="me-3" />
                            <h2 className='fs-5 mb-0'>HUF Account</h2>
                        </div>
                        <p className='text-muted mb-0'>Make tax-efficient investments for family</p>
                    </div>
                </div>
                
            </div>
        </div>
     );
}

export default Explore;