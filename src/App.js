

import React from 'react';
 import './App.css';
 import user from './user girl.png'
 import gold from './images/gold star.png'
 import star from './images/star.png'

 export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })
    
    // let starIcon = contact.isFavorite ? {gold} : {star}
    
    function toggleFavorite() {
        setContact(prevContact => ({
            ...prevContact,
            isFavorite: !prevContact.isFavorite
        }))
    }
    
    return (
        <main>
            <article className="card">
            <img src= {user} className="card--image" alt='' />
                <div className="card--info">
                    <img 
                    src={ contact.isFavorite ? gold : star} 
                        // src={`../images/${starIcon}`} 
                        className="card--favorite"
                        onClick={toggleFavorite} alt='fakk'
                   />
                    <h2 className="card--name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
                
            </article>
        </main>
    )
}









// import React from 'react';
// import './App.css';

// import user from './user girl.png'


// function App() {
//   // didnt need to change anythign here for the challenge 
//   const [contact, setContact] = React.useState({
//       firstName: "John",
//       lastName: "Doe",
//       phone: "+1 (719) 555-1212",
//       email: "itsmyrealname@example.com",
//       isFavorite: true
//   })
 
 
  
//   let starIcon = contact.isFavorite ?  "goldstar.jpeg" : "star.jpeg" 
    
//   function toggleFavorite() {

//     // ... spreads in our old object which we have access to the old contact using Prev contact its just like taking the whole object above and pasting it into the function
//     // The expression "!prevContact.isFavorite" is a logical negation of the value of "isFavorite" property of the previous contact. If the previous contact's "isFavorite" property is true, then "!prevContact.isFavorite" will evaluate to false. Conversely, if the previous contact's "isFavorite" property is false, then "!prevContact.isFavorite" will evaluate to true.


//     setContact(prevContact => {
//       return {
//           ...prevContact,
//           isFavorite: !prevContact.isFavorite
//       }
//   })
// }
//   return (
//       <main>
//           <article className="card">
//               <img src= {user} className="card--image" alt='' />
//               <div className="card--info">
//                   <img 
//                      src={`${starIcon}`}  alt='bruh'
//                       className="card--favorite"
//                       onClick={toggleFavorite}
//                   />
//                   <h2 className="card--name">
//                       {contact.firstName} {contact.lastName}
//                   </h2>
//                   <p className="card--contact">{contact.phone}</p>
//                   <p className="card--contact">{contact.email}</p>
//               </div>
              
//           </article>
//       </main>
//   )
// }

 
 
 
 
  /**
   * Challenge: Fill in the values in the markup
   * using the properties of our state object above
   * (Ignore `isFavorite` for now)
   */
  
  // changed stuff below see notes 

  // second challenge
   /**
     * Challenge: Use a ternary to determine which star image filename
     * should be used based on the `contact.isFavorite` property
     * 
     * `true` => "star-filled.png"
     * `false` => "star-empty.png"
     * 
     * Then use the starIcon value to display the correct image
     */
//  let starIcon = contact.isFavorite ?  <img src={goldstar} alt='eee'/> : <img src={star} alt='fff'/>
  
//    function toggleFavorite() {

//     console.log("Toggle Favorite")
       
      // changing this code to meet challenge 2 to toggle gold star or empty star based on favorte or not 
//       setContact(prevContact => ({
// ...prevContact, 
// isFavorite:!prevContact.isFavorite
      // }))
//   }

//   return (
//       <main>
//           <article className="card">
//               <img src= {user} alt='user'  className="card--image" />
//               <div className="card--info">
//                   <img 
//                       src={`.../images/${starIcon}`} alt='fack'
//                       className="card--favorite"
//                       onClick={toggleFavorite}
//                   />
//                   <h2 className="card--name">
//                     {/* changed hard coeded john doe to code below */}
//                       {/* John Doe */}
//                       {contact.firstName} {contact.lastName}
//                   </h2>
//                   {/* changed hard coded p tags to contact.phone and . name  */}
//                   {/* <p className="card--contact">+1 (719) 555-1212</p>
//                   <p className="card--contact">itsmyrealname@example.com</p> */}
//                   <p className="card--contact"> {contact.phone}</p>
//                   <p className="card--contact">{contact.email}</p>
//               </div>
              
//           </article>
//       </main>
//   )
// }
  

 
