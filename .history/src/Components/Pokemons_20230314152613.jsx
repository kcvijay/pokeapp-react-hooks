import React, { useState, useEffect } from "react";
import axios from "axios";

import { Generations } from "../Generations";
import Card from "./Card";
import GenDropdown from "./GenDropdown";
import Loader from "../Assets/loader.gif";

import classes from "./Pokemons.module.css";

const PokeList = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [genId, setGenId] = useState(1);

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

  const generationPokemonsHandler = (index) => {
    setIsLoading(true);
    axios
      .get(
        `https://pokeapi.co/api/v2/pokemon?limit=${Generations[index].limit}&offset=${Generations[index].offset}`
      )
      .then((response) => {
        const fetches = response.data.results.map((poke) => {
          return axios.get(poke.url).then((res) => res.data);
        });

        Promise.all(fetches).then((response) => {
          setData(response);
          setIsLoading(false);
          setGenId(Generations[index++]);
        });
      });
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
      <h1>Pokemons Generation {genId}</h1>
      <GenDropdown getGenPokemon={(i) => generationPokemonsHandler(i)} />
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
