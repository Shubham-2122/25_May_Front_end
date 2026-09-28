import React from 'react'
import UserDetails from './Component/UserDetails'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddUser from './Component/AddUser'
import Header from './Component/Header'
import ProductData from './Component/ProductData'
import Edit from './Component/Edit'
import Product from './Component/Product'

function App() {
  return (
    <BrowserRouter>
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<UserDetails />} />
        <Route path='/add' element={<AddUser />} />
         <Route path='/Product' element={<ProductData />} />
         <Route path='/edit/:id' element={<Edit />} />
         <Route path='/pro' element={<Product />} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App