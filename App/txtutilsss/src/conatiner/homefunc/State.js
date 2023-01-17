import React, { useState } from "react";

export default function State() {
  const [text, settext] = useState("learning react");
  const changeName = () => {
    
    settext("learn useState hook");
  };
  return (
    <div>
      <h1>{text}</h1>
      <button type="button" class="btn btn-primary" onClick={changeName}>
        Click Me
      </button>
    </div>
  );
}
