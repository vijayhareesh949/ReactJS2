import { useState } from "react";


function Circle(){
    const [circles,setCircles]=useState([])

    const addCircle=()=>{
        setCircles([...circles,true])
    }
    const circleClick=(index)=>{
        console.log(index);
        console.log(circles);
    }
    return(
        <>
        
        <button onClick={addCircle}>add circles</button>
        <h2>total circles{circles.length}</h2>
        {
    circles.map((value,index)=>
    <div key={index}  style={{width:100,height:100,border:"4px solid red",borderRadius:"50%",backgroundColor:value?"black":"white"}} onClick={()=>circleClick(index)}  >


    </div>
    )
 }
        </>
    )
}
export default Circle