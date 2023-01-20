import React from "react";


export const TextInput = ({ type = "text", value  }) => (
  <div >
 { <label className="simple-text-label"></label>}
    <input
      type="text"
      className="simple-text-input"
      value={value}
      onChange={e =>  console.log(e.target.value)}
      // onChange={e => onChange && onChange(e.target.value)&& console.log(e.target.value)}
      
    />
   
  </div>
);

// export default TextInput;