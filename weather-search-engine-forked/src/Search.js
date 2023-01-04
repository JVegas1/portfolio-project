import React, { useState } from "react";
import Loader from "react-loader-spinner";
import axios from "axios";

export default function Search(props) {
  const [city, setCity] = useState();
  const [status, setStatus] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setStatus(true);
    setWeather({
      temperature: response.data.main.temp,
     
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "2e705076d5a554467e9b0adf9237ef52";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Enter a city.." onChange={updateCity} />
      <button type="Submit">Search</button>
    </form>
  );

  if (status) {
    return (
      <div>
        {form}
        <h2>Temperature: {weather.temperature}°F</h2>
      
      
      </div>
    );
  } else {
    return form;
  }
}
