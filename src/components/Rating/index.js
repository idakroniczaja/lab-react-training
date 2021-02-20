import React from 'react';

function Rating (props){

    return (
<div>
{Math.round(props.children)}

</div>
      )
}



export default Rating;