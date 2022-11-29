import React from "react";
import { Link } from "react-router-dom";
import classes from "./Notfound.module.css";

const Notfound = () => {
  return (
    <div className={classes.pnf_wrapper}>
      <h1 className={classes.error_header}>ERROR 404</h1>
      <p>Page not found!</p>
      <p>Where do you want to go?</p>
      <div className={classes.redirect_links}>
        <Link to="/">&larr;&nbsp;Home</Link>
        <Link to="/pokemons">Pokemons&nbsp;&rarr;</Link>
      </div>
    </div>
  );
};

export default Notfound;
