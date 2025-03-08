import React from 'react';

export default function Range() {
  return (
    <>
       <div  style={{ fontSize:30, fontWeight:600}}>
    Topic for this Course
  </div>
    <div className="position-relative " style={{ width: '100%', height: '30px', top:50}}>
      {/* Progress Bar */}
     
      <div
        className="progress"
        role="progressbar"
        aria-label="Progress example"
        aria-valuenow="63"
        aria-valuemin="0"
        aria-valuemax="100"
        style={{ height: '25%', backgroundColor: '#e0e0e0' }}
      >
        <div
          className="progress-bar bg-success"
          style={{ width: '63%', height: '100%' }}
        ></div>
      </div>

      {/* Percentage Circle above the progress bar */}
      <div
        className="position-absolute"
        style={{
          top: '-58px',  // Move the circle above the progress bar
          left: '63%',  // Place it at the 63% width point
          transform: 'translateX(-50%)',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          backgroundColor: 'white',
          color: 'black',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: 'bold',
          border: '1px solid #ddd', // Make the triangle point downward

          
        }}
      >
        63%
      </div>

      {/* Triangle pointing downwards to the progress bar */}
      <div
        className="position-absolute"
        style={{
          top: '-15px', // Move the triangle closer to the circle
          left: '63%', // Align with the circle's position
          transform: 'translateX(-50%)',
          width: '0',
          height: '0',
          borderLeft: '10px solid transparent',
          borderRight: '10px solid transparent',
          borderTop: '10px solid #ddd', // Make the triangle point downward
        }}
      ></div>
    </div></>
 
  );
}
