import "./App.css";
import { Route, Routes } from "react-router-dom";
import About from "../components/About.jsx";
import Ciudad from "../components/Ciudad.jsx";
import Home from "../components/Home";



function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/ciudad/:ciudadId" element = {<Ciudad />} />
      </Routes>
    </div>
  );
}

export default App;
