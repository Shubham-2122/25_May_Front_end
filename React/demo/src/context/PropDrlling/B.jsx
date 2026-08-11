import React from 'react'
import C from './C'

function B({name,setname}) {
  return (
    <div>
        <h1>Hello B compo</h1>

        <C name={name} setname={setname} />
    </div>
  )
}

export default B