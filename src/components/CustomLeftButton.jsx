import React from 'react'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

function CustomLeftButton({ onClick, ...rest }) {
  const {
    onMove,
    carouselState: { currentSlide, deviceType }
  } = rest;
  // onMove means if dragging or swiping in progress.
  return <button 
            onClick={() => onClick()} 
            style={{
              height: "40px",
              width: "40px",
              background: "rgba(0,0,0,0.5)",
              zIndex: 102, 
              position: 'absolute', 
              top: "100px",
              left: "10px",
              borderRadius: "50%",
              border: "none",
              justifyContent: 'center',
              alignItems: 'center',
              cursor: "pointer"
              }}
              className="custom-arrows"
              >
           <ChevronLeftIcon style={{color: "#fff", fontSize: "2.1em", marginTop: "5px"}} />
         </button>;
}

export default CustomLeftButton
