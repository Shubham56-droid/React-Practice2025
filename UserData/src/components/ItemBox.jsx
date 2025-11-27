import React from 'react'

function ItemBox({data}) {
  return (
    <div className="boxContainer mt-3 d-flex flex-wrap">
      {data.map((e,i)=>(
          <div className="box" key={i}>
          <p className="name">Name: {e.name}</p>
          <p className="age">Age: {e.age}</p>
          <p className="email">Email: {e.email}</p>
          <p className="city">City: {e.city}</p>
        </div>
      ))}
    </div>
  )
}

export default ItemBox