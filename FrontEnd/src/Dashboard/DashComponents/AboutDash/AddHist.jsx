import { useState } from "react";

function AddHistory() {
  const [history, setHistory] = useState("");
  const [historyPhoto, setHistoryPhoto] = useState(null);

  const handleHistorySubmit = (e) => {
    e.preventDefault();
    console.log("Submitted History:", history);
    console.log("Submitted History Photo:", historyPhoto);
    
  };

  return (
    <>
      <h5 className="card-title"> History Of School:</h5>
      <div className="card">
        <form onSubmit={handleHistorySubmit}>
          <label>
            Enter School History:
            <input
              type="text"
              value={history}
              onChange={(e) => setHistory(e.target.value)}
              placeholder="Enter history"
            />
          </label>
          <label>Upload Photo:</label>
          <input className="input1"
            type="file"
            accept="image/*"
            onChange={(e) => setHistoryPhoto(e.target.files[0])}
          />
          <button type="submit" className="buttony buttony-primary mt-2">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default AddHistory;
