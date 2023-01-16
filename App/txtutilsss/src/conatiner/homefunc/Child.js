import React from 'react';

export default function Child(props) {
 
  return (
    <div>
      {console.log("Rendering from child")}
      <h5>Child component with no props</h5>
      <button onClick={props.incrementcount}>IncrementCount</button>
    </div>
  );
}
