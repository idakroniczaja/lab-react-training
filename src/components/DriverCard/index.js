import React from 'react';
 
function DriverCard(props){

    return (
        <div style={{width: 600, height: 150, backgroundColor: "RoyalBlue", marginBottom: 20, borderRadius: 15, display: 'flex',
         justifyContent: 'center', alignItems: "center"}}>
          <img src={props.img} alt='photo' style={{width: 120, height: 120, borderRadius: 400/2, margin:20}}/>
         <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', height: 120, justifyContent: 'space-evenly'}}>
          <h2 style={{margin: 0}}>{props.name}</h2>
          <p style={{margin: 0}}>{props.rating}</p>
          <p style={{margin: 0}}>{props.car.model} {props.car.licensePlate}</p>
         </div>
        </div>
      )
}
 
export default DriverCard;
