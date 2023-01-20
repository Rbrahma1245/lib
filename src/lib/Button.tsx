import React from "react";


export const Button = ({ type = "button" }) => (
  <div >
 {<label className="simple-text-label"></label>}
    <input
      type="button"
      className="simple-text-input"
      value=""
      onClick={()=> console.log("Hello Button is clicked")}
      
    />
   
  </div>
);

// export default TextInput;