import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './website/pages/Home'
import About from './website/pages/About'
import Products from './website/pages/Products'
import Blogs from './website/pages/Blogs'
import Testi from './website/pages/Testi'
import Feature from './website/pages/Feature'
import Contact from './website/pages/Contact'
import NotFound from './website/pages/NotFound'
import Dashboard from './admin/Apages/Dashboard'

function App() {
  return (
    <BrowserRouter>
      <div>
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Products />} />
        <Route path='/blog' element={<Blogs />} />
        <Route path='/test' element={<Testi />} />
        <Route path='/feature' element={<Feature />} />
        <Route path='/contact' element={<Contact />} />


        <Route path='*' element={<NotFound />} />

        {/* admin */}
        <Route path='/dash' element={<Dashboard />} />

      </Routes>
    </div>
    </BrowserRouter>
    
  )
}

export default App