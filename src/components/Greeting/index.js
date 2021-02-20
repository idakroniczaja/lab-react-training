import React from 'react';
 


// switch(expression) {
//     case x:
//       // code block
//       break;
//     case y:
//       // code block
//       break;
//     default:
//       // code block
//   }

function Greetings (props){
if(props.lang==="de"){
    return (
       <p style={{width: 600, height: 40, border: '2px solid black', padding: 5, display: 'flex', fontSize: 30}}> Hallo {props.children}</p>
        );
}else if (props.lang==="fr"){
    return (
        <p style={{width: 600, height: 40, border: '2px solid black', padding: 5, display: 'flex', fontSize: 30}}> Bonjour {props.children}</p>
        );
}else if (props.lang==="en"){
    return (
       <p style={{width: 600, height: 40, border: '2px solid black', padding: 5, display: 'flex', fontSize: 30}}> Hello {props.children}</p> 
        );
}else if (props.lang==="es"){
    return (
       <p style={{width: 600, height: 40, border: '2px solid black', padding: 5, display: 'flex', fontSize: 30}}> Olla {props.children}</p>
        );
    } else {
        return (
            'No such greeting!'
        )
    }

// switch(props.lang){
//     case "de":
//       props.children
//       break;
//     case "fr":
//         props.children
//         break;
//     case "en":
//         props.children
//         break;
//     case "es":
//         props.children
//         break;
// }

}
 
export default Greetings;
