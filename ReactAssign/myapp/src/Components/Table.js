import React, { useState, useEffect,useRef } from "react";

export default function Table() {

  const div1 = useRef(null);
  const div2 = useRef(null);
  
  const onScroll = () => {
    div2.current.scrollTop = div1.current.scrollTop;
  }
  const [data, setData] = useState([]);

  const DataFetch = () => {
    fetch(`https://dummyjson.com/products`)
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData);
        setData(actualData.products);
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    DataFetch();
  }, []);
  return (
    <>
    <div className = "container">
    <div ref={div1} className="table table-striped  side"  onScroll={onScroll}>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Brand</th>

          <th>Price</th>
          <th>Rating</th>
        </tr>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.title}</td>
            <td>{item.brand}</td>

            <td>{item.price}</td>
            <td>{item.rating}</td>
          </tr>
        ))}
      </tbody>
    </div>
    <br/>
    <div ref={div2} className="table table-striped  content"  onScroll={onScroll}>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Brand</th>

          <th>Price</th>
          <th>Rating</th>
        </tr>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.title}</td>
            <td>{item.brand}</td>

            <td>{item.price}</td>
            <td>{item.rating}</td>
          </tr>
        ))}
      </tbody>
    </div>
    </div>
</>
    
  );
}
