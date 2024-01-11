import { useState, useEffect } from "react";
import styles from "@/styles/weather.module.css";
import axios from "axios";
require("dotenv").config();

export default function SearchWeather() {
    const [location, setLocation] = useState("");
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        if (location) {
            const fetchWeatherData = async () => {
                const data = await getWeatherLocation(location);
                setWeatherData(data);
            };
            fetchWeatherData();
        }
    }, [location]);

    const getWeatherLocation = async (location) => {
        const response = await axios.get(`/api/geocodingAPI?q=${location}`);
        return response.data;
    }

    const handleSearch = async (event) => {
        event.preventDefault();
        const newLocation = event.target.elements.location.value;
        setLocation(newLocation);
    };

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
                    <p>Weather Info: {JSON.stringify(weatherData)}</p>
                </div>
            )}
        </div>
    </div>
    )
}
