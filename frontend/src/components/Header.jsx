import icon from '../assets/images/logo.png';
import { CiLogout } from "react-icons/ci";
import { useAuth0 } from '@auth0/auth0-react';

const Header = () => {

  const { logout } = useAuth0();

  return (
    <div className='flex bg-transparent w-full justify-between border-none rounded-2xl items-center gap-20'>
      <div className='w-full flex justify-center items-center'>
        <img src={icon} className='md:h-10 md:w-10 h-8 w-8 mb-2 hidden sm:block ' />
        <h2 className='font-semibold sm:text-3xl text-xl'>WeatherCore</h2>
      </div>

      <button className="flex px-2 gap-2 w-full items-center text-sm font-medium text-white bg-primary shadow-lg shadow-purple-600/5 p-[10px] rounded-md my-1 hover:bg-blue-600/15 hover:text-blue-600 cursor-pointer justify-center"
        onClick={() => logout({ returnTo: window.location.origin })}>
        <CiLogout className='text-xl font-semibold' />
        <span className='hidden sm:block'>Log Out</span>
      </button>
    </div>
  )
}

export default Header