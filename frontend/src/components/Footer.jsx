import React from 'react'

const Footer = () => {
  return (
    <div className='fixed bottom-0 w-full text-center bg-neutral-700 text-white text-xs py-3 shadow-md z-50 h-[50px]'>
      Made with ☁️ by Weather App • Data provided by <a href="https://openweathermap.org/" className="underline hover:text-white" target="_blank">OpenWeatherMap</a>
    </div>
  )
}

export default Footer