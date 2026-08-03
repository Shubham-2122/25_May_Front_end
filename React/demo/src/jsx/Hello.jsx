// jsx : javascript sytax html 
// js : html read
// jsx vs js : html read and write 0.2s fast 
// jsx : fast
// jsx nad js : {}

import React from 'react'

function Hello() {

    // console.log("hello")
    let name1 = "het"
    console.log(name1)

    let person = {
        name :"harshil",
        age:25
    }

    let hrmldata = <ul>
        <li>sjda</li>
        <li>sdfds</li>
        <li>dsfsd</li>
    </ul>

    console.log(person.name)
  return (
    <>
        <h1>Jsx : </h1>
        <h1 className=''>Name : {name1}</h1>

        <h1>Name : {person.name}</h1>

        {hrmldata}

        <h1>sum : {50+20}</h1>

    </>
  )
}

export default Hello