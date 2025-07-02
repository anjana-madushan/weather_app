import logo from '../assets/images/icon.png';
import { TbLocation } from 'react-icons/tb';

const WeatherCard = ({ onClick }) => {
  return (
    <div className='flex flex-col h-full w-full items-center justify-center bg-blue-300 text-white rounded-sm shadow-sm cursor-pointer overflow-hidden'
      onClick={onClick}>
      <div className='flex py-4 justify-between md:gap-20 gap-5 w-full md:px-8 px-2'>
        <div className='flex flex-col py-4'>
          <div className='flex flex-col pb-4 items-center text-center'>
            <p className='md:text-xl text-sm font-semibold'>Colombo, LK</p>
            <p className='md:text-sm text-xs'>9.19AM, Feb 8</p>
          </div>
          <div className='flex flex-col md:flex-row items-center gap-2'>
            <img src={logo} className='md:h-10 md:w-10 h-8 w-8' />
            <p className='md:text-xl text-sm'>Few Clouds</p>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center gap-2'>
          <p className='md:text-5xl text-3xl'>27°C</p>
          <div>
            <p className='md:text-xl text-sm'>Temp Min: 25°C</p>
            <p className='md:text-xl text-sm'>Temp Max: 25°C</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center bg-neutral-600 md:py-4 py-3 text-[10px] w-full px-5">
        <div className="md:px-1 px-1">
          <p>Humidity: 78%</p>
          <p>Visibility: 8.0km</p>
        </div>
        <div className="h-full w-[1px] bg-white mx-2" />

        <div className="flex flex-col">
          <p>Wind Speee: 4.0m/s</p>
          <p>Wind Degree:120°</p>
        </div>

        <div className="h-full w-[1px] bg-white mx-2 hidden sm:block" />

        <div className="hidden sm:block lg:px-4 md:px-1 px-2">
          <p>Sunrise: 6.05am</p>
          <p>Sunset: 6.05pm</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
