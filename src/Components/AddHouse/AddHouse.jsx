import axios from "axios";
import { useEffect, useState } from "react";
import { Rentals } from "../Rentals/Rentals";

export const AddHouse = () => {


   const [formData,setFormData] = useState({});
   const [result,setResult] = useState([])
   
        

      useEffect(()=>{
        GetData();
      },[])
       const Handlechange = (e)=>{
         const {className,value} = e.target;

         if([className]=="married"&&[className].checked===true){
          setFormData({...formData,married:"married"})
         }
         setFormData({...formData,[className]:value})
       }
      const Handlesubmit = (e)=>{
           e.preventDefault();
           axios.post("http://localhost:8080/houses",formData).then(()=>GetData());
      }

      const GetData = ()=>{
        axios.get("http://localhost:8080/houses").then((res)=>{
                  setResult([...res.data])
        })
      }

      function sortbyid(){
  let res = result.sort((a,b)=>{
    if(a.id<b.id) return -1
    return 0
  })
  setResult([...res])
      }
      function  rentsortinc(){
        let res = result.sort((a,b)=>{
          if(a.rent<b.rent) return -1
          return 0
        })
        setResult([...res])
      }
      function  rentsortdec(){
        let res = result.sort((a,b)=>{
          if(b.rent<a.rent) return -1
          return 0
        })
        setResult([...res])
      }
      function sortareainc(){
        let res = result.sort((a,b)=>{
          if(a.areaCode<b.areaCode) return -1
          return 0
        })
        setResult([...res])
      }
      function sortareadec(){
        let res = result.sort((a,b)=>{
          if(b.areaCode<a.areaCode) return -1
          return 0
        })
        setResult([...res])
      }
  return (
    <div className="addHouseContainer">
      <form onSubmit={Handlesubmit}>
        <label>name</label>
        <input onChange={Handlechange} type="text" className="name" value={formData.name} />
        <br />
        <label>ownerName</label>
        <input onChange={Handlechange} value={formData.ownerName} type="text" className="ownerName" required="true" />
        <br />
        <label>address</label>
        <input onChange={Handlechange} value={formData.address} type="text" className="address" required />
        <br />
        <label>areaCode</label>
        <input onChange={Handlechange} value={formData.areaCode} type="text" className="areaCode" required />
        <br />
        <label>rent</label>
        <input onChange={Handlechange} value={formData.rent} type="text" className="rent" required />
        <br />
        <label>preferredTenant</label>
        <br />
        <label>bachelor</label>
        <input onChange={Handlechange} checked={formData.bachelor} type="checkbox" className="bachelor" />
        <br />
        <label>married</label>
        <input onChange={Handlechange} checked={formData.married} type="checkbox" className="married" />
        <br />
        <label>image</label>
        <input onChange={Handlechange} value={formData.image} type="text" className="image" required="false"/>
        <br />
        <input className="submitBtn" type="submit" />
      </form>

      <div>
        <Rentals result = {result } sortbyid={sortbyid} rentsortinc={rentsortinc} rentsordec={rentsortdec} sortareainc={sortareainc} sortareadec={sortareadec}/>
      </div>
    </div>
  );
};
