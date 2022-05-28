import React from "react";
import { render } from "react-dom";
import Juan from './assets/juan.jpg'
import Logo from './assets/logo.png'
import Map from "./Map";
import './index.css'


export function App() {
  return (
    <div className="Container">
      <header>
        <img src={Logo} alt='dt Money' className="Logo" />
      </header>
      <h1 className="Center">Apresentação de Grafo</h1>
      <h2 className="Center">Equipe</h2>
      <div className="Area-Image">
        <label>
          <img src={Juan} alt="Integrante" />
          <p>Juan Carlos</p>
          <p>Matricula: 03174765</p>
        </label>
        <label>
          <img src={Juan} alt="Integrante" />
          <p>Juan Carlos</p>
          <p>Matricula: 03174765</p>
        </label>
        <label>
          <img src={Juan} alt="Integrante" />
          <p>Juan Carlos</p>
          <p>Matricula: 03174765</p>
        </label>
        <label>
          <img src={Juan} alt="Integrante" />
          <p>Juan Carlos</p>
          <p>Matricula: 03174765</p>
        </label>

      </div>

      <h3 className="Center">Professor</h3>
      <div className="Area-Image">
        <img src={Juan} alt="Integrante" style={{ marginBottom: '145px' }} />
      </div>
      <div>
        <Map />
      </div>


    </div>

  );
}
render(<App />, document.getElementById("root"));