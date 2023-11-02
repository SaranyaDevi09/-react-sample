import React,{useState} from "react"

const Func= () => {
    const[Count,setcount]=useState(0)
    function increment()
    {
        setcount(Count+1);
    }
  return (
    <div>
        <p> count:{Count}</p>
        <button onClick={increment}>increment</button>
    </div>
  )
  
}

export default Func