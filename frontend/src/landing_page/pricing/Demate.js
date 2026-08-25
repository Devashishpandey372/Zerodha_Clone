import React from 'react'

function Demate () {
    return ( 
        <div className='container' style={{maxWidth:"1130px"}}>
            <div className='table-responsive'>
                <h1 className='h4 mt-5 py-3'>Demat AMC (Annual Maintenance Charge)</h1>
                <div 
                    className="mb-4 text-muted" 
                    style={{
                        backgroundColor: "#f4f8fe", // Light blue background
                        borderLeft: "4px solid #387ed1", // Dark blue left border
                        padding: "10px 15px", // Spacing inside the box
                        display: "inline-block", // Keeps the box only as wide as the text
                        fontSize: "15px"
                    }}
                >
                    Free for first year*
                </div>
                <p style={{fontSize:"12px"}}>From second year onwards, for BSDA accounts:</p>
                <table className='table text-muted border align-middle" style={{ fontSize: "15px" }}'>
                    <thead className='text-muted' style={{ borderBottom: "2px solid #dee2e6" }}>
                        <tr>
                            <th className='fw-normal py-3'>Value of holdings</th>
                            <th className='fw-normal py-3'>AMC</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='py-3'>Up to ₹4 lakh</td>
                            <td>
                                <span 
                                    style={{
                                        backgroundColor: "#4caf50", // Green background
                                        color: "white", 
                                        padding: "2px 6px", // Small padding to make it a badge
                                        borderRadius: "3px", // Slightly rounded corners
                                        fontSize: "12px",
                                        fontWeight: "500"
                                    }}
                                >
                                    FREE
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td className='py-3'>₹4 lakh – ₹10 lakh</td>
                            <td className='py-3'>₹100 per year + 18% GST, charged quarterly</td>
                        </tr>
                        <tr>
                            <td className='py-3'>Above ₹10 lakh</td>
                            <td className='py-3'>₹300 per year + 18% GST, charged quarterly</td>
                        </tr>
                    </tbody>
                </table>
                <p style={{fontSize:"12px"}}>For a non-BSDA account, AMC is ₹300 per year + 18% GST, regardless of holdings value, charged quarterly.</p>
                <p style={{fontSize:"12px"}}>To learn more about BSDA, <a href='#' className='text-decoration-none'>click here</a>. To learn more about AMC, <a href='#' className='text-decoration-none'>click here</a>.</p>
                <p style={{fontSize:"12px"}}>*Resident individual accounts only.</p>

            </div>
        </div>
     );
}

export default Demate ;