// FIX:        Fix the problem while mapping the data for moves and types

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import classes from "./PokeSingle.module.css";

const PokeSingle = () => {
  const params = useParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${params.pokesingle}`)
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div className={classes.pokeSingleWrapper}>
      <h3 className={classes.pokesingle_header}>{data.name}</h3>
      <div className={classes.pokesingle_details}>
        <img src={data.sprites?.other.home.front_default} alt={data.name}></img>
        <table className={classes.pokesingle_table}>
          <thead>
            <tr>
              <th>Features</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Height</td>
              <td>{data.height / 10} Meter</td>
            </tr>

            <tr>
              <td>Weight</td>
              <td>{data.weight / 10} Kg</td>
            </tr>

            <tr>
              <td>Types</td>
              <td>
                {data.types
                  .map((type) => {
                    return type.type.name;
                  })
                  .join(", ")}
              </td>
            </tr>

            <tr>
              <td>Moves</td>
              <td>{data.moves.length}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={classes.goBackWrapper}>
        <button className="go-back" onClick={() => navigate(-1)}>
          Go back
        </button>
      </div>
    </div>
  );
};

export default PokeSingle;
