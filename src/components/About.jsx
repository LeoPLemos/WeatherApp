import React from "react";
import { Link } from "react-router-dom";
import "./About.css"

function About() {
  return (
    <div className="about_page">
      <Link to="/" className="link">
        <div className="boton_home">Home</div>
      </Link>
      <h2 className="titulo">About</h2>
      <div className="about_container">
        <p id="about_contenido">
          Mi nombre es Leonardo Lemos y he desarrollado esta App <br/>como parte de mi aprendizaje durante el Bootcamp de Henry.<br/>
          La misma consume datos de la API externa <br/>OpenWeatherMap (<a href="https://openweathermap.org/api">https://openweathermap.org/api</a>)
          <br/>y la renderiza en cartas por ciudad. <br/>También brinda información detallada de la ciudad seleccionada asi como un pronóstico para los próximos 5 días.
          <br/>Para su desarrollo se utilizó JavaScript y React JS. 


        </p>
      </div>
    </div>
  );
}

export default About;
