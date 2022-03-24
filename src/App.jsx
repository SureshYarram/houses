import "./App.css";
import { Rentals } from "./Components/Rentals/Rentals";
import { AddHouse } from "./Components/AddHouse/AddHouse";
import { useState } from "react";
import axios from "axios";

function App() {
  
  const [show ,setShow ] = useState(true);
  const [data,setData] = useState([])

  const getData = ()=>{
    axios.get("http://localhost:8080/houses").then((res)=>{
      setData(res.data)
    })
  }
  return (
    <div className="App" onClick={()=>{
      setShow(!show)
    }}>
      {show ? "show rRentals" : "Add House"}
      <button className="toggleForm">
        {/* Show text Add House or Show Rentals based on state */}
        {/* <h3>Add House</h3> */}
        < AddHouse/>
      </button>
      {/* Show component based on state */}
{show ? <AddHouse getData={getData}/> :<Rentals data={data} setData={setData}/>}
      <br />
    </div>
  );
}

export default App;
