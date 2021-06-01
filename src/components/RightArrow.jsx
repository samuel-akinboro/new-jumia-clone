import React from 'react'

function RightArrow({onClick}) {
  return (
    <div style={{
        position: "absolute", 
        background: "#0000007d", 
        top: "40%", 
        right: "10px", 
        height: "40px", 
        width: "40px",
        borderRadius: "50%",
        display: "grid",
        placeContent: "center",
        cursor: "pointer"
        }}
        onClick={onClick}
        >
      <i className="fas fa-chevron-right"
      style={{color: "#fff", fontSize:"12px", fontWeight: "400"}}
      onClick={onClick}></i>
    </div>
  )
}

export default RightArrow
