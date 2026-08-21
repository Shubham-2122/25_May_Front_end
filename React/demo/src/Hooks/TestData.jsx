import React, { useReducer } from 'react'
import Navabar from '../Layout/Coman/Navabar'

// State : simple state 
// reducer : complex state 


const initalstate = 0

export const reducer =(state,action)=>{
    switch (action) {
        case "increment":
            return state += 1
            break;
        case "decrement":
            return state -= 1
            break;
    
        default:
            break;
    }
}

function TestData() {
 
    const [count,dispatch] = useReducer(reducer,initalstate)

    console.log(count)
    return (
    <div>
        <Navabar />
      <h1>Hello reducer function</h1>

        <h1>Count : {count}</h1>

        <button onClick={()=>dispatch('increment')}>increment</button>
        <button onClick={()=>dispatch('decrement')}>decrement</button>
      
    </div>
  )
}

export default TestData
