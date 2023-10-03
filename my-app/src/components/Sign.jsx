import React, { useState } from 'react';
import './SignStyles.css';
 
 function Sign() {
   const [showPopup, setShowPopup] = useState(false);
 
   const handleLogin = (e) => {
     e.preventDefault(); // Prevent the default form submission behavior
     setShowPopup(true);
   };
 
   const closePopup = () => {
     setShowPopup(false);
   };
 
   return (
     <div className="container">
       <h1>You can now login!</h1>
       <form>
         <input placeholder="UserName" />
         <input placeholder="Email" />
         <input placeholder="Password" />
         <input placeholder="Confirm Password" />
         <button onClick={handleLogin}>Login</button>
       </form>
 
       {showPopup && (
         <div className="popup">
           <div className="popup-content">
             <span className="close" onClick={closePopup}>
               &times;
             </span>
             <h2>Thank You!</h2>
             <p>You have successfully logged in.</p>
           </div>
         </div>
       )}
     </div>
   );
 }
 
 export default Sign;

 
