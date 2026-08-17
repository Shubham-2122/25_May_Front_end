import React from 'react'

function Color() {
    return (
        <div>
            <h1 className='text-5xl bg-olive-600 text-white'>Hello</h1>
            <h1 className='text-5xl bg-olive-500'>Hello</h1>
            <h1 className='text-5xl bg-amber-300'>Hello</h1>
            <h1 className='text-5xl bg-fuchsia-300'>Hello</h1>
            <h1 className='text-5xl bg-linear-to-l from-red-400 to-red-700'>Hello</h1>
            <h1 className='text-5xl bg-linear-to-l from-red-400 from-25% via-blue-400 to-red-700'>Hello</h1>
            <h1 className='text-5xl'>Hello</h1>
        </div>
    )
}

export default Color