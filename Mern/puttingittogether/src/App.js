import './App.css';
import People from './componets/People'

function App() {
  return (
    <>
    <div className="App">
      <People fname = "John" lname = "Doe" numAge={45} hair="brown"></People>
      <People fname = "lawn" lname = "Doe" numAge={4} hair="blonde"></People>
      <People fname = "shawn" lname = "Doe" numAge={5} hair="red"></People>
    </div>
    </>
  );
}

export default App;
