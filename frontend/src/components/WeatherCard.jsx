import { UnixTimeCovert } from '../utils/unixTImeCovert';
import { getCityLocalTime } from '../utils/getCityLocalTime';

const WeatherCard = ({ onClick, weatherData }) => {

  const { name, sys, wind, main, weather, visibility, timezone } = weatherData;

  return (
    <div className='flex flex-col h-full w-full items-center justify-center bg-blue-300 text-white rounded-sm shadow-sm cursor-pointer overflow-hidden'
      onClick={onClick}>
      <div className='flex py-4 justify-between md:gap-20 gap-5 w-full md:px-8 px-2'>
        <div className='flex flex-col py-4'>
          <div className='flex flex-col pb-4 items-center text-center'>
            <p className='md:text-xl text-sm font-semibold'>{name || ''}, {sys?.country || ''}</p>
            <p className='md:text-sm text-xs'>{getCityLocalTime(timezone)}</p>
          </div>
          <div className='flex flex-col md:flex-row items-center gap-2'>
            <img src={`https://openweathermap.org/img/wn/${weather[0]?.icon}@2x.png`} className='md:h-15 md:w-15 h-8 w-8' />
            <p className='md:text-xl text-sm'>{weather[0]?.description}</p>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center gap-2'>
          <p className='md:text-5xl text-3xl'>{main?.temp}</p>
          <div>
            <p className='md:text-xl text-sm'>Temp Min: {main?.temp_min}</p>
            <p className='md:text-xl text-sm'>Temp Max: {main?.temp_max}</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center bg-neutral-600 md:py-4 py-3 text-[10px] w-full px-5">
        <div className="md:px-1 px-1">
          <p>Humidity: {main?.humidity}</p>
          <p>Visibility:{visibility}</p>
        </div>
        <div className="h-full w-[1px] bg-white mx-2" />

        <div className="flex flex-col">
          <p>Wind Speee: {wind?.speed}m/s</p>
          <p>Wind Degree:{wind?.deg}°</p>
        </div>

        <div className="h-full w-[1px] bg-white mx-2 hidden sm:block" />

        <div className="hidden sm:block lg:px-4 md:px-1 px-2">
          <p>Sunrise: {UnixTimeCovert(sys?.sunrise)}</p>
          <p>Sunset: {UnixTimeCovert(sys?.sunset)}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
