import React from "react";
import L from "leaflet";
import "./Style.css";

require("leaflet-routing-machine");

const style = {
  width: "100%",
  height: "100vh"
};

class Map extends React.Component {
  componentDidMount() {
    // create map
    this.map = L.map("map", {
      center: [-3.132968, -60.017685],
      zoom: 13,
      layers: [
        L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        })
      ]
    });
    var routeControl = L.Routing.control({
      show: true,
      fitSelectedRoutes: true,
      plan: false,
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
      .addTo(this.map)
      .getPlan();

    var newLatLngA = new L.LatLng(-3.132908, -60.017679, "taskA");
    var newLatLngB = new L.LatLng(-3.095256, -60.024043, "taskB");

    routeControl.setWaypoints([newLatLngA, newLatLngB]);
  }
  render() {
    return <div id="map" style={style} />;
  }
}

export default Map;
