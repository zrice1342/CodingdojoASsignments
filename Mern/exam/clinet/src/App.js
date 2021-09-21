import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import AllPets from './componets/AllPets';
import NewPetForm from './componets/NewPetForm.js';
import OneNinja from './componets/OnePet.js';
import Edit from '/Users/zackrice/Desktop/CodingDojo/CodingdojoASsignments/Mern/exam/clinet/src/componets/Edit';

import {
  BrowserRouter,
  Switch,
  Route,
  Link 
} from "react-router-dom";


function App() {

  

  
  return (
    <BrowserRouter>
      <div className="App container">
        <h1>Pet Shelter</h1>
        {/* <a className= "btn btn-success" href="/new">Create a new ninja</a> */}
        <Link className= "btn btn-info mr-3" to= "/">Home</Link>
        <Link className= "btn btn-success" to= "/new">Add a pet</Link>


        <Switch>
          <Route exact path= "/">
            <AllPets></AllPets>
          </Route>
          <Route exact path="/new">
            <NewPetForm></NewPetForm>
          </Route>
          <Route exact path= "/pets/:idParam">
            <OneNinja></OneNinja>
          </Route>
          <Route exact path = "/pets/edit/:idParam">
            <Edit></Edit>
          </Route>
        </Switch>
        
      </div>
    </BrowserRouter>
  );
}

export default App;