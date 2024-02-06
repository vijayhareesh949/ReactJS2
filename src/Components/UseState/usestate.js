import { useState } from "react";

const Seconds=()=>{

    const intialvalue=100
    const[Count,setTimer]=useState(intialvalue)

const handleTimer=()=>{
    setInterval(()=>{
setTimer(Count=>Count-1)
    },1000)
}
return(
    <>
    <h2>count  {Count}</h2>
    <button onClick={handleTimer}>click </button>
    </>
)
}
export default Seconds

export const Increment=()=>{
const value=1
    const[number,setcount]=useState(value)

    const handleInterval=()=>{
        setcount(number+1)
    }
    return(
        <>
        <h2>number {number}</h2>
        <button onClick={handleInterval}>click</button>
        </>
    )
}

