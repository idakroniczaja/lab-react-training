import React from 'react';
 




function Greetings ({lang, children}){

    const greetingLang = () => {
    switch(lang){
        case 'de':
            return 'Hallo';
        case 'en':
            return 'Hello';
        case 'es':
            return 'Hola';
        case 'fr':
            return 'Bonjour';
    }
}


    return(
        <div>
            <p>{greetingLang()} {children}</p>
        </div>
        // <div>{props.lang==="de" && <p style={{width: 600, height: 40, border: '2px solid black', padding: 5, display: 'flex', fontSize: 30}}> Hallo {props.children}</p> ||
        // props.lang==="fr" && <p style={{width: 600, height: 40, border: '2px solid black', padding: 5, display: 'flex', fontSize: 30}}> Bonjour {props.children}</p> ||
        // props.lang==="en" && <p style={{width: 600, height: 40, border: '2px solid black', padding: 5, display: 'flex', fontSize: 30}}> Hello {props.children}</p> ||
        // props.lang==="es" && <p style={{width: 600, height: 40, border: '2px solid black', padding: 5, display: 'flex', fontSize: 30}}> Olla {props.children}</p>
        // }   
        // </div>
            )


}
 
export default Greetings;
