import React from "react";

function navbar({ title }) {
  return (
   <div className="bg-dark fs-2 d-flex justify-content-center align-items-center">
    <p className="text-center text-white mt-2 user-select-none">{title}</p>
   </div>
  );
}

export default navbar;
