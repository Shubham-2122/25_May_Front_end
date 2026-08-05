import React, { useState } from 'react'
import ImageData from './ImageData'

function Funobj() {

    const [data, setdata] = useState({
        name: "het",
        count: 0,
        img: true
    })
    console.log(data)

    return (
        <div>

            <h1>Name : {data.name}</h1>

            <button onClick={() => setdata({ ...data, name: "sujal" })}>Chnage name</button>

            <button onClick={() => setdata({ ...data, name: "harshil" })}>Chnage name 2</button>

            <h1>Count : {data.count}</h1>
            <button onClick={() => setdata({ ...data, count: data.count + 1 })}>Incrment</button>
            <button onClick={() => setdata({ ...data, count: data.count - 1 })}>dencrment</button>
            <button onClick={() => setdata({ ...data, count: 0 })}>Zero</button>

            <hr /> <hr />
            <br />

            <button onClick={()=>setdata({...data,img:false})}>Hide</button>
            <button onClick={()=>setdata({...data,img:true})}>Shoe</button>
            <button onClick={()=>setdata({...data,img:!data.img})}>toggle</button>

            { 
                data.img ? <ImageData /> : false
            }



        </div>
    )
}

export default Funobj