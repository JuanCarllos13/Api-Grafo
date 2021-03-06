import React from "react";
import { render } from "react-dom";
import Juan from './assets/juan.jpg'
import Marcos from './assets/marcos.jpg'
import Mauri from './assets/mauri.jpg'
import Ana from './assets/ana.png'
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
          <img src={Juan} alt="Integrante Juan"  className="imageInte"/>
          <p>Juan Carlos</p>
          <p>Matricula: 03174765</p>
        </label>
        <label>
          <img src={Marcos} alt="Integrante Marcos"  className="imageInte"/>
          <p>Marcos Vinicius</p>
          <p>Matricula: 03177734</p>
        </label>
        <label>
          <img src={Mauri} alt="Integrante"  className="imageInte"/>
          <p>Mauricio Da Costa</p>
          <p>Matricula: 03106694</p>
        </label>
        <label>
          <img src={Ana} alt="Integrante"  className="imageInte"/>
          <p>Ana Paula</p>
          <p>Matricula: 03111565</p>
        </label>
      </div>
      <div>
        <Map />
      </div>
    </div>
  );
}
render(<App />, document.getElementById("root"));