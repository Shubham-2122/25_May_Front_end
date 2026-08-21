import React, { useEffect } from 'react'
import Navabar from '../Layout/Coman/Navabar'
import useCounter from './useCounter'
import useApi from './useApi'

function DemoTest() {

    const {count,increment,decrement} = useCounter(1)

    const {test,fetchdata} = useApi("https://fakestoreapi.com/users")
 
    useEffect(()=>{
        fetchdata()
    },[])

    console.log(test)

  return (
    <div>
      <Navabar />

      <h1>
        Counte : {count} 
      </h1>
      <button onClick={increment}>incmrenet</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default DemoTest
