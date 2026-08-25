import React from 'react'

function ChargesForAcc () {
    return ( 
        <div className='container' style={{maxWidth:"1130px"}}>
            <div className='table-responsive'>
                <h1 className='h4 mt-5 py-3'>Charges for account opening</h1>
                <table className='table text-muted border align-middle" style={{ fontSize: "15px" }}'>
                    <thead className='text-muted' style={{ borderBottom: "2px solid #dee2e6" }}>
                        <tr>
                            <th className='fw-normal py-3'>Type of account</th>
                            <th className='fw-normal py-3'>Charges</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='py-3'>Individual account</td>
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
                            <td className='py-3'>Minor account</td>
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
                            <td className='py-3'>NRI account</td>
                            <td className='py-3'>₹ 500</td>
                        </tr>
                        <tr>
                            <td className='py-3'>HUF account</td>
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
                                {" "}
                                <span>(online) / ₹ 500 (offline)</span>
                            </td>
                        </tr>
                        <tr>
                            <td className='py-3'>Partnership, LLP, and Corporate accounts (offline only)</td>
                            <td className='py-3'>₹ 500</td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
     );
}

export default ChargesForAcc ;