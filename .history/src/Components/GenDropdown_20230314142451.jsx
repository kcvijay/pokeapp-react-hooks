import React from "react";
import "./GenDropdown.css";

const GenDropdown = ({ getGenPokemon }) => {
  return (
    <div className="genDropdown">
      <p>Pick a Generation&nbsp;&#9660;</p>
      <div className="generations">
        <ul>
          <li>
            <button id="0" onClick={(id) => getGenPokemon(id)}>
              Generation #1
            </button>
          </li>
          <li>
            <button id="1" onClick={(id) => getGenPokemon(id)}>
              Generation #2
            </button>
          </li>
          <li>
            <button id="2">Generation #3</button>
          </li>
          <li>
            <button id="3">Generation #4</button>
          </li>
          <li>
            <button id="4">Generation #5</button>
          </li>
          <li>
            <button id="5">Generation #6</button>
          </li>
          <li>
            <button id="6">Generation #7</button>
          </li>
          <li>
            <button id="7">Generation #8</button>
          </li>
          <li>
            <button id="8">Generation #9</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GenDropdown;
