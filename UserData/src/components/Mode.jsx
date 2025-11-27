import React, { useState } from 'react'

function Mode({setModeColor}) {

  const [mode,setMode] = useState(false)

  const handleModeBtn = () =>{
    setMode(prev=>!prev)
    setModeColor(prev=>!prev);
  }

  return (
    <div className="container">
        <div className="modebtn position-relative float-end" onClick={handleModeBtn}>
            <div className={`cir position-absolute ${mode?"start-50":"start-0"}`} style={mode?{background:"#fff",color:"#222"}:{background:"#222",color:"#fff"}}>
                <ion-icon name={`${mode?"sunny-outline":"moon-outline"}`} ></ion-icon>
            </div>
        </div>
    </div>
  )
}

export default Mode