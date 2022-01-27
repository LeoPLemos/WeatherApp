import React, { useEffect, useState } from "react";
import './Ciudad.css';
import env from "dotenv"
env.config()

const API_KEY = process.env.REACT_APP_API_KEY

export default function Ciudad({ciudadId, resetDetalle}) {
  
  // const { ciudadId } = useParams(); 
  // el estado city lo tengo hardcodeado para probar los estilos sin llamar a la api
  const [ city, setCity ] = useState({})

  //Llamado a la API del clima
  const getWeather = (ciudad) =>{
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?id=${ciudad}&lang=es&appid=${API_KEY}&units=metric`
    )
    .then((r) => r.json())
    .then((recurso) => {
      if (recurso.main !== undefined) {
        fetch(`http://api.openweathermap.org/data/2.5/onecall?lat=${recurso.coord.lat}&lon=${recurso.coord.lon}&units=metric&exclude=hourly,minutely,alerts&lang=es&appid=${API_KEY}`)
        .then(response => response.json())
        .then(res =>{
          
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].description,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
            forecast:res.daily
          };
          setCity(ciudad)
        })
      }})
  }

  useEffect (() =>{
    getWeather(ciudadId)
}, [ciudadId]);
  


  const diaSemana = (num) =>{
    if(num > 6){
      num = num-7
    }
    if(num === 0) return 'DOM';
    if(num === 1) return 'LUN';
    if(num === 2) return 'MAR';
    if(num === 3) return 'MIE';
    if(num === 4) return 'JUE';
    if(num === 5) return 'VIE';
    if(num === 6) return 'SAB';
  }
  let hoy = new Date().getDay();
  let hoyMasDos = diaSemana(hoy+2);
  let hoyMasTres = diaSemana(hoy+3);
  let hoyMasCuatro = diaSemana(hoy+4);
  let hoyMasCinco = diaSemana(hoy+5);

    
  if (!city) return <h4>La ciudad no existe</h4>;

  function handleOnCerrar(e){
    e.preventDefault();
    resetDetalle()
  }

  return (
    <div className="ciudad">
      
      {!city.forecast?
        <div className="cargando">Cargando...</div>
        : 
        <div className="container">
          <div onClick={handleOnCerrar} id="boton_volver">
            X
          </div>
          <div id="nombre_ciudad">{city.name}</div>
          <div className="info">
            <div className="actual">
              <div className="actual_img">  
                <img className="iconoClima"
                    src={`http://openweathermap.org/img/wn/${city.img}@2x.png`}
                    width="90"
                    height="90"
                    alt=""
                />
              </div>
              <div className="actual_datos">
                <div>Temperatura actual: {city.temp}º C</div>
                <div>Cielo: {city.weather}</div>
                <div>Viento: {city.wind} km/h</div>
              </div>
            </div>
            <br/>
            <div className="pronostico">
              
              <div className="card_pronostico mañana">
                <div className="dia">Mañana</div>
                <div className="pronostico_info">
                  <img className="iconoClima"
                    src={`http://openweathermap.org/img/wn/${city.forecast[1].weather[0].icon}@2x.png`}
                    width="60"
                    height="60"
                    alt=""
                  />
                  <div className="pronostico_datos">
                    <div>Min: {Math.round(city.forecast[1].temp.min)}º</div>
                    <div>Max: {Math.round(city.forecast[1].temp.max)}º</div>
                  </div>
                </div>
              </div>
              <div className="card_pronostico hoyMasDos">
                <div className="dia">{hoyMasDos}</div>
                <div className="pronostico_info">
                  <img className="iconoClima"
                    src={`http://openweathermap.org/img/wn/${city.forecast[2].weather[0].icon}@2x.png`}
                    width="60"
                    height="60"
                    alt=""
                  />
                  <div className="pronostico_datos">
                    <div>Min: {Math.round(city.forecast[2].temp.min)}º</div>
                    <div>Max: {Math.round(city.forecast[2].temp.max)}º</div>
                  </div>
                </div>
              </div>
              <div className="card_pronostico hoyMasTres">
                <div className="dia">{hoyMasTres}</div>
                <div className="pronostico_info">
                  <img className="iconoClima"
                    src={`http://openweathermap.org/img/wn/${city.forecast[3].weather[0].icon}@2x.png`}
                    width="60"
                    height="60"
                    alt=""
                  />
                  <div className="pronostico_datos">
                    <div>Min: {Math.round(city.forecast[3].temp.min)}º</div>
                    <div>Max: {Math.round(city.forecast[3].temp.max)}º</div>
                  </div>
                </div>
              </div>
              <div className="card_pronostico hoyMasCuatro">
                <div className="dia">{hoyMasCuatro}</div>
                <div className="pronostico_info">
                  <img className="iconoClima"
                    src={`http://openweathermap.org/img/wn/${city.forecast[4].weather[0].icon}@2x.png`}
                    width="60"
                    height="60"
                    alt=""
                  />
                  <div className="pronostico_datos">
                    <div>Min: {Math.round(city.forecast[4].temp.min)}º</div>
                    <div>Max: {Math.round(city.forecast[4].temp.max)}º</div>
                  </div>
                </div>
              </div>
              <div className="card_pronostico hoyMasCinco">
                <div className="dia">{hoyMasCinco}</div>
                <div className="pronostico_info">
                  <img className="iconoClima"
                    src={`http://openweathermap.org/img/wn/${city.forecast[5].weather[0].icon}@2x.png`}
                    width="60"
                    height="60"
                    alt=""
                  />
                  <div className="pronostico_datos">
                    <div>Min: {Math.round(city.forecast[5].temp.min)}º</div>
                    <div>Max: {Math.round(city.forecast[5].temp.max)}º</div>
                  </div>
                </div>
              </div>
            </div>  
          </div>
        </div>
      }
    </div>
  );
}
