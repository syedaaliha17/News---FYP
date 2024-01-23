import React, { useState } from "react";
import axios from "axios";

function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [result, setResult] = useState("");

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    // Perform search operation using the searchQuery
    console.log("Searching for:", searchQuery);
    const formData = new FormData();
    formData.append("news_text", searchQuery);
    axios
      .post("http://127.0.0.1:5000/api/predict", formData)
      .then((res) => {
        const prediction = res.data.prediction;
        let resultFromAPI = "Fake News";
        console.log("checking the res", prediction);

        for (let prop in prediction) {
          console.log("checking the res", prediction[prop]);
          if (prediction[prop] !== "Fake News") {
            resultFromAPI = "Valid News";
            return;
          }
        }
        console.log("resultFromAPI", resultFromAPI);
        setResult(resultFromAPI);
      })
      .catch((err) => console.log("checking the err", err));
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  console.log("checking result", result);

  return (
    <>
      <h3 style=
        {{
          justifyContent: "center",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "20px",
          margin: "15px"
        }}>
        PLEASE TYPE THE NEWS TO VERIFY IF IT'S FAKE OR REAL.
      </h3>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "26px" }}>
        <input
          style={{
            padding: "8px",
            marginRight: "18px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            width: "50%",
            fontSize: "16px",
          }}
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        {searchQuery !== "" ?
          <button
            style={{
              padding: "8px 16px",
              backgroundColor: "gray",
              color: "black",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "16px",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#5dbdc2")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "gray")}
            onClick={handleSearch}
          >
            Search
          </button>
          :
          <button
            disabled="true"
            style={{
              padding: "8px 16px",
              backgroundColor: "gray",
              color: "black",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "16px",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#5dbdc2")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "gray")}
            onClick={handleSearch}
          >
            Search
          </button>}
      </div>
      <div className="container"
        style={{
          justifyContent: "center",
          alignItems: 'center',
          textAlign: "center",
          fontSize: "20px",
          color: "gray"
        }}
      >
        {/* {searchQuery !== "" ? */}
          <p>Prediction : {result}</p>
          {/* : ''} */}

      </div>
    </>
  );
}

export default SearchBar;
