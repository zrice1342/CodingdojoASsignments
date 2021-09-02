
import './App.css';
import Menu from './Components/Menu' 

function App() {
  return (
  <>
      <div className="App">
      <h1>Dojo Diner! Take a look at our tasty menu!</h1>
      <p>Thank you for supporting small businesses!</p>
      <Menu nameOfDish= "Momo" price = "$12.99" numMealsServed = {10}>
          <p>A Nepali dish basically like a dumpling</p>
          <i>Vegan gluten free options available!</i>
      </Menu>
      <Menu nameOfDish= "Maduros" price = "$15.99" numMealsServed = {5}>
          <p>Sweet Plantains straight from the Chilean Mountains!</p>
      </Menu>
      <Menu nameOfDish= "Buffalo Chicken Pizza" price = "$20.99" numMealsServed = {12}>
          <p>Straight out of the Buffalo NY location!</p>
          <i>Contains Wheat**</i>
      </Menu>

    
      {/* <Menu></Menu>
      <Menu></Menu>
      <Menu></Menu> */}

    </div>
    </>
  );
}

export default App;
