import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../features/counter/counterSlice'

function Count() {

    const {count} = useSelector((state)=>state.count)

    console.log(count)

    const dispatch = useDispatch()

  return (
    <div>
        <h1>Counter : {count}</h1>

        <button onClick={()=>dispatch(increment())}>Increment</button>
         <button onClick={()=>dispatch(decrement())}>decrement</button>
    </div>
  )
}

export default Count