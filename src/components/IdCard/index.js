import React from 'react';
 
function IdCard({picture, lastName, firstName, gender, height, birth}){

    return (
        <div style={{width: 800, height: 130, border: '1px solid black', padding: 5, display: 'flex', marginBottom: 10}}>
          <img src={picture} alt='photo'/>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', paddingLeft: 5}}>
          <p style={{margin: 0, padding: 0}}><strong>First name:</strong> {firstName}</p>
          <p style={{margin: 0, padding: 0}}><strong>Last name: </strong>{lastName}</p>
          <p style={{margin: 0, padding: 0}}><strong>Gender: </strong>{gender}</p>
          <p style={{margin: 0, padding: 0}}><strong>Height: </strong>{height/100}m</p>
          <p style={{margin: 0, padding: 0}}><strong>Birth: </strong>{new Date(birth).toDateString()}</p>
          </div>
        </div>
      )
}
 
export default IdCard;