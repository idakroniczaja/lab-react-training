import React from 'react';




function CreditCard (props){
  
    return (
        <div style={{color: props.color, width: 280, height: 140, backgroundColor: props.bgColor, borderRadius: 10, margin: 10, padding: 10}}>
          <div>
          {props.type.toLowerCase()==='visa' && <img src='/img/visa.png' style={{width: 30, height: 20, margin: 0, padding: 0}}/> || <img src='/img/master-card.svg' style={{width: 30, height: 20, margin: 0, padding: 0}}/>}
          </div>
      
          <div>•••• •••• •••• •••• {props.number.slice(-4)}</div>
          <div>
          {props.expirationMonth.toString().length ===1 && <p>0{props.expirationMonth}/{props.expirationYear.toString().slice(-2)} {props.bank}</p> ||
          <p> {props.expirationMonth}/{props.expirationYear.toString().slice(-2)} {props.bank}</p>
           }
          <p>{props.owner}</p>
          </div>
          

        </div>

      )
  
}



export default CreditCard;