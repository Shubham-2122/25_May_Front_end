import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function NotFound() {

    const redirect = useNavigate()

    const back=()=>{
        redirect("/")
        console.log("Back to home")
    }

  return (
    <div>
        <h1 className='p-5 bg-danger text-light'>404 NOT FOUND Page</h1>

        <Link className='btn btn-info' to="/" >Back to home</Link>
        <button onClick={back} className='btn btn-dark'>Back to Home 2</button>
    </div>
  )
}

export default NotFound