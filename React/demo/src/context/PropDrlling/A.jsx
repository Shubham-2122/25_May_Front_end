import React, { useState } from 'react'
import B from './B'

function A() {
  
    const [name,setname] = useState("jay")
    
  return (
    <div>
        <h1>Hello A compo</h1>
        <h1>Name : {name}</h1>
        <B name={name} setname={setname} />
    </div>
  )
}

export default A