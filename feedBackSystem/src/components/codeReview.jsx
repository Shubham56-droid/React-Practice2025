import React, { useState } from 'react'

function codeReview() {
  const categories = [
    "Readibility",
    "Performance",
    "Security",
    "Documentation",
    "Testing"
  ];

  const [feedBack, setFeedBack] = useState(
    categories.map(() => ({ up: 0, down: 0 }))
  );


  const handleUpVote = (idx) => {
      const updated = [...feedBack];
      updated[idx].up += 1;
      setFeedBack(updated);
  }

  const handleDownVote = (idx) => {
    const updated = [...feedBack];
    updated[idx].down += 1;
    setFeedBack(updated);
  }

  return (
    <div className="container mt-5 p-3 d-flex flex-wrap justify-content-start align-items-center">

      {categories.map((ele,idx)=>(
            <div className="card ms-5 w-25 mt-5" key={idx}>
          <div className="card-header">
            <h3 className="text-center">{ele}</h3>
          </div>
          <div className="footer d-flex justify-content-evenly mt-2">
            <h5 className='upvotes-count'>{feedBack[idx].up}</h5>
            <h5 className='downvotes-count'>{feedBack[idx].down}</h5>
          </div>
          <div className="card-body d-flex justify-content-center">
            <button className="btn btn-success upvotes-btn" onClick={()=>{handleUpVote(idx)}}>Up</button>
            <button className="btn btn-danger  ms-3 downvotes-btn" onClick={()=>{handleDownVote(idx)}}>Down</button>
          </div>
        </div>
      ))}

    </div>
  )
}

export default codeReview