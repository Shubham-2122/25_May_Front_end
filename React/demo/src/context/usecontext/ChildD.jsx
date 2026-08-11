import React, { useContext } from 'react'
import { data } from './ChildA'

function ChildD() {

    const {name,setname} = useContext(data)

  return (
    <div>
        <h1>Hello Child D </h1>
        <h1></h1>
        <h1>D Name : {name}</h1>
        <button onClick={()=>setname("abhi")}>change name</button>
    </div>
  )
}

export default ChildD