import React from 'react'

function LeftArrow({onClick}) {
  return (
    <div
    style={{
      position: "absolute", 
      background: "#00000067", 
      top: "40%", 
      left: "10px", 
      height: "40px", 
      width: "40px",
      borderRadius: "50%",
      display: "grid",
      placeContent: "center",
      cursor: "pointer",
      zIndex: "10",
      paddingRight: "5px"
      }}

      onClick={onClick}
    >
      <i className="fas fa-chevron-left"
      style={{color: "#fff", fontSize:"12px", fontWeight: "400"}}
      onClick={onClick}></i>
    </div>
  )
}

export default LeftArrow
