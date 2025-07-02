import { useState, useEffect } from 'react';
import logo from '../assets/images/icon.png';
import WeatherCard from '../components/WeatherCard';
import WeatherDetails from '../components/WeatherDetails';
import Footer from '../components/Footer';

const Dashboard = () => {

  const [weatherList, setWeatherList] = useState([]);
  const [selectedCity, setSelectedCity] = useState(false);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch('/cities.json');
        const data = await response.json();
        setWeatherList(data.List);
      } catch (error) {
        console.error('Failed to load cities:', error);
      }
    };

    fetchWeatherData();
  }, []);

  const handleOnClick = () => {
    setSelectedCity(true);
  }

  return (
    <div className="flex items-center justify-center">
      <div className='flex flex-col items-center'>
        <div className='flex items-center gap-2 pt-10 pb-5'>
          <img src={logo} className='md:h-10 md:w-10 h-8 w-8' />
          <h2 className='font-semibold sm:text-2xl text-xl'>Weather App</h2>
        </div>
        {!selectedCity ?
          <div className='grid grid-cols-1 md:grid-cols-2 md:gap-7 gap-2 px-5 md:px-2'>
            {weatherList.map((city) => (
              <div key={city.CityCode}>
                <WeatherCard onClick={handleOnClick} />
              </div>
            ))}
          </div>
          :
          <div className='flex items-center pt-10 sm:pt-20'>
            <WeatherDetails setSelectedCity={setSelectedCity} />
          </div>
        }
      </div>
    </div>
  )
}

export default Dashboard