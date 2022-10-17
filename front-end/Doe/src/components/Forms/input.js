import React from "react";
//import style from "../Container/style";
//import FormControl from "./styled";



function Input({text, placeholder, event}) {


    return (

        <>
        <label>{text}:</label>
          <input placeholder={placeholder}
          > 
        </input>
        </>       
        
    )
    
}



export default Input;