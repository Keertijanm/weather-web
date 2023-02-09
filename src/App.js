import React, { useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import CityComponent from "./modules/CityComponent";
import WeatherComponent from "./modules/WeatherInfoComponent";
//weather-web sunny.svg
//react-weather-app
export const WeatherIcons = {
  "01d": "/weather-web/icons/sunny.svg",
  "01n": "/weather-web/icons/night.svg",
  "02d": "/weather-web/icons/day.svg",
  "02n": "/weather-web/icons/cloudy-night.svg",
  "03d": "/weather-web/icons/cloudy.svg",
  "03n": "/weather-web/icons/cloudy.svg",
  "04d": "/weather-web/icons/perfect-day.svg",
  "04n": "/weather-web/icons/cloudy-night.svg",
  "09d": "/weather-web/icons/rain.svg",
  "09n": "/weather-web/icons/rain-night.svg",
  "10d": "/weather-web/icons/rain.svg",
  "10n": "/weather-web/icons/rain-night.svg",
  "11d": "/weather-web/icons/storm.svg",
  "11n": "/weather-web/icons/storm.svg",
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  padding: 20px 10px;
  margin: auto;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 #555;
  background: white;
  font-family: Montserrat;
`;

const AppLabel = styled.span`
  color: black;
  margin: 20px auto;
  font-size: 18px;
  font-weight: bold;
`;
const CloseButton = styled.span`
  padding: 2px 3px;
  background-color: black;
  border-radius: 50%;
  color: white;
  position: absolute;
`;

function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`,
    );
    updateWeather(response.data);
  };
  return (
    <Container>
      <AppLabel> Weather WEB</AppLabel>
      {city && weather ? (
        <WeatherComponent weather={weather} city={city} />
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
    </Container>
  );
}

export default App;
