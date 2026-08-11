import React, { useContext } from 'react'
import { data } from './ChildA'

function ChildC() {

    const { form, setform } = useContext(data)
    return (
        <div>
            <h1>Hello Child C </h1>

            <h1>Count : {form.count}</h1>
            <button onClick={() => setform({ ...form,count: form.count + 1 })}>increment</button>
            <button onClick={() => setform({ count: form.count - 1 })}>decrement</button>
            <button onClick={() => setform({ count: 0 })}>Zero</button>
        </div>
    )
}

export default ChildC