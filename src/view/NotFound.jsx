import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
    <h1>404 - Page Not-Found</h1>
      <Link to='/notFound'></Link>
      <Link to='/'> <button>Volver a inicio</button></Link>

    </>
  )
}
export default NotFound