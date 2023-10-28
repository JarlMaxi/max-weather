import { useState, useEffect } from "react";
import styles from "@/styles/weather.module.css";
import axios from "axios";
require("dotenv").config();

export default function Weather() {
  const [londonData, setLondonData] = useState(null);
  const [windsorData, setWindsorData] = useState(null);
  const [torontoData, setTorontoData] = useState(null);
  const [horredData, setHorredData] = useState(null);
  const metricEndpont = "units=metric";
  useEffect(() => {
    const getWeather = async () => {
      try {
        const response1 = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=42.9834&lon=-81.233&${metricEndpont}&appid=${process.env.OPEN_WEATHER_API}`
        );
        const response2 = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=42.3001&lon=-83.0165&${metricEndpont}&appid=${process.env.OPEN_WEATHER_API}`
        );
        const response3 = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=43.7001&lon=-79.4163&${metricEndpont}&appid=${process.env.OPEN_WEATHER_API}`
        );
        const response4 = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=57.35&lon=12.4667&${metricEndpont}&appid=${process.env.OPEN_WEATHER_API}`
        );
        const data1 = response1.data;
        const data2 = response2.data;
        const data3 = response3.data;
        const data4 = response4.data;

        setLondonData(data1);
        setWindsorData(data2);
        setTorontoData(data3);
        setHorredData(data4);
      } catch (error) {
        console.error("Error fetching weather", error);
      }
    };

    getWeather();
  }, []);

  const londonIcon = 'https://openweathermap.org/img/wn/' + [londonData?.weather[0]?.icon] + '@2x.png';
  const windsorIcon = 'https://openweathermap.org/img/wn/' + [windsorData?.weather[0]?.icon] + '@2x.png';
  const torontoIcon = 'https://openweathermap.org/img/wn/' + [torontoData?.weather[0]?.icon] + '@2x.png';
  const horredIcon = 'https://openweathermap.org/img/wn/' + [horredData?.weather[0]?.icon] + '@2x.png';

  return (
    <div className={styles.body}>
      <div className={styles.box}>
        <h2>London</h2>
        <p>Temperature: {Math.round(londonData?.main?.temp)}C</p>
        <img className={styles.image} src={londonIcon} />
      </div>
      <div className={styles.box}>
        <h2>Windsor</h2>
        <p>Temperature: {Math.round(windsorData?.main?.temp)}C</p>
        <img src={windsorIcon} />
      </div>
      <div className={styles.box}>
        <h2>Toronto</h2>
        <p>Temperature: {Math.round(torontoData?.main?.temp)}C</p>
        <img src={torontoIcon} />
      </div>
      <div className={styles.box}>
        <h2>Horred</h2>
        <p>Temperature: {Math.round(horredData?.main?.temp)}C</p>
        <img src={horredIcon} />
      </div>
    </div>
  );
}
