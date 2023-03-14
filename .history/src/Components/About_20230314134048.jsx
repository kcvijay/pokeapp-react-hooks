import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <h1>Pokemon App created in React</h1>
      <p>
        This is a project where users can browser all kinds of Pokemons and
        their specifications.
      </p>
      <p>
        The project gets data from{" "}
        <a href="https://pokeapi.co/" target="_blank noreferer">
          Pokemon API.
        </a>
      </p>
      <p>UI is done in React and vanilla CSS.</p>
      <p>
        Upon clicking 'More Details' in every Pokemon cards, you can see few
        more details about that Pokemon.
      </p>
      <p>
        View&nbsp;
        <a
          href="https://www.github.com/pokeapp-react-hooks"
          target="_blank noreferer"
        >
          Source Code
        </a>
      </p>
      <p>Happy browsing !</p>
    </div>
  );
};

export default About;
