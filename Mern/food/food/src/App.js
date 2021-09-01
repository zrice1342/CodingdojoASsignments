
import './App.css';
import Menu from './Components/Menu' 

function App() {
  return (
  <>
      <div className="App">
          <h1>Dojo Dinner Look at our food!</h1>
            <p>Thanks for supporting a small business</p>
        <Menu nameOfDish= "Momo" price="12.99"></Menu>
        <p> A napoli dish</p>
        <Menu nameOfDish= "Pizza" price="13.99"></Menu>
        <p> Pizza Pizza </p>
        <Menu nameOfDish= "Plantains" price="14.99"></Menu>
        <p>Kinda like a nanner but not</p>
      </div>
    </>
  );
}

export default App;
