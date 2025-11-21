import React, { useState } from "react";

function Slide({ slides }) {
  const [index, setIndex] = useState(0);

  const  handleRestart = () => {
    setIndex(0)
  }

  const handleNext = () => {
    setIndex((prev)=>prev+1)
  }

  const handlePrev = () => {
    setIndex((prev)=>prev-1)
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center text-dark user-select-none">Slide Show React</h1>
      <div className="container d-flex justify-content-evenly w-50 mt-4">
        <button className="btn btn-success btn-lg" onClick={handleRestart} disabled={index==0}>Restart</button>
        <button className="btn btn-success btn-lg" onClick={handlePrev} disabled={index==0}>Previous</button>
        <button className="btn btn-success btn-lg" onClick={handleNext} disabled={index==slides.length-1}>Next</button>
      </div>
      <div
        className="container border-2 bg-black mt-3 p-4 d-flex justify-content-center align-items-center flex-column text-white user-select-none"
        style={{ height: "500px", width: "100%" }}
      >
        <h1 className="m-3" style={{ fontSize: "75px" }}>
          {slides && slides[index].title}
        </h1>
        <p style={{ fontSize: "25px" }}>{ slides && slides[index].text}</p>
      </div>
    </div>
  );
}

export default Slide;
