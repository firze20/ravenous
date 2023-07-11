import React, { useState } from "react";

export const SearchBarComponent = () => {
  const [restaurant, setRestauraunt] = useState("");
  const [location, setLocation] = useState("");

  const onSubClick = () => {
    alert("Clicou! 🥴");
  };

  return (
    <div className="search">
      <div className="subHeader">
        <button className="headButton" onClick={onSubClick}>
          Best Match
        </button>
        <button className="headButton" onClick={onSubClick}>
          Highest Rated
        </button>
        <button className="headButton" onClick={onSubClick}>
          Most Reviewed
        </button>
      </div>
      <div className="inputs">
        <input
          onChange={(e) => setRestauraunt(e.target.value)}
          placeholder="Search Business"
        />
        <input
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Where?"
        />
      </div>
      <button className="buttonSearch">Let's Go</button>
    </div>
  );
};
