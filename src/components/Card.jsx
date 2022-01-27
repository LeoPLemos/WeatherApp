import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

export default function Card({ min, max, name, img, onClose, id, getDetalle }) {

  const handleOnClick = () =>{
    getDetalle(id)
  }

  const handleOnClose = (e) =>{
    e.stopPropagation();
    onClose()
  }

  return (
    <div>
      <div className="card_container" onClick={handleOnClick}>
        <div className="card_header">
          {/* <div className="card_title"> */}
            <p id="city">{name}</p>
          {/* </div> */}
          <div id="closeIcon" onClick={handleOnClose}>
              X
          </div>
        </div>  
        <div className="card_body">
          <img
            className="iconoClima"
            src={"http://openweathermap.org/img/wn/" + img + "@2x.png"}
            width="50"
            height="50"
            alt=""
          />
          <div className="temperatura">
              <p className="data_temp">Min: {min}°</p>
              <p className="data_temp">Max: {max}°</p>
          </div>
        </div>
      </div>
    </div>
  );
}
