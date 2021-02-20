import React from 'react';


function BoxColor ({r,g,b}) {


        return (
          <div style={{width: 600, height: 120, backgroundColor: `rgb(${r}, ${g}, ${b})`
          ,border: '2px solid black',fontSize: 30, 
          margin: 10, display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 25, color: "white"}}>
         <p> rgb {r}, {g}, {b} </p> 

          <br/>
          </div>
        );
}

export default BoxColor;