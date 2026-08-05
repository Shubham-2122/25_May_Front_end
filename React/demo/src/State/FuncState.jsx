/*
React v 16.8 function : hooks 

Hooks : Resuse 
import hooks 

    const [state,setstate] = useState()

*/

import React, { useState } from 'react'
import ImageData from './ImageData'

function FuncState() {

    const [name,setname] = useState("monik")
    const [count,setcount] = useState(1)
    const [img,setimg] = useState(true)
    console.log(name)

    const inc2=()=>{
        setcount(count+2)
    }

  return (
    <div>

        <h1>Name : {name}</h1>
        <button onClick={()=>setname("sujal")}>Chnage name</button>
        <button onClick={()=>setname("het")}> chnage name2</button>


        <h1> Count : {count}</h1>

        <button onClick={()=>setcount(count+1)}>incrment</button>
        <button onClick={()=>setcount(count-1)}>dencrment</button>
        <button onClick={()=>setcount(0)}>Zero</button>

        <button onClick={inc2}>incrment 2</button> 

        <hr /> <hr />

        <button onClick={()=>setimg(false)}>Hide</button>
        <button onClick={()=>setimg(true)}>Show</button>
        <button onClick={()=>setimg(!img)}>toggle</button>


        {
            img ? <ImageData /> : false
        }

    </div>  
    )
}

export default FuncState