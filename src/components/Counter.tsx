import { useState } from 'react'

export const Counter = () => {
  const [counter, setCounter]= useState(0);

  const increment = (num:number) : void => {
    setCounter(counter + num);
  }

  return (
    <div className='mt-5'>
        <h3>Counter: useState</h3>
        <span>Value: { counter }</span>
        <br/>
       <button  onClick={()=>increment(1)} type="button" className="btn btn-primary mt-2">+1</button>
       <button  onClick={()=>increment(2)} type="button" className="btn btn-primary mt-2">+2</button>
       <button onClick={() => setCounter(0)} type='button' className="btn btn-danger mt-2">reset</button>
    </div>
  )
}
