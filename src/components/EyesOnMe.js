// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe(){
    function focus(event){
       console.log(event)
       if(event.type==='focus'){
        console.log('Good!')
       }else{
         console.log("Hey! Eyes on me!")
       }

    }
    return(
        <div>
            <button onFocus={focus} onBlur={focus}>Eyes on me</button>
        </div>
    )
}
export default EyesOnMe