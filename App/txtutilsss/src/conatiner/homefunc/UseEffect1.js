import React, { useState, useEffect } from 'react';

export default function UseEffect1() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    console.log("About useEffect ")
  document.title=`React(${count})`;
  });
console.log("useEffect Hook")
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}