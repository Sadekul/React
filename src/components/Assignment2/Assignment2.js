import React, { useState } from 'react'


export default function Assignment2 (){

    const [count, setCount] = useState(0)
    const handleIncrement = () =>{
        setCount(count + 1);
    }
    const handleDecrement = () =>{
        setCount(count - 1);
    }
    const resetBtn = () => {
        setCount (count - count)
    }


    return (
        <div className='card'>
              <button onClick={handleDecrement} disabled={count === -5 ? true : false}>-</button>
             <span>Count :{count}</span>
             <button onClick={handleIncrement} disabled={count === 5 ? true : false}>+</button>
        
             <button className='reset-btn'  onClick={resetBtn}>Reset Button</button>
        </div>
      )
}




  


