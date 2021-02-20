import React from 'react';
 
function IdCard(props){

    return (
        <div style={{width: 800, height: 130, border: '1px solid black', padding: 5, display: 'flex', marginBottom: 10}}>
          <img src={props.picture} alt='photo'/>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', paddingLeft: 5}}>
          <p style={{margin: 0, padding: 0}}>First name: {props.lastName}</p>
          <p style={{margin: 0, padding: 0}}>Last name: {props.firstName}</p>
          <p style={{margin: 0, padding: 0}}>Gender: {props.gender}</p>
          <p style={{margin: 0, padding: 0}}>Height: {props.height/100}m</p>
          <p style={{margin: 0, padding: 0}}>Birth: {new Date(props.birth).toDateString()}</p>
          </div>
        </div>
      )
}
 
export default IdCard;