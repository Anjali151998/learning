import React, { useState, useEffect, useMemo } from "react";

export default function EffectVsMemo() {
  const [state, setstate] = useState(0);
  const [data, setdata] = useState(100);
  useEffect(() => {
    console.log(Math.random());
  }, [data]);

  const noRender = useMemo(() => {
    return (
      <div>
        <h4 style={{ color: "red" }}>useeffect vs usememo {data}</h4>
        <h4 style={{ color: "red" }}>useeffect vs usememo</h4>
      </div>
    );
  }, [data]);

  return (
    <div>
      {noRender}

      <h4 style={{ color: "blue" }}>useeffect vs usememo{state}</h4>
      <h4 style={{ color: "blue" }}>useeffect vs usememo</h4>

      <h2>{state}</h2>
      <button
        onClick={() => {
          setstate(state + 1);
        }}
      >
        Update State
      </button>
      <h2>{data}</h2>
      <button
        onClick={() => {
          setdata(data + 1);
        }}
      >
        Update data
      </button>
    </div>
  );
}
