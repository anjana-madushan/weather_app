import { FaArrowLeft } from "react-icons/fa6";
import { getCityLocalTime } from '../utils/getCityLocalTime.js';
import { UnixTimeConvert } from '../utils/unixTimeConvert.js';

const WeatherDetails = ({ city, setSelectedCity }) => {

  const { name, sys, wind, main, weather, visibility, timezone } = city;

  return (
    <div className='flex flex-col h-full w-full items-center justify-center bg-blue-400 text-white sm:rounded-sm rounded-xl shadow-sm overflow-hidden'>
      <div className='flex flex-col sm:py-4 pt-4 pb-10 justify-between sm:gap-2 sm:w-full gap-2 sm:px-8'>
        <FaArrowLeft className='sm:text-sm cursor-pointer' onClick={() => setSelectedCity(null)} />
        <div className='sm:py-4'>
          <div className='flex flex-col items-center text-center'>
            <p className='sm:text-xl text-sm font-semibold'>{name || ''}, {sys?.country || ''}</p>
            <p className='sm:text-sm text-xs'>{getCityLocalTime(timezone)}</p>
          </div>
        </div>
        <div className='flex flex-col sm:flex-row items-center justify-center sm:gap-14 gap-5 pt-0'>
          <div className='flex flex-col items-center'>
            {weather?.[0] ? (
              <img src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} className='h-20 w-20' />
            ) : (
              <div className="h-8 w-8 bg-white rounded-full" />
            )}
            <p className='sm:text-[15px] text-xs'>{weather[0]?.description ?? 'N/A'}</p>
          </div>
          <div className='hidden sm:block h-20 w-[1px] bg-white' />
          <div className='flex flex-col items-center sm:gap-4 gap-1'>
            <p className='sm:text-5xl text-3xl'>{main?.temp ?? 'N/A'}°C</p>
            <div>
              <p className='sm:text-[15px] text-xs'>Temp Min: {main?.temp_min ?? 'N/A'}°C</p>
              <p className='sm:text-[15px] text-xs'>Temp Max: {main?.temp_max ?? 'N/A'}°C</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center bg-neutral-600 sm:py-10 py-6 text-[10px] sm:text-xs w-full">
        <div className='grid grid-cols-2 sm:grid-cols-4 sm:gap-4 gap-2 sm:px-10 px-2 sm:divide-x'>
          <div className="flex flex-col sm:items-start px-1">
            <p>Humidity: {main?.humidity ?? 'N/A'}</p>
            <p>Visibility:{visibility ? (visibility / 1000).toFixed(1) + ' km' : 'N/A'}</p>
          </div>

          <div className="flex flex-col sm:items-start sm:justify-center sm:pr-3">
            <p>Wind Speed: {wind?.speed ? `${wind.speed} m/s` : 'N/A'}</p>
            <p>Wind Degree: {wind?.deg ? `${wind.deg}°` : 'N/A'}</p>

          </div>

          <div className="flex flex-col sm:items-start px-1">
            <p>Sunrise:{UnixTimeConvert(sys?.sunrise)}</p>
            <p>Sunset: {UnixTimeConvert(sys?.sunset)}</p>
          </div>

          <div className="flex flex-col sm:items-start px-1">
            <p>Sea Level: {main?.sea_level}</p>
            <p>Pressure: {main?.pressure}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherDetails