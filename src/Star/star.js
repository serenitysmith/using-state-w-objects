import React from "react";
// have to import pics here 

import gold from "../images/gold star.png"
import star from '../images/star.png'


export default function Star(props){
    const starIcon = props.isFilled ? gold : star
// changed contact.isFaveorite to props.isFilled 

return (
    <img 
            src={`${starIcon}`} 
            className="card--favorite"
            onClick={props.handleClick}
        alt="beetch"/>
)
}

// This component represents a star icon that can be filled or unfilled based on the value of the isFilled prop.
// The component receives two props: isFilled and handleClick.
// The gold and star variables import images for the filled and unfilled stars respectively from the provided image paths.
// The starIcon variable will hold the image path based on whether isFilled is true or false.
// An <img> element is returned with the src attribute set to the appropriate star image based on isFilled.
// The className is set to "card--favorite", and an onClick event is added to the image, calling the handleClick function passed as a prop.
// The alt attribute is set to "beetch".









// src={ contact.isFavorite ? goldStar : regStar} 
                         // src={`../images/${starIcon}`} 
            
// preivously how im imported my pics- had to swtich them to png

//Render the Star component and pass the value of `contact.isFavorite` to the `isFilled` prop. */} 
    
 //* <img 
                //     src={ contact.isFavorite ? gold : star} 
                //         // src={`../images/${starIcon}`} 
                //         className="card--favorite"
                //         onClick={toggleFavorite} alt='fakk'
                //    /> */}
              //render the Star component and pass the value of `contact.isFavorite` to the `isFilled` prop. 




// return <img src={isFilled ? goldStar : regStar}  alt="fave" className="card--favorite"    ></img>

//onClick={toggleFavorite} alt='fakk'