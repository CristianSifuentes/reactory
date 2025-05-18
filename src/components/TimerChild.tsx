import { useEffect, useState } from "react";

export const TimerChild = (args: any) => {
  const [seconds, setSeconds] = useState(0);

  console.log("TimerChild", args.miliseconds);

  useEffect(() => { 
    setInterval(() => setSeconds(s => s + 1), 1000);
  }, []);
  return (
    <>
    <h4>Timer Child: <small>{seconds}</small></h4>
    </>
  )
}
