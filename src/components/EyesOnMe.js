// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe() {
  function handleFocusBlur(event) {
    switch (event.type) {
      case "focus":
        console.log("Good!");
        break;
      case "blur":
        console.log("Hey! Eyes on me!");
        break;
      default:
        break;
    }
  }

  return (
    <div>
      <button onFocus={handleFocusBlur} onBlur={handleFocusBlur}>
        Eyes on me
      </button>
    </div>
  );
}

export default EyesOnMe;
