import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../assets/style.css'// Asegúrate de que la ruta sea correcta

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmailChange = (e) => setEmail(e.target.value)
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      alert('La contraseña debe tener al menos 6 caracteres');
    } else {
      alert('Inicio de sesión exitoso')
      // Aquí puedes agregar la lógica para manejar el inicio de sesión real
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={handleEmailChange}
          required
        />
        <input
          type='password'
          placeholder='Contraseña'
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <button type='submit'>Login</button>
      </form>
      {/* Links de navegación adicionales */}
      <div>
        <p>¿No tienes una cuenta? <Link to="/register">Regístrate aquí</Link></p>
        <p>Volver a la <Link to="/">Página principal</Link></p>
      </div>
    </div>
  )
}

export default Login
