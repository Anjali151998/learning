import React, { useState, useMemo } from "react";

export default function Memo() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const incrementtwo = () => {
    setCount2(count2 + 1);
  };
  const isEven = useMemo(() => {
    console.log(".....in useMemo .....");
    let i = 0;
    while (i < 2000000000) i++;
    return count % 2 === 0;
  }, [count]);

  // const isEven = ()=> {
  //   console.log("..........");
  //   let i = 0;
  //   while (i < 2000000000) i++;
  //   return count2 % 2 === 0;
  // }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}> ClickME</button>
      <span>{isEven ? "Even" : "odd"}</span>
      <button onClick={incrementtwo}>ClickME2-{count2}</button>
    </div>
  );
}
