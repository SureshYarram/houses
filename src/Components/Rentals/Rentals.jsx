import "./Rentals.css";

export const Rentals = ({result,sortbyid,rentsortinc,rentsortdec,sortareainc,sortareadec}) => {
  return (
    <div className="rentalContainer">
      <div className="sortingButtons">
        <button onClick={()=>sortbyid()} className="sortById">Sort by ID</button>
        <button onClick={()=>rentsortinc()} className="sortByRentAsc">Rent Low to high</button>
        <button onClick={()=>rentsortdec()}className="sortByRentDesc">Rent High to low</button>
        <button onClick={()=>sortareainc()}className="sortByAreaAsc">Area Low to high</button>
        <button onClick={()=>sortareadec()}className="sortByAreaDesc">Area High to Low</button>
      </div>
      <input
        className="searchAddress"
        type="text"
        placeholder="Search Address"
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
          {result.map((house, index) => {
            return (
              <tr key={house.id} className="houseDetails">
                <td className="houseId">{house.id}</td>
                <td className="houseName">{house.name} </td>
                <td className="ownersName">{house.ownerName}</td>
                <td className="address">{house.address}</td>
                <td className="areaCode">{house.areaCode}</td>
                <td className="rent">{house.rent}</td>
                <td className="preferredTenants">
                  {/* Show text Both or Bachelors or Married based on values */}
                  {house.bachelor}
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
