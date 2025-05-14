import { useState } from 'react'

export const Counter = () => {
  const [counter, setCounter]= useState(0);

  const increment = () => {
    setCounter(counter + 1);
  }

  return (
    <div className='mt-5'>
        <h3>Counter: useState</h3>
        <span>Value: { counter }</span>
        <br/>
       <button  onClick={increment} type="button" className="btn btn-primary">+1</button>
    </div>
  )
}
