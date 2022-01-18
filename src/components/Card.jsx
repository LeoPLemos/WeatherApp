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
      {/* <Link to={`ciudad/${id}`}> */}
        <div className="card_container" onClick={handleOnClick}>
          <div className="card_header">
            <div className="card_title">
              <p>{name}</p>
            </div>
            <div id="closeIcon" >
              <button onClick={handleOnClose}>
                X
              </button>
            </div>
          </div>  
          <div className="card_body">
            <div>
                <img
                  className="iconoClima"
                  src={"http://openweathermap.org/img/wn/" + img + "@2x.png"}
                  width="70"
                  height="70"
                  alt=""
                />
            </div>
            <div className="temperatura">
                <p>Min: {min}°</p>
                <p>Max: {max}°</p>
            </div>
          </div>
        </div>
      {/* </Link> */}
    </div>
  );
}
