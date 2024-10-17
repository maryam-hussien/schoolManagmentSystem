import  { useState } from "react";

function AddLocation() {
  const [location, setLocation] = useState("");
  const [mapSrc, setMapSrc] = useState("");

  const handleLocationSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Location:", location);
    console.log("Submitted Google Map Source:", mapSrc);
   
  };

  return (
    <>
      <h5 className="card-title"> School Location</h5>
      <div className="card">
        <form onSubmit={handleLocationSubmit}>
          <label>
            Enter School Location:
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter location"
            />
          </label>
          <label>
            Google Map Source (URL):
            <input
              type="text"
              value={mapSrc}
              onChange={(e) => setMapSrc(e.target.value)}
              placeholder="Enter Google Maps embed link"
            />
          </label>
          <button type="submit" className="btn btn-primary mt-2">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default AddLocation;
