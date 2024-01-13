import { useState, useEffect } from "react";
import styles from "@/styles/weather.module.css";
import axios from "axios";
require("dotenv").config();

export default function SearchWeather() {
  const [location, setLocation] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (location) {
      const fetchWeatherData = async () => {
        try {
          const locationData = await getWeatherLocation(location);
          const { lat, lon } = locationData[0];
          const data = await getWeatherData(lat, lon);
          setWeatherData(data);
          setError(null);
        } catch (err) {
          setError(err.message);
        }
      };
      fetchWeatherData();
    }
  }, [location]);

  const getWeatherLocation = async (location) => {
    const response = await axios.get(`/api/geocodingAPI?q=${location}`);
    // console.log(response.data); use if troubleshooting
    return response.data;
  };

  const getWeatherData = async (lat, lon) => {
    const response = await axios.get(`/api/weather?lat=${lat}&lon=${lon}`);
    return response.data;
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    const newLocation = event.target.elements.location.value;
    setLocation(newLocation);
  };

  const icon = 'https://openweathermap.org/img/wn/' + [weatherData?.weather[0]?.icon] + '@2x.png';

  return (
    <div className={styles.body}>
      <div className={styles.box}>
        <h2>Search for a location</h2>
        <form onSubmit={handleSearch}>
          <input type="text" name="location" placeholder="Location" />
          <button type="submit">Search</button>
        </form>
        {weatherData && (
          <div>
            <p>
              {weatherData?.name}, <b>{weatherData?.sys.country}</b>
            </p>
            <p>
              Temp: <b>{Math.round(weatherData?.main.temp)}C</b>
            </p>
            <img src={icon} />
          </div>
        )}
      </div>
    </div>
  );
}
