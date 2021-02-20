
import React from 'react';

function Rating (props){
let roundRatings = Math.round(props.children)


    return(
        
<div>

        {roundRatings<1 && <p>☆☆☆☆☆</p> || 
        (roundRatings>=1 && roundRatings<2) && <p>☆☆☆☆⭐︎</p> || 
        (roundRatings>=2 && roundRatings<3) && <p>☆☆☆⭐︎⭐︎</p> ||
        (roundRatings>=3 && roundRatings<4) && <p>☆☆⭐︎⭐︎⭐︎</p> || 
        (roundRatings>=4 && roundRatings<5) && <p>☆⭐︎⭐︎⭐︎⭐︎</p> || 
        <p>⭐︎⭐︎⭐︎⭐︎⭐︎</p>
        }
</div>
    )

}


export default Rating;