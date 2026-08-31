import { Routes, Route } from "react-router-dom";
import { useState } from 'react'
import Nav from './Website/Coman/Nav'
import Home from './Website/Page/Home'
import NotFound from "./Website/Page/NotFound";
import Shop from "./Website/Page/Shop";
import Account from "./Website/Page/Account";
import Wishlis from "./Website/Page/Wishlis";
import Dashboard from "./admin/Acoman/Dashboard";

function App() {
  

  return (
    <>

      <Routes >
        <Route  path="/" element={<Home />} />
        <Route  path="/shop" element={<Shop />} />
        <Route  path="/account" element={<Account />} />
        <Route  path="/wishlist" element={<Wishlis />} />
        <Route  path="*" element={<NotFound />} />


        {/* admin */}
      <Route path="/dash" element={<Dashboard />} />

      </Routes>
    </>
  )
}

export default App
