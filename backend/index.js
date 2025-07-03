import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import fs from 'fs';
const PORT = process.env.PORT || 4000;
const OPEN_WEATHER_MAP_URL = process.env.OPEN_WEATHER_MAP_URL;
const API_KEY = process.env.API_KEY;

const app = express();

app.get('/api/weather', async (req, res) => {
  try {
    const fileContent = fs.readFileSync('./cities.json', 'utf8');
    const cities = JSON.parse(fileContent);
    const cityCodes = cities.List.map(city => city.CityCode);

    const response = await Promise.all(
      cityCodes.map(async id => {
        try {
          const res = await fetch(`${OPEN_WEATHER_MAP_URL}?id=${id}&units=metric&appid=${API_KEY}`);
          if (!res.ok) {
            throw new Error(`Failed to fetch data for city ID ${id}`);
          }
          return await res.json();
        } catch (err) {
          console.error(`Error for city ID ${id}:`, err.message);
          return null;
        }
      })
    );

    return res.json({ source: 'api', data: response.filter(r => r !== null) });
  } catch (error) {
    return res.status(500).json({
      message: 'There is an error in the server',
      error: error.message
    });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
})