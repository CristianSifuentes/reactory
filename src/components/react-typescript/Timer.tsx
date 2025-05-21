import { useState } from 'react';
import { TimerChild } from './TimerChild';

export const Timer = () => {
  const [miliseconds, setMiliseconds] = useState(0);
  return (
    <>
    <span>Miliseconds { miliseconds }</span>
    <br></br>
    <button className='btn btn-primary mt-2'  onClick={()=>setMiliseconds(1000)}>1000</button>
    <button className='btn btn-primary mt-2'  onClick={()=>setMiliseconds(2000)}>2000</button>

    <TimerChild miliseconds={miliseconds}></TimerChild>
    </>

  )
}
