

import {useEffect,useState} from 'react'
import "./Rentals.css";
import axios from 'axios'
export const Rentals = () => {
  const [data, setData] = useState([]);
  const [change, setChange] = useState(false);
  const getDataFromServer = async () => {
    try {
      const get = await axios.get('http://localhost:8080/houses');
      setData(get.data);
    }
    catch(e){
      console.log('error in getDataFromServer', e);
    }
  }
  const handleRent = (value) =>{
    if(value === 'low'){
      let data2 = data.sort((a,b)=>{
        return ((+a.rent) -  (+b.rent))
      })
      console.log(data2)
      setData(data2)
      setChange(!change)
    
    } else {
      let data2 = data.sort((a,b)=>{
        return ((+b.rent) -  (+a.rent))
      })
      setData(data2)
      setChange(!change)
    }
  }
  useEffect(()=>{

  }, [change])
  const handleId = () => { 
      let data2 = data.sort((a,b)=>{
        return ((+a.id) -  (+b.id))
      })
      setData(data2)
      setChange(!change)
    
    
  }
  const handleArea = (value) => {
    if(value === 'low'){
      console.log('here')
      let data2 = data.sort((a,b)=>{
        return ((+a.areaCode) -  (+b.areaCode))
      })
      console.log(data2)
      setData(data2)
      setChange(!change)
    
    } else {
      let data2 = data.sort((a,b)=>{
        return ((+b.areaCode) -  (+a.areaCode))
      })
      console.log(data2)
      setData(data2)
      setChange(!change)
    }
  }
  const handleAreaCode = (value) =>{
    if(!value) getDataFromServer()
    let k = data.filter(person => String(person.address).startsWith(value))
    if(!k.length > 0) return
    setData(k)
    setChange(!change)
    
  }
  useEffect(()=>{
    getDataFromServer();
  }, [])
  return (
    <div className="rentalContainer">
      <div className="sortingButtons">
        <button className="sortById" onClick={()=>{handleId()}}>Sort by ID</button>
        <button className="sortByRentAsc"  onClick={()=>{handleRent("low")}}>Rent Low to high</button>
        <button className="sortByRentDesc"  onClick={()=>{handleRent('high')}}>Rent High to low</button>
        <button className="sortByAreaAsc"  onClick={()=>{handleArea("low")}}>Area Low to high</button>
        <button className="sortByAreaDesc"  onClick={()=>{handleArea("high")}}>Area High to Low</button>
      </div>
      <input
        className="searchAddress"
        type="text"
        placeholder="Search Address"
        onChange={(e)=>{handleAreaCode(e.target.value)}}
      />
      <table className="table" border="1">
        <thead>
          <tr>
            <th>Sl.no.</th>
            <th>Name</th>
            <th>Owner Name</th>
            <th>Address</th>
            <th>Area Code</th>
            <th>Rent</th>
            <th>Available For</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {data.map((house) => {
            
            return (
              <tr key={house.id} className="houseDetails">
                <td className="houseId">{house.id}</td>
                <td className="houseName">{house.name} </td>
                <td className="ownersName">{house.ownerName}</td>
                <td className="address">{house.address}</td>
                <td className="areaCode">{house.areaCode}</td>
                <td className="rent">{house.rent}</td>
                <td className="preferredTenants">
                  <span>{house.married ? "Married" : "Non-Married"}</span>
                  <span> / </span>
                  <span>{house.bachelor ? "Bachelor" : "Non-Bachelor"}</span>
                </td>
                <td className="houseImage">
                  <img src={house.image} alt="house" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
