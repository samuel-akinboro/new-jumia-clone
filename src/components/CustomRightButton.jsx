import React from 'react'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

function CustomRightButton({ onClick, ...rest }) {
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
              zIndex: "99", 
              position: "absolute", 
              top: "100px",
              right: "10px",
              borderRadius: "50%",
              border: "none",
              justifyContent: 'center',
              alignItems: 'center',
              cursor: "pointer"
              }}
              className="custom-arrows">
           <ChevronRightIcon style={{color: "#fff", fontSize: "2.1em", marginTop: "5px"}} />
         </button>;
}

export default CustomRightButton
