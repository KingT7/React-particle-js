import React from 'react';
import Particles from "react-tsparticles";
import './App.css';
import particlesOptions from "./particles.json";

function App() {
    return ( <div className = "App" >
        <Particles options = { particlesOptions }/> </div>
    );
}

export default App;