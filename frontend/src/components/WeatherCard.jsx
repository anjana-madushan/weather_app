import { UnixTimeConvert } from '../utils/unixTimeConvert';
import { getCityLocalTime } from '../utils/getCityLocalTime';

const WeatherCard = ({ onClick, weatherData }) => {

  const { name, sys, wind, main, weather, visibility, timezone } = weatherData;

  return (
    <div className='flex flex-col min-h-[250px] h-full max-w-md w-full items-center justify-between bg-blue-300 text-white rounded-sm shadow-sm cursor-pointer'
      onClick={onClick}>
      <div className='flex justify-between py-4 md:gap-16 gap-5 w-full md:px-8 px-2'>
        <div className='flex flex-col lg:py-4'>
          <div className='flex flex-col pb-4 items-center text-center'>
            <p className='md:text-xl text-sm font-semibold'>{name ?? 'N/A'}, {sys?.country ?? 'N/A'}</p>
            <p className='md:text-sm text-xs'>{getCityLocalTime(timezone)}</p>
          </div>
          <div className='flex flex-col lg:flex-row items-center justify-between'>
            {weather?.[0] ? (
              <img src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} />
            ) : (
              <div className="h-8 w-8 bg-white rounded-full" />
            )}
            <p className='text-sm text-center'>{weather[0]?.description ? weather[0]?.description : 'N/A'}</p>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center gap-2'>
          <p className='md:text-5xl text-3xl'>{main?.temp}°C</p>
          <div>
            <p className='text-sm'>Temp Min: {main?.temp_min}°C</p>
            <p className='text-sm'>Temp Max: {main?.temp_max}°C</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center bg-neutral-600 py-3 text-[10px] w-full px-5">
        <div className="px-1 sm:px-2 md:px-4">
          <p>Humidity: {main.humidity ?? 'N/A'}</p>
          <p>Visibility:{visibility ? (visibility / 1000).toFixed(1) + ' km' : 'N/A'}</p>
        </div>
        <div className="h-full w-[1px] bg-white mx-2" />

        <div className="flex flex-col">
          <p>Wind Speed: {wind?.speed ? `${wind.speed} m/s` : 'N/A'}</p>
          <p>Wind Degree: {wind?.deg ? `${wind.deg}°` : 'N/A'}</p>
        </div>

        <div className="h-full w-[1px] bg-white mx-2 hidden sm:block" />

        <div className="hidden sm:block lg:px-4 md:px-1 px-2">
          <p>Sunrise: {sys.sunrise ? UnixTimeConvert(sys.sunrise) : 'N/A'}</p>
          <p>Sunset: {sys.sunset ? UnixTimeConvert(sys.sunset) : 'N/A'}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
