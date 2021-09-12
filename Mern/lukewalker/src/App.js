
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Display from './componets/Display'
import Search from './componets/Search'
function App() {
  return (
    <BrowserRouter>
    <div className="App container-fluid">
      <h1>Hello ApiWalker</h1>
      <Search></Search>
      <Switch>
        <Route exact path = "/:category/:id">
          <Display></Display>
        </Route>
      </Switch>
    </div>
  </BrowserRouter>
  );
}

export default App;
