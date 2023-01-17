import React from 'react'
import { useState ,useEffect,useRef} from 'react';
import Forwardref from './Forwardref';

export default function Ref() {


    const [myData,setMyData]= useState("");
   // const[count,setCount] = useState();


   //const count = useRef(1);
   const inputElem =useRef("");
//console.log("object has current property",count);

    // useEffect(()=>{
    //    // setCount(count+1);
    //    count.current =count.current+1;
    // })

    const changeStyle = ()=>{
        //console.log("object has current property",inputElem);
        inputElem.current.style.backgroundColor="pink";
        const value = inputElem.current.value;
        if(!value) inputElem.current.focus();
         else alert(value);


    }
  return (
    <div>
      {/* <input type="text" value={myData} onChange={(e)=>setMyData(e.target.value)} /> */}
      {/* <p>number of times render:{count.current}</p> */}
      <Forwardref type="text"   ref={inputElem} value={myData} onChange={(e)=>setMyData(e.target.value)} />
      <button onClick={changeStyle}>Submit</button>

    </div>
  )
}
