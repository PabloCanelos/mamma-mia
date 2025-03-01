import React from 'react'
import { Link } from 'react-router-dom'

const Profile = () => {
  const userEmail = 'usuario@example.com' // Email estático por ahora

  const handleLogout = () => {
    console.log('Cerrando sesión...') // Lógica de cierre de sesión estática
    // Aquí podrías agregar la lógica real para cerrar sesión en el futuro
  };

  return (
    <div>
      <h1>Profile Page</h1>
      <p>Email: {userEmail}</p>
      <button onClick={handleLogout}>Cerrar Sesión</button>
      {/* Links de navegación adicionales */}
      <div>
        <p>Volver a la <Link to="/">Página principal</Link></p>
        <p>Ir al <Link to="/login">Login</Link></p>
      </div>
    </div>
  )
}

export default Profile
