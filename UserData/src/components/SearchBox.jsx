import React from 'react'

function SearchBox({input,handleSearch}) {
  return (
    <div className="container mt-4 w-50 font-monospace">
        <input type="text" className="form-control form-control-lg" placeholder="Search User..." value={input} onChange={handleSearch}/>
    </div>
  )
}

export default SearchBox