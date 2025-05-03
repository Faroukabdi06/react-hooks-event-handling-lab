// Code Keypad Component Here
import React from "react";

function Keypad (){
    function changeInput(event){
        console.log("Entering password...")
    }
  return (
    <div>
        <input onChange={changeInput} placeholder="password" type="password"></input>
    </div>
  )
}

export default Keypad;