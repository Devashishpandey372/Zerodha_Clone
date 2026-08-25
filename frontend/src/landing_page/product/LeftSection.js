import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container my-5 ">
      <div className="row pt-4">
        <div className="col-6" style={{ paddingLeft: "120px" }}>
          <img src={imageURL} />
        </div>
        <div className="col-1">

        </div>
        <div className="col-5 p-5 mt-2">
          <h1 className="h3">{productName}</h1>
          <p className=" text-muted fw-normal mb-0" style={{fontSize:"17px", lineHeight:"1.8", width:"80%"}}>{productDescription}</p>

          <div>
            <a href={tryDemo} className="text-decoration-none fs-6" >Try Demo →</a>
            <a href={learnMore} className="text-decoration-none fs-6" style={{marginLeft:"50px"}}>Learn More →</a>
            
          </div>

          <div className="mt-3">
            <a href={googlePlay}>
              <img src="media\images\google-play-badge.svg"/>
            </a>
            <a href={appStore}>
              <img src="media\images\appstore-badge.svg" style={{marginLeft:"30px"}} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
