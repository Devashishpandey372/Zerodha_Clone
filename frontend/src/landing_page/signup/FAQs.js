import React, { useState } from 'react';

function FAQs() {
    const faqsData = [
        {
            question: "What is a Zerodha account?",
            answer: "A Zerodha account is a combined demat and trading account that allows investors to buy, sell, and hold securities digitally."
        },
        {
            question: "What documents are required to open a demat account?",
            answer: "You will need your PAN card, Aadhaar card, a canceled cheque, and a photo with your signature."
        },
        {
            question: "Is Zerodha account opening free?",
            answer: "No, there is a nominal fee for opening an account depending on the type of account you choose."
        },
        {
            question: "Are there any AMC (Account Maintenance Charges) for a demat account?",
            answer: "Yes, AMC is charged quarterly based on the value of your holdings."
        },
        {
            question: "Can I open a demat account without a bank account?",
            answer: "To open a demat account, you must have a bank account in your name. If UPI verification is completed successfully, no proof of bank is needed. However, if bank verification fails, you'll need to provide either a cancelled cheque or a bank statement to link your bank account to Zerodha."
        },
        {
            question: "What is a Basic Services Demat Account (BSDA)?",
            answer: "BSDA is a demat account designed for retail investors with smaller holdings. It automatically applies if you have only one demat account per PAN and holdings of up to ₹10 lakhs in it. You will not be charged any Account Maintenance Charge (AMC) for holdings up to ₹4 lakhs value, and only ₹25/quarter if holdings are between ₹4 lakhs and ₹10 lakhs."
        },
        {
            question: "Can I open a demat and trading account using the mobile app?",
            answer: "Yes, you can complete the entire account opening process online using the official mobile application."
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0); 

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return ( 
        <div className='container mt-5'>
            <div className='row justify-content-center'>
                
                {/* YAHAN CHANGE KIYA HAI: Width badhane ke liye col-md-10 kar diya */}
                <div className='col-12 col-md-9'> 
                    
                    <h2 className='fs-4 mb-5' style={{ fontWeight: "500" }}>FAQs</h2>
                    
                    <div>
                        {faqsData.map((faq, index) => (
                            <div 
                                key={index} 
                                className="pt-3 pb-4" 
                                style={{ borderBottom: "1px solid #eee" }} 
                            >
                                <div style={{ width: "40px", height: "3px", backgroundColor: "#387ed1", marginBottom: "20px" }}></div>
                                
                                <div 
                                    className="d-flex justify-content-between align-items-center" 
                                    onClick={() => toggleFAQ(index)}
                                    style={{ cursor: "pointer" }}
                                >
                                    <h3 className="fs-6 mb-0 text-dark" style={{ fontWeight: "400" }}>
                                        {faq.question}
                                    </h3>
                                    
                                    <span className="text-muted" style={{ fontSize: "12px", transition: "0.3s" }}>
                                        {activeIndex === index ? '▲' : '▼'}
                                    </span>
                                </div>
                                
                                {activeIndex === index && (
                                    <div className="mt-4 text-muted" style={{ fontSize: "15px", lineHeight: "1.6" }}>
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
     );
}

export default FAQs;