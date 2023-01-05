import React, { useState } from "react";
import axios from "axios";

export default function Search(props) {
  let [city, setCity] = useState();
  const [message, setMessage] = useState("");
  let [temperature, setTemperature] = useState(null);

  function showTemperature(response) {
    setTemperature(response.data.main.temp);
  }
  let url = `https://api.openweathermap.org/data/2.5/weather?${props.city}&appid=2e705076d5a554467e9b0adf9237ef52`;
  axios.get(url).then(showTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  setMessage(`It is ${temperature} in ${city}`);
}

function updateCity(event) {
  setCity(event.target.value);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="search" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
      <h2> (`It is $temperature} in ${city}`)</h2>
    </div>
  );
}
