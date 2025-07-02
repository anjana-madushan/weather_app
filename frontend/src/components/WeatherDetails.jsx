import logo from '../assets/images/icon.png'
import { FaArrowLeft } from "react-icons/fa6";

const WeatherDetails = ({ setSelectedCity }) => {
  return (
    <div className='flex flex-col h-full w-full items-center justify-center bg-blue-400 text-white sm:rounded-sm rounded-xl shadow-sm overflow-hidden'>
      <div className='flex flex-col sm:py-4 pt-4 pb-10 justify-between sm:gap-2 sm:w-full  gap-2 sm:px-8 px-2'>
        <FaArrowLeft className='sm:text-sm cursor-pointer' onClick={() => setSelectedCity(null)} />
        <div className='sm:py-4'>
          <div className='flex flex-col items-center text-center'>
            <p className='sm:text-xl text-sm font-semibold'>Colombo, LK</p>
            <p className='sm:text-sm text-xs'>9.19AM, Feb 8</p>
          </div>
        </div>
        <div className='flex flex-col sm:flex-row items-center justify-center sm:gap-15 gap-5'>
          <div className='flex flex-col items-center'>
            <img src={logo} className='sm:h-10 sm:w-10 h-20 w-20' />
            <p className='sm:text-[15px] text-xs'>Few Clouds</p>
          </div>
          <div className='hidden sm:block h-20 w-[1px] bg-white' />
          <div className='flex flex-col items-center sm:gap-4 gap-1'>
            <p className='sm:text-5xl text-3xl'>27°C</p>
            <div>
              <p className='sm:text-[15px] text-xs'>Temp Min: 25°C</p>
              <p className='sm:text-[15px] text-xs'>Temp Max: 25°C</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center bg-neutral-600 sm:py-10 py-6 text-[10px] sm:text-xs w-full">
        <div className='grid grid-cols-2 sm:grid-cols-4 sm:gap-4 gap-2 sm:px-10 px-2 sm:divide-x'>
          <div className="flex flex-col sm:items-start px-1">
            <p>Humidity: 78%</p>
            <p>Visibility: 8.0km</p>
          </div>

          <div className="flex flex-col sm:items-start sm:justify-center sm:pr-3">
            <p>Wind Speee: 4.0m/s</p>
            <p>Wind Degree:120°</p>
          </div>

          <div className="flex flex-col sm:items-start px-1">
            <p>Sunrise: 6.05am</p>
            <p>Sunset: 6.05pm</p>
          </div>

          <div className="flex flex-col sm:items-start px-1">
            <p>Sea Level: 1012</p>
            <p>Clouds: 27</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherDetails