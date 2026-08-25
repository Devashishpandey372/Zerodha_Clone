import React from 'react'

function ChargesForOpt () {
    return ( 
        <div className='container' style={{maxWidth:"1130px"}}>
            <div className='table-responsive'>
                <h1 className='h4 mt-5 py-3'>Charges for account opening</h1>
                <table className='table text-muted border align-middle" style={{ fontSize: "15px" }}'>
                    <thead className='text-muted' style={{ borderBottom: "2px solid #dee2e6" }}>
                        <tr>
                            <th className='fw-normal py-3'>Service</th>
                            <th className='fw-normal py-3'>Billing Frequency</th>
                            <th className='fw-normal py-3'>Charges</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='py-3'>Tickertape</td>
                            <td className='py-3'>Monthly / Quarterly / Annual</td>
                            <td className='py-3'>Free: 0 | Pro: 249/699/2399</td>
                        </tr>
                        <tr>
                            <td className='py-3'>Smallcase</td>
                            <td className='py-3'>Per transaction</td>
                            <td className='py-3'>Buy & Invest More: 100 | SIP: 10</td>
                        </tr>
                        <tr>
                            <td className='py-3'>Kite Connect</td>
                            <td className='py-3'>Monthly</td>
                            <td className='py-3'>Connect: 500 | Personal: Free</td>
                        </tr>
                        
                    </tbody>
                </table>

            </div>
        </div>
     );
}

export default ChargesForOpt ;