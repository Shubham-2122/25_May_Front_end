import React from 'react'
import Navabar from '../Coman/Navabar'
import Footer from '../Coman/Footer'
import { Link, Outlet } from 'react-router-dom'

function About() {
  return (
    <div>
      <Navabar />
      <h1 className='p-5 bg-success'>About Page</h1>
      <Link className='btn btn-info mx-4' to="/about/about1">About1</Link>
      <Link to="/about/about2" className='btn btn-primary'>About2</Link>

    <Outlet />

      <Footer />
    </div>
  )
}

export default About