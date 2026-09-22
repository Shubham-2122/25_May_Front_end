import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo } from '../features/counter/todoSlice'

function TodoDemo() {

    const { todo } = useSelector((state) => state.todos)
    console.log(todo)

    const dipatch = useDispatch()

    return (
        <div>
            <ul>
                {
                    todo && todo.map((data,index)=>{
                        return(
                            <li key={index}>{data} <button>Edit</button> <button onClick={()=>dipatch(deleteTodo(index))}>Delete</button></li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default TodoDemo