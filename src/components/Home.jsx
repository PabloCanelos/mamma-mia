import Header from './Header'
import CardPizza from './CardPizza'
import { pizzas } from './pizzas' 
import './Home.css'

const Home = () => {
  console.log(pizzas) 
  return (
    <div>
      <Header />
      <div className='home'>
        {pizzas.map(pizza => (
          <CardPizza
            key={pizza.id}
            name={pizza.name}
            ingredients={pizza.ingredients}
            price={pizza.price}
            image={pizza.img}
          />
        ))}
      </div>
    </div>
  )
}

export default Home

// el contenido de abajo comentado pertenece al hito pasado
// ha sido comentado con el objeto de que no interceda en mi codigo hito 3
{/*const Home = () => {
  return (
    <div>
      <Header />
      <div className='home'>
        <CardPizza
          name='Napolitana'
          ingredients={['Tomate', 'mozzarella', 'jamón', 'orégano']}
          price={5950}
          image='https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c'
        />
        <CardPizza
          name='Española'
          ingredients={['Gorgonzola', 'mozzarella', 'parmesano', 'provolone']}
          price={6950}
          image='https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab'
        />
        <CardPizza
          name='Pepperoni'
          ingredients={['Mozzarella', 'pepperoni', 'orégano']}
          price={6950}
          image='https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3'
        />
      </div>
    </div>
  )
}

export default Home */}