import { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherCard from '../components/WeatherCard';
import WeatherDetails from '../components/WeatherDetails';
import Header from '../components/Header';
import { addTTls } from '../utils/addTtls';

const Dashboard = () => {

  const [weatherList, setWeatherList] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [isLoading, setLoading] = useState(null);
  const [dotCount, setDotCount] = useState(1);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!isLoading) return;

    const interval = setInterval(() => {
      setDotCount((prev) => (prev === 3 ? 1 : prev + 1));
    }, 500);

    return () => clearInterval(interval);
  }, [isLoading]);



  //Get api request to fetch weather data for cities
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {

        //check weather weather data is in the localstorage using the key
        const cacheData = localStorage.getItem('weather_cache');
        const parseCacheData = cacheData ? JSON.parse(cacheData) : null;

        //filtering the cities with valid cache data
        if (parseCacheData && Array.isArray(parseCacheData.data)) {
          const validCacheCities = parseCacheData.data.filter(city => Date.now() - parseCacheData.timestamp < city.ttl);

          if (validCacheCities.length > parseCacheData.data.length / 2) {
            setWeatherList(validCacheCities);
            return;
          }
        }

        setLoading(true);
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/weather`);

        //add ttls for each city
        const weatherData = response.data.data.map(city => ({
          ...city,
          ttl: addTTls(city)
        }))

        //store the weather data in local storage 
        localStorage.setItem(
          'weather_cache',
          JSON.stringify({
            timestamp: Date.now(),
            data: weatherData,
          }))

        setWeatherList(weatherData);

      } catch (error) {
        setError('Something went wrong while loading data. Please try again later!');
        console.error('Failed to load cities:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []);



  const handleOnClick = (city) => {
    setSelectedCity(city);
  }

  return (
    <div className="flex justify-center">
      <div className='flex flex-col items-center'>
        <div className='py-5 px-5'>
          <Header />
        </div>
        {isLoading ? (
          <div className="flex justify-center items-center flex-grow h-full min-h-[60vh]">
            <p className="text-white text-lg animate-pulse">
              Fetching weather data{'.'.repeat(dotCount)}
            </p>
          </div>
        ) : error ? (
          <div className="flex justify-center items-center flex-grow h-full min-h-[60vh]">
            <p className="text-red-500 text-lg font-medium text-center px-4">
              {error}
            </p>
          </div>
        ) : (!selectedCity) ?
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-8 gap-2 px-2 md:px-5'>
            {weatherList.map((city) => (
              <div key={city.id}>
                <WeatherCard onClick={() => handleOnClick(city)} weatherData={city} />
              </div>
            ))}
          </div>
          :
          <div className='flex justify-center items-center min-h-[80vh] sm:min-h-[70vh] w-full px-8 sm:px-4'>
            <WeatherDetails city={selectedCity} setSelectedCity={setSelectedCity} />
          </div>
        }
      </div>
    </div>
  )
}

export default Dashboard