import React, {useState} from "react";
import { render } from "react-dom";
import Map from "./Map";
import './index.css'
// import { fetchLocalMapBox } from "./apiMapBox";
// import AsyncSelect from "react-select/async";

// const initialPosition = { lat: -22.2154042, lng: -54.8331331 };

export function App() {
  // const [deliveries, setDeliveries] = useState([]);

  // const [position, setPosition] = useState (null);
  // const [name, setName] = useState("");
  // const [complement, setComplement] = useState("");
  // const [address, setAddress] = useState({label: '', value: ''}| null);


  // const [location, setLocation] = useState(initialPosition);

  // const loadOptions = async (inputValue, callback) => {
  //   if (inputValue.length < 5) return;
  //   let places = [];
  //   const response = await fetchLocalMapBox(inputValue);
  //   response.features.map((item) => {
  //     places.push({
  //       label: item.place_name,
  //       value: item.place_name,
  //       coords: item.center,
  //       place: item.place_name,
  //     });
  //   });

  //   callback(places);
  // };

  // const handleChangeSelect = (event) => {
  //   console.log("changed", event);
  //   setPosition({
  //     longitude: event.coords[0],
  //     latitude: event.coords[1],
  //   });

  //   setAddress({ label: event.place, value: event.place });

  //   setLocation({
  //     lng: event.coords[0],
  //     lat: event.coords[1],
  //   });
  // };

  return (
    <div id="page-map">
      <main>
        <form className="landing-page-form">
          <fieldset>
            <legend>Endereço</legend>

            <div className="input-block">
              <label>Endere√ßo</label>
              {/* <AsyncSelect
                placeholder="Digite seu endere√ßo..."
                classNamePrefix="filter"
                cacheOptions
                loadOptions={loadOptions}
                onChange={handleChangeSelect}
                value={address}
              /> */}
            </div>
          </fieldset>

          <button className="confirm-button" type="submit">
            Confirmar
          </button>
        </form>
      </main>
      <div>
        <Map />
      </div>
    </div>
  );
}
render(<App />, document.getElementById("root"));