import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { zero } from '../features/counter/counterSlice'

function Count2() {

    const counter = useSelector((state)=>state.count.count)

    const dispatch  = useDispatch()

  return (
    <div>Count2

    <h1>Count Test : {counter}</h1>
    <button onClick={()=>dispatch(zero())}>Zero</button>
    </div>
  )
}

export default Count2