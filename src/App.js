import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Pages/Layout";
import Home from "./Components/Home";
import Pokemons from "./Components/Pokemons";
import About from "./Components/About";
import PokeSingle from "./Components/PokeSingle";
import Notfound from "./Components/Notfound";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="pokemons" element={<Pokemons />} />
          <Route path="pokemons/:pokesingle" element={<PokeSingle />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
