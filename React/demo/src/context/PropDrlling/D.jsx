import React from 'react'

function D({name,setname}) {
  return (
    <div>
        <h1>Hello D compo</h1>
        <h1>D Name : {name}</h1>
        <button onClick={()=>setname("nirav")}>NameChange</button>
    </div>
  )
}

export default D