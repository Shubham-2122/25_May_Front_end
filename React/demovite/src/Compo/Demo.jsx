import React from 'react'

function Demo() {
    return (
        <div>
            <div className="md:flex">
                <div className="md:w-1/2 border-2 sm:text-center bg-red-300 sm:bg-amber-300">1</div>
                <div className="md:w-1/2 border-2 md:bg-lime-500">2</div>
            </div>

            <div className="size-52 border-2 bg-[#4446d8] text-[20px] ">2</div>

            <h1 className='font2'>Hello</h1>
            <h1 className='text-3xl font3'>Hello</h1>
            <div className="flex">
                <div className="card"></div>
                <div className="card"></div>
            </div>

            <button className='btn my-5 padd'>add</button>
            <button className='btn my-5'>data</button>
        </div>
    )
}

export default Demo