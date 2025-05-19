import { useEffect, useRef, useState } from "react";

type TimerChildProps = { 
    miliseconds: number;
    seconds?: number;
}

export const TimerChild = ({miliseconds}: TimerChildProps) => {
  const [seconds, setSeconds] = useState(0);
//   const ref = useRef<NodeJS.Timeout>();
//   let intervalRef = useRef<NodeJS.Timeout>()
  const ref = useRef<NodeJS.Timeout | null>(null);

  console.log("miliseconds", miliseconds);
//   console.log("seconds", seconds);

  useEffect(() => { 
    ref.current && clearInterval(ref.current);
    // console.log("useEffect");
    ref.current = setInterval(() => setSeconds(s => s + 1), miliseconds);
  }, [miliseconds]);
  return (
    <>
    <h4>Timer Child: <small>{seconds}</small></h4>
    </>
  )
}
