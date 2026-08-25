import React, { useState } from "react";

// Ek naya component banaya gaya hai jisme Bio ka dropdown logic hai
function TeamMember({ imageSrc, name, role, bioText }) {
  // Yeh state check karegi ki bio open hai ya close
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="col-4 text-center mb-5">
      <img
        style={{ borderRadius: "100%", width: "60%" }}
        src={imageSrc}
        alt={name}
      />
      <h1 className="text-center mt-3" style={{ fontSize: "18px" }}>
        {name}
      </h1>
      <h2 className="text-center text-muted" style={{ fontSize: "16px" }}>
        {role}
      </h2>
      
      {/* Bio Dropdown Button */}
      <div 
        className="text-muted mt-2" 
        style={{ cursor: "pointer", fontSize: "15px" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        Bio <span style={{ fontSize: "12px" }}>{isOpen ? "▲" : "▼"}</span>
      </div>

      {/* Bio ka content jo click karne pe dikhega */}
      {isOpen && (
        <p 
          className="text-muted mt-3 px-3 text-start mx-auto" 
          style={{ fontSize: "17px", lineHeight: "1.6" ,width: "65%" }}
        >
          {bioText}
        </p>
      )}
    </div>
  );
}

function Team() {
  return (
    <div className="container">
      {/* Row 1 */}
      <div className="row py-5">
        <TeamMember 
          imageSrc="media\images\Nikhil.jpg"
          name="Nikhil Kamath"
          role="Co-founder & CFO"
          bioText="Nikhil is an astute and experienced investor, and he heads financial planning at Zerodha. An avid reader, he always appreciates a good game of chess."
        />
        <TeamMember 
          imageSrc="media\images\Kailash.jpg"
          name="Dr. Kailash Nadh"
          role="CTO"
          bioText="Kailash has a PhD in Artificial Intelligence & Computational Linguistics, and is the brain behind all our technology and products. He has been a developer from his adolescence and continues to write code every day."
        />
        <TeamMember 
          imageSrc="media\images\Venu.jpg"
          name="Venu Madhav"
          role="COO"
          bioText="Venu is the backbone of Zerodha taking care of operations and ensuring that we are compliant to rules and regulations. He has over a dozen certifications in financial markets and is also proficient in technical analysis. Workouts, cycling, and adventuring is what he does outside of Zerodha."
        />
      </div>

      {/* Row 2 */}
      <div className="row py-2">
        <TeamMember 
          imageSrc="media\images\Seema.jpg"
          name="Seema Patil"
          role="Director"
          bioText="Seema who has lead the quality team since the beginning of Zerodha, is now a director. She is an extremely disciplined fitness enthusiast."
        />
        <TeamMember 
          imageSrc="media\images\Karthik.jpg"
          name="Karthik Rangappa"
          role="Chief of Education"
          bioText="Karthik Guru Rangappa single handledly wrote Varsity, Zerodha's massive educational program. He heads investor education initiatives at Zerodha and loves stock markets, classic rock, single malts, and photography."
        />
        <TeamMember 
          imageSrc="media\images\Austin.jpg"
          name="Austin Prakesh"
          role="Director Strategy"
          bioText="Austin is a successful self-made entrepreneur from Singapore. His area of specialty revolves around helping organisations including grow by optimizing revenue streams and creating growth strategies. He is a boxing enthusiast and loves collecting exquisite watches."
        />
      </div>
    </div>
  );
}

export default Team;