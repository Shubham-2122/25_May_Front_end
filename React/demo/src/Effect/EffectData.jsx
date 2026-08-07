/*
    Useeffect : Function Side effect  
              : re-reder useeffect 
            : Logic 
            : Opational : [],[state]
           : API call auto

*/


import React, { useEffect, useState } from 'react'

function EffectData() {

    // 1) empay data show
    // useEffect(()=>{
    //     console.log("outside data")
    //     return(()=>{
    //         console.log("inside data")
    //     })
    // })

    // 2) array
    // useEffect(()=>{
    //     console.log("outside data")
    //     return(()=>{
    //         console.log("inside data")
    //     })
    // },[])

    const [name,setname] = useState("nirav")

     useEffect(()=>{
        console.log("outside data")
        return(()=>{
            console.log("inside data")
        })
    },[name])

  return (
    <div>
        <h1>hello Effect hooks</h1>
        <h1>Name : {name}</h1>
        <button onClick={()=>setname("demo")}>Change name</button>
    </div>
  )
}

export default EffectData