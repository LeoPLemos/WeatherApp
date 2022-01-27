import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");
  const navigate = useNavigate();
  return (
    <div>  
        <form
          className="agregar_ciudad"
          onSubmit={(e) => {
            e.preventDefault();
            onSearch(city);
            setCity("");
          }}
        >
          <div >
            <input
              className="input"
              type="text"
              placeholder="Agregar ciudad..."
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          
            <input
              className="boton_agregar" 
              type="submit" 
              value="+" 
            />
        </form>
    </div>
  );
}
