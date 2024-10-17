import  { useState } from "react";

function AddAboutSchool() {
  const [about, setAbout] = useState("");
  const [aboutPhoto, setAboutPhoto] = useState(null);

  const handleAboutSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted About School:", about);
    console.log("Submitted About Photo:", aboutPhoto);
    
  };

  return (
    <>
      <h5 className="card-title"> About School:</h5>
      <div className="card">
        <form onSubmit={handleAboutSubmit}>
          <label>
            Enter School Description:
            <input
              type="text"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              placeholder="Enter about school"
            />
          </label>
          <label>Upload Photo:</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setAboutPhoto(e.target.files[0])}
          />
          <button type="submit" className="btn btn-primary mt-2">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default AddAboutSchool;
