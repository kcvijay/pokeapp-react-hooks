import React from "react";
import "./GenDropdown.css";

const GenDropdown = ({ getGenPokemon }) => {
  return (
    <div className="genDropdown">
      <p>Pick a Generation&nbsp;&#9660;</p>
      <div className="generations">
        <ul>
          <li>
            <button id="0" onClick={(e) => getGenPokemon(e.target.id)}>
              Generation #1
            </button>
          </li>
          <li>
            <button id="1" onClick={(e) => getGenPokemon(e.target.id)}>
              Generation #2
            </button>
          </li>
          <li>
            <button id="2" onClick={(e) => getGenPokemon(e.target.id)}>
              Generation #3
            </button>
          </li>
          <li>
            <button id="3" onClick={(e) => getGenPokemon(e.target.id)}>
              Generation #4
            </button>
          </li>
          <li>
            <button id="4" onClick={(e) => getGenPokemon(e.target.id)}>
              Generation #5
            </button>
          </li>
          <li>
            <button id="5" onClick={(e) => getGenPokemon(e.target.id)}>
              Generation #6
            </button>
          </li>
          <li>
            <button id="6" onClick={(e) => getGenPokemon(e.target.id)}>
              Generation #7
            </button>
          </li>
          <li>
            <button id="7" onClick={(e) => getGenPokemon(e.target.id)}>
              Generation #8
            </button>
          </li>
          <li>
            <button id="8" onClick={(e) => getGenPokemon(e.target.id)}>
              Generation #9
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GenDropdown;
