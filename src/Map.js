import React from "react";
import L from "leaflet";
import "./Style.css";


// biblioteca de API de roteamento ao mapa Leaflet
require("leaflet-routing-machine");

const style = {
  width: "100%",
  height: "100vh"
};

class Map extends React.Component {
  componentDidMount() {
    // Criação do Mapa
    this.map = L.map("map", {
      zoom: 13,
      layers: [
        // biblioteca de importação da API
        L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {  // demostração do maps
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' //creditos para o uso
        }),
      ]
    });

    // estilização das cores, caminho de rotas
    var routeControl = L.Routing.control({
      lineOptions: {
        styles: [
          {
            color: "blue", 
            opacity: "0.7",  
            weight: 6
          }
        ]
      }
    })
    // Adicionando a rota no maps
      .addTo(this.map)


    // Definindo Parametros da localização
    var options = {
      enableHighAccuracy: true, // Verificando Requisições
      timeout: 5000,  // Tentativa de 5 em 5 segundos
      maximumAge: 0  // retorna a função
    };
    
    // função de retorno com sucesso 
    function success(pos) {
      var crd = pos.coords;

      var newLatLngA = new L.LatLng(crd.latitude, crd.longitude, "pointA"); // Latitude e Longitude é a localização atual
      var newLatLngB = new L.LatLng(-3.095256, -60.024043, "pointB"); // Definindo como padrão uma rota, mas posso alterar para qualquer lugar


      routeControl.setWaypoints([newLatLngA, newLatLngB]);  // Definindo os pontos A e B


    }
    // função de retorno ao gerar algum erro nas verificações
    function error(err) {
      console.warn('ERROR(' + err.code + '): ' + err.message);
    };

    navigator.geolocation.getCurrentPosition(success, error, options);  // Possi~]ao atuaç

  }
  render() { 
    return <div id="map" style={style} />;
  }
}

export default Map; // exportando esta página para pagina index.js
