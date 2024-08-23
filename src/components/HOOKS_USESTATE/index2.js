import React, { useState } from 'react'

// Event handeling using USESTATE
export default function HOOKS_USESTATE2() {

const [count, setCount] = useState(10)
const handleIncrement = () =>{
    setCount(count + 1);
}
  return (
    <div>
           <h1>Count :{count}</h1>
        <button onClick={handleIncrement} >increament</button>
    </div>
  )
}
