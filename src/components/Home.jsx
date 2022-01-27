import React, { useState } from "react";
import "./Home.css"
import Nav from "../components/Nav.jsx";
import Cards from "../components/Cards.jsx";
import Ciudad from "../components/Ciudad.jsx";
import SearchBar from "./SearchBar.jsx";
import env from "dotenv"
env.config()

const API_KEY = process.env.REACT_APP_API_KEY

function Home() {
  const [cities, setCities] = useState([]);
  const [ muestraDetalle, setMuestraDetalle ] = useState(false)

  function onClose(id) {
    setCities((oldCities) => oldCities.filter((c) => c.id !== id));
  }

  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}&units=metric&lang=es`
    )
    .then((r) => r.json())
    .then((recurso) => {
        if (recurso.main !== undefined) {
            
            const ciudad = {
                min: Math.round(recurso.main.temp_min),
                max: Math.round(recurso.main.temp_max),
                img: recurso.weather[0].icon,
                id: recurso.id,
                wind: recurso.wind.speed,
                temp: recurso.main.temp,
                name: recurso.name,
                weather: recurso.weather[0].main,
                clouds: recurso.clouds.all,
                latitud: recurso.coord.lat,
                longitud: recurso.coord.lon,
                
            };
            /* controlar si la ciudad ya existe */
            const existe = cities.filter((city) => city.id === ciudad.id);
            if (existe.length !== 0) {
                alert(
                "La ciudad ya existe"
                ); /* si ya existe mostrar un aviso y no agregarla de nuevo */
            } else if(cities.length > 4){
                //si las ciudades cargadas son 5 elimina la primera
                let newCities = cities.slice(1)
                newCities.push(ciudad)
                setCities(newCities);
                }
                else{
                setCities(oldCities=>[...oldCities, ciudad])
                }
        
        } else {
            alert("Ciudad no encontrada");
        }
    });
  }

//   function onFilter(ciudadId) {
//     let ciudad = cities.filter((c) => c.id === parseInt(ciudadId));
//     if (ciudad.length > 0) {
//       return ciudad[0];
//     } else {
//       return null;
//     }
//   }

  function getDetalle (cityId){
    setMuestraDetalle(cityId)
  }

  function resetDetalle (){
      setMuestraDetalle(false)
  }

  return (
    <div>
        <div className="header">
            <div className="navBar">
                <Nav onSearch={onSearch} /> 
            </div>
            <div className="searchBar">   
                <SearchBar onSearch={onSearch} />
            </div>
        </div>
        <div className="container_info">
            <div className="container_detalle">
                {
                    muestraDetalle?
                        <Ciudad ciudadId={muestraDetalle} resetDetalle={resetDetalle}/>
                    :
                    null
                }
                
            </div>
            <div className="container_cards">
                <Cards cities={cities} onClose={onClose} getDetalle={getDetalle}/>
            </div>
        </div>
              
    </div>
  );
}

export default Home;