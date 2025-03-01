import React, { useEffect, useState } from 'react'

const Pizza = () => {
  const [pizza, setPizza] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/pizzas/p001')
        if (!response.ok) {
          throw new Error('Respuesta de red no fue correcta')
        }
        const data = await response.json()
        setPizza(data)
      } catch (error) {
        setError(error.message)
        console.error('Error al obtener la pizza:', error)
      }
    }

    fetchPizza()
  }, [])

  if (error) {
    return <div>Error: {error}</div>
  }

  if (!pizza) {
    return <div>Cargando...</div>
  }

  return (
    <>
      <h1>{pizza.name}</h1>
      <p>Precio: ${pizza.price}</p>
      <p>Ingredientes: {pizza.ingredients.join(', ')}</p>
      <img src={pizza.img} alt={pizza.name} />
      <p>{pizza.desc}</p>
      <button>Añadir al carrito</button>
      <div>
        <p>Volver a la <Link to="/">Página principal</Link></p>
        <p>Ir al <Link to="/cart">Carrito</Link></p>
      </div>
    </>
  )
}

export default Pizza
