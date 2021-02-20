import React from 'react';

function Random (props){
    return (
       <div style={{width: 600, height: 40, border: '2px solid black', padding: 5, display: 'flex', fontSize: 30, margin:10}}>
          Random value between {props.min} and {props.max} =>  {Math.floor(Math.random() * props.max) + props.min};
       </div> 
    )
      
}



export default Random;