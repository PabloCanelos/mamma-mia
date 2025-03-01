import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './view/Home'
import Register from './view/Register'
import Login from './view/Login'
import Cart from './view/Cart'
import Pizza from './view/Pizza'
import Profile from './view/Profile'
import NotFound from './view/NotFound'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Navbar siempre visible */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/:id" element={<Pizza />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} /> {/* Ruta para manejar páginas no encontradas */}
      </Routes>
      <Footer /> {/* Footer siempre visible */}
    </Router>
  )
}

export default App
