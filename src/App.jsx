import { useEffect, useState } from "react";
import uuid from "react-uuid";
import "./components/Country/Country.css";
import Country from "./components/Country/Country";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [countries, setCountries] = useState([]);
  // const [filteredCountries, setFilteredCountries] = useState(countries);
  const [searchCountry, setSearchCountry] = useState("");

  const handleRemoveButton = (name) => {
    const filteredRemoveCountries = countries.filter(
      (country) => country.name.common !== name
    );
    setCountries(filteredRemoveCountries);
  };

  const handleSearch = (event) => {
    setSearchCountry(event.target.value);
  };

  useEffect(() => {
    let value = searchCountry.toLowerCase();
    const searchResult = countries.filter((country) => {
      const countryName = country.name.common.toLowerCase();
      return countryName.startsWith(value);
    });
    setCountries(searchResult);
  }, [searchCountry]);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async (url) => {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      setIsLoading(false);
    };
    fetchData("https://restcountries.com/v3.1/all");
  }, []);
  return (
    <div className="App">
      <h1 className="pt-4 text-center text-4xl">Country App</h1>
      {isLoading && <h1 className="pt-8 text-center text-2xl">Loading...</h1>}
      <div className="mt-4 flex justify-center">
        <input
          className="search-input rounded-lg py-2 pl-3"
          type="text"
          name=""
          id=""
          placeholder="Search country"
          value={searchCountry}
          onChange={handleSearch}
        />
      </div>
      <div className="mx-auto grid w-11/12 grid-cols-1 gap-6 p-6 md:grid-cols-3 lg:grid-cols-4">
        {countries.map((country) => (
          <Country
            key={uuid()}
            country={country}
            handleRemoveButton={handleRemoveButton}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
