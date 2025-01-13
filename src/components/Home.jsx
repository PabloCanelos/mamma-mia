import Header from './Header';
import CardPizza from './CardPizza';
import './Home.css';

const Home = () => {
  return (
    <div>
      <Header />
      <div className="home">
        <CardPizza
          name="Napolitana"
          ingredients={["Tomate", "mozzarella", "jamón", "orégano"]}
          price={5950}
          image= ""
     />
         
        
        <CardPizza
          name="Española"
          ingredients={["Gorgonzola", "mozzarella", "parmesano", "provolone"]}
          price={6950}
          image="../assets/pepperoni.jpg"
        />
        <CardPizza
          name="Pepperoni"
          ingredients={["Mozzarella", "pepperoni", "orégano"]}
          price={6950}
          image="../assets/fourcheese.jpg"
        />
      </div>
    </div>
  );
};

export default Home;

