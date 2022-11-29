import React, { useState, useEffect } from "react";
import classes from "./Pokemons.module.css";

import Card from "./Card";
import axios from "axios";

const PokeList = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")
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

  return (
    <div>
      <h1>Pokemons</h1>
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
