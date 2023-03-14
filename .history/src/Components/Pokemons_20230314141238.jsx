import React, { useState, useEffect } from "react";
import axios from "axios";

import { Generations } from "../../public/Generations";
import Card from "./Card";
import GenDropdown from "./GenDropdown";
import Loader from "../Assets/loader.gif";

import classes from "./Pokemons.module.css";

const PokeList = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`)
      .then((response) => {
        const fetches = response.data.results.map((poke) => {
          return axios.get(poke.url).then((res) => res.data);
        });

        Promise.all(fetches).then((response) => {
          setData(response);
          setIsLoading(false);
        });
      });
  }, []);

  const generationPokemonsHandler = (limit, offset) => {
    setIsLoading(true);
    axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    );
  };

  if (isLoading) {
    return (
      <div className="loader">
        <img src={Loader} alt="loader"></img>
      </div>
    );
  }

  return (
    <div className={classes.pokemons}>
      <h1>Pokemons</h1>
      <GenDropdown />
      <div className={classes.cards}>
        {data.map((card) => {
          return (
            <Card
              key={card.name}
              id={card.id}
              image={card.sprites.other.home.front_default}
              name={card.name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PokeList;
