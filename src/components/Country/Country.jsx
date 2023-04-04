import React from "react";
import "./Country.css";

const Country = ({ country, handleRemoveButton }) => {
  const { name, capital, region, area, languages, flags, population } = country;

  return (
    <div className="container rounded-lg  hover:scale-105">
      <img
        className="aspect-video w-full rounded-lg"
        src={flags.png}
        alt={flags.alt}
      />
      <div className="py-2 pl-4 font-medium text-[#50586C]">
        <h1>Name: {name.common}</h1>
        <h2>Capital: {capital && capital[0]}</h2>
        <h2>
          <span>Area: {area}</span>
          <span className="pl-2">Population: {population}</span>
        </h2>
        <h2>Region: {region}</h2>
        <h2 className="flex gap-2">
          Languages:
          {languages &&
            Object.keys(languages)
              .slice(0, 2)
              .map((key) => <p key={key}> "{languages[key]}"</p>)}
        </h2>
      </div>
      <div className="flex justify-center pb-2">
        <button
          className="btn-grad"
          onClick={() => handleRemoveButton(name.common)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Country;
