import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/counter/todoSlice'

function UserData() {

    const [name,setname]= useState("")

    const dispatch = useDispatch()

    const getsumbit=(e)=>{
        e.preventDefault()

        dispatch(addTodo(name))
        setname("")
    }

  return (
    <div>
        <h1>Todo List Add data</h1>

        <form action="" >
            <input type="text" value={name} onChange={(e)=>setname(e.target.value)} placeholder='Enter your Name' />
            <input type="submit" onClick={getsumbit} value="Add data" />
        </form>
    </div>
  )
}

export default UserData