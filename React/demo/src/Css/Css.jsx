import React from 'react'
import "./style.css"

function Css() {

    let htmlelemnet = {
        background:"green",
        color:"white"
    }

  return (
    <div>
        <h1 style={{background:"red",color:"white",padding:"40px"}}>hello inline css</h1>

        <h1 style={htmlelemnet}>Helli internal not use</h1>

        <h1 className='main'>Hello this external css</h1>
    </div>
  )
}

export default Css