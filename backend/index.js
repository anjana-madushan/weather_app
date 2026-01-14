import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import { readCityCodes } from './utils/readCityCodes.js';

const PORT = process.env.PORT || 4000;
const OPEN_WEATHER_MAP_URL = process.env.OPEN_WEATHER_MAP_URL;
const API_KEY = process.env.API_KEY;

const app = express();

app.use(cors());

/**
 * GET /api/weather
 * Fetches weather data for a list of cities using city codes.
 * Use cache to reduce redundant API calls to improve response time.
 */
app.get('/api/weather', async (req, res) => {
  try {

    const cityIdParams = req.query.cityIds;

    let cityCodes;

    if (!cityIdParams) {
      cityCodes = await readCityCodes();
    } else {
      const cityIds = cityIdParams.split(',');
      cityCodes = cityIds;
    }

    //Fetching fresh weather Data for each city
    const response = await Promise.all(
      cityCodes.map(async id => {
        try {
          const res = await fetch(`${OPEN_WEATHER_MAP_URL}?id=${id}&units=metric&appid=${API_KEY}`);
          if (!res.ok) {
            throw new Error(`Failed to fetch data for city ID ${id}`);
          }
          return await res.json();
        } catch (err) {
          console.error({ message: `There was a problem fetching weather data for city Id: ${id}:`, err: err.message });
          return null;
        }
      })
    );

    const cleanWeatherData = response.filter(res => res !== null);

    return res.status(200).json({ data: cleanWeatherData });

  } catch (error) {
    return res.status(500).json({
      message: 'There is an error in the server',
      error: error.message
    });
  }
});

//start the express server
app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}...`);
})