import { useState, useEffect } from "react";
import styles from "@/styles/weather.module.css";
import axios from "axios";
require("dotenv").config();

export default function Weather() {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const getWeather = async () => {
      try {
        const response1 = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=42.9834&lon=-81.233&appid=${process.env.OPEN_WEATHER_API}`
        );
        const data1 = response1.data;
        setWeatherData(data1);
      } catch (error) {
        console.error("Error fetching weather", error);
      }
    };

    getWeather();
  }, []);

  return (
    <div className={styles.body}>
      <div className={styles.box}>
        <h2>London</h2>
        <p>Temperature: {weatherData?.main?.temp}</p>
      </div>
      <div className={styles.box}>
        <h2>Windsor</h2>
      </div>
      <div className={styles.box}>
        <h2>Toronto</h2>
      </div>
      <div className={styles.box}>
        <h2>Horred</h2>
      </div>
    </div>
  );
}
