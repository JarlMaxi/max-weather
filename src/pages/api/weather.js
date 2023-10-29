import axios from "axios";

export default async (req, res) => {
  const emtricEndpoint = "units=metric";
  const apiKey = process.env.OPEN_WEATHER_API;

  try {
    const response = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather",
      {
        params: {
          lat: req.query.lat,
          lon: req.query.lon,
          units: "metric",
          appid: apiKey,
        },
      }
    );

    return res.status(200).json(response.data);
  } catch (error) {
    return res
      .status(error.response?.status || 500)
      .json(error.response?.data || { message: error.message });
  }
};
