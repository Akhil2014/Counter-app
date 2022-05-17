import React from "react";
import { useState } from "react";

const Counter = () => {
    const [count,setCount] = useState(0);

    if(count%2==0)
    {
       var style1 ={
        color:'green'
        }
        console.log("even")
    }else{
        var style1 ={
            color:'red'
            }
        console.log("Odd")
    }

    return (
        <div>
            <h1 style={style1}>Counter App: {count}</h1>
            <button onClick={()=> {if (count>0) {setCount(count-1)}}}>Decrement</button>
            <button onClick={()=> setCount(count+1)}>Increment</button>
            <button onClick={()=> setCount(count*2)}>Double</button>
            <button onClick={()=> setCount(count-count)}>Reset</button>
        </div>
        
    )
}

export default Counter;