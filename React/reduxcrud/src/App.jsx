import React from 'react'
import UserDetails from './Component/UserDetails'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddUser from './Component/AddUser'
import Header from './Component/Header'
import ProductData from './Component/ProductData'

function App() {
  return (
    <BrowserRouter>
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<UserDetails />} />
        <Route path='/add' element={<AddUser />} />
         <Route path='/Product' element={<ProductData />} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App