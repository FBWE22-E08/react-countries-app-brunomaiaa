import React, { useState } from "react";
import SearchResult from "../SearchResult";
import CountryCard from "../CountryCard";

export default function ByName() {
  //save the user input in a local state (call it searchInput), then fetch that country on submit, then save the received country in another local state (call it country) - always check how does the response look like using console.log before saving it in the state. 

  const [name, setName] = useState("");
  const [countries, setCountries] = useState([]);
  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://restcountries.com/v2/name/${name}
    `)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 404) {
          alert("Country does not exist");
        } else {
          setCountries(data);
        }
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={{ padding: "30px" }}>
        <input onChange={handleChange} type="text" />
        <button>search</button>
      </form>
      {/* show the country you received from fetch and saved in the local state (use SearchResult component to display that country) */}
      {countries.map((country, i) => (
        <div className="by-name-card">
          <SearchResult country={country} key={i} />
        </div>
      ))}
    </div>
  );
}
