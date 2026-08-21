import React, { useState } from 'react'

function useCounter(num) {

    const [count,setcount] = useState(num)

    const increment =()=>{
        setcount(count + 1)
    }
    const decrement = ()=>{
        setcount(count-1)
    }
    const zero = ()=>{
        setcount(0)
    }

    return {count,increment,decrement,zero}
}

export default useCounter
