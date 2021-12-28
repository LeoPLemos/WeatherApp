import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <Link to="/">
        <button>Home</button>
      </Link>
      <h2>Soy el About</h2>
    </div>
  );
}

export default About;
