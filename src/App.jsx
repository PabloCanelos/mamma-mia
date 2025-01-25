import React from 'react'
import Home from './components/Home'
import Cart from './components/Cart'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
//import Register from './components/Register'
//import Login from './components/Login'

const App = () => {
  return (
    <div>
      <Navbar />   
      <Home /> 
      <Cart />
      {/* <Register /> */}
      {/*<Login />  */ } 
      <Footer />
    </div>
  )
}
export default App
