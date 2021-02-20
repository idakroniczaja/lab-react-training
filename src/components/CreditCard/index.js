import React from 'react';


function CreditCard (props){

    function twoDigit(num){
        if(num.toString().length === 1){
             return num = '0' + num;
        }else return num.toString()
        }
    

    return (
        <div style={{color: props.color, width: 280, height: 140, backgroundColor: props.bgColor, borderRadius: 10}}>

          <div>{props.type}</div>
          <div>.... .... .... {props.number.slice(-4)}</div>
          <div>
            <p>{twoDigit(props.expirationMonth)}/{props.expirationYear.toString().slice(-2)}  {props.bank} </p>
            <p>{props.owner}</p>
          </div>
          

        </div>
      )
}



export default CreditCard;