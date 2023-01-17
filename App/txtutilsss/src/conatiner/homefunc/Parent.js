import React, { useState } from "react";
import Child from "./Child";

export default function Parent() {
  const [count, setCount] = useState(0);

  // const incrementcount=()=>{
  //   setCount(count +1);
  // };
  const incrementcount = React.useCallback(() => {
    setCount((prev) => prev + 1); 
  }, [setCount]);

  return (
    <div>
      <h4>Performance optimaization in raectJs {count}</h4>
      <Child incrementcount={incrementcount} />
    </div>
  );
}
