import React from 'react';

function Random ({max, min}){
    return (
       <div style={{width: 600, height: 40, border: '2px solid black', padding: 5, display: 'flex', fontSize: 30, margin:10}}>
          Random value between {min} and {max} =>  {Math.floor(Math.random() * max) + min};
       </div> 
    )
      
}



export default Random;