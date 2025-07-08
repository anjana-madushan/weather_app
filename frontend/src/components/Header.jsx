import icon from '../assets/images/logo.png';
import { CiLogout } from "react-icons/ci";
import { useAuth0 } from '@auth0/auth0-react';

const Header = () => {
  const { logout } = useAuth0();

  return (
    <div className="w-full flex items-center justify-between px-4 sm:px-8 bg-transparent rounded-2xl sm:gap-20 gap-10">
      <div className="flex items-center sm:gap-3">
        <img
          src={icon}
          alt="Logo"
          className="h-8 w-8 sm:h-10 sm:w-10 mb-2"
        />
        <h2 className="font-semibold text-xl sm:text-3xl text-gray-200 italic">WeatherCore</h2>
      </div>
      <button
        onClick={() => {
          localStorage.clear();
          logout({
            returnTo: window.location.origin
          })
        }
        }
        className="flex items-center gap-2 btn_primary"
      >
        <CiLogout className="text-lg sm:text-xl" />
        <span className="hidden sm:inline">Log Out</span>
      </button>
    </div>
  );
};

export default Header;
