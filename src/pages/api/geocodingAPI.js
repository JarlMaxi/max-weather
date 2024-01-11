import axios from "axios";

export default async (req, res) => {
  const apiKey = process.env.OPEN_WEATHER_API;

  try {
    const response = await axios.get(
      "http://api.openweathermap.org/geo/1.0/direct",
      {
        params: {
          q: req.query.q,
          limit: 1,
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
