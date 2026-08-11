import React, { createContext, useState } from 'react'
import ChildB from './ChildB'
import ChildC from './ChildC'
import ChildD from './ChildD'

export const data = createContext() 

function ChildA() {

    const [name,setname] = useState("nirav")
    const [form,setform] = useState({
        count : 0
    })

  return (
    <div>
         <h1>Hello Child A </h1>
         <data.Provider value={{name,setname,form,setform}}>
            <ChildB />
            <ChildC />
            <ChildD />
         </data.Provider>
    </div>
  )
}

export default ChildA