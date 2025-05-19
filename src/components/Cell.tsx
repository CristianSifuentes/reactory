import { clear } from "console";
import { use, useEffect, useRef, useState } from "react";

interface CellProps {   
    cellId: number;
    cellType: string;
    cellContent: string;
    initialEnergy: number;
}

export const Cell = ({cellId, initialEnergy}: CellProps) => { 

    const [energy, setEnergy] = useState(initialEnergy);
    const ageRef = useRef(0);
    const [alive, setAlive] = useState(true);

    useEffect(() => { 

        const interval = setInterval(() => { 
            ageRef.current += 1;
            setEnergy((prevEnergy) => prevEnergy - 1); // Energy depletes per second

            if(energy <= 0) { 
                setAlive(false);
                clearInterval(interval);
             console.log(`Cell ${cellId} has died at age ${ageRef.current}`);
            }else {
               console.log(`Cell ${cellId} | Energy: ${energy} | Age: ${ageRef.current}`);

            }
            return () => {clearInterval(interval)};

        }, 1000);

        
    }, [energy]);

    return (
        <div style={{ padding: 10, border: '1px solid gray', marginBottom: 10 }}>
        <strong>🧬 Cell {cellId}</strong><br />
        Energy: {energy}<br />
        Status: {alive ? "Alive" : "Dead"}<br />
        Age: {ageRef.current}
        </div>
    );
}