import "./App.css";
import { Rentals } from "./Components/Rentals/Rentals";
import { AddHouse } from "./Components/AddHouse/AddHouse";
import {useState} from 'react'
function App() {
  const [change, setChange] = useState(false);
  return (
    <div className="App">
      <button className="toggleForm" onClick={()=> setChange(!change)}>
        {change ? "Show Rentals" : 'Add House'}
        {/* Show text Add House or Show Rentals based on state */}
      </button>
        {change ?  <AddHouse /> : <Rentals />}
      {/* Show component based on state */}
      <br />
    </div>
  );
}

export default App;