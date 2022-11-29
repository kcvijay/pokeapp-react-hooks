import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <Link className="logo" to="/">
        PokeApp in React
      </Link>
      <Nav />
    </header>
  );
}
