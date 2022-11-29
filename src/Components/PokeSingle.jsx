import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import Loader from "../Assets/loader.gif";

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
    return (
      <div className="loader">
        <img src={Loader} alt="loader"></img>
      </div>
    );
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
              <td>{data.height / 10} m</td>
            </tr>
            <tr>
              <td>Weight</td>
              <td>{data.weight / 10} Kg</td>
            </tr>
          </tbody>
        </table>
      </div>

      <button className={classes.goBack} onClick={() => navigate(-1)}>
        &larr;&nbsp;Go back
      </button>
    </div>
  );
};

export default PokeSingle;
