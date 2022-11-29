import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <h1>Pokemon App created in React</h1>
      <p>
        This is a classroom project for Fullstack Web Developer Program at BCH
        Helsinki, 2022.
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
      <p>Happy browsing !</p>
    </div>
  );
};

export default About;
