import logo from '../assets/images/login-icon.png';
import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="min-h-screen w-full flex flex-col-reverse lg:flex-row items-center justify-center lg:gap-20 gap-10 px-6 py-10">
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 max-w-md">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-200">
          Welcome to <br />
          <span className="text-orange-300">WeatherCore</span>
        </h1>
        <p className="text-[16px] text-white">
          Please sign in to view live weather data.
        </p>
        <button
          onClick={loginWithRedirect}
          className="btn_primary"
        >
          Login
        </button>
      </div>
      <img
        src={logo}
        alt="Login Icon"
        className="h-48 w-48 sm:h-64 sm:w-64 lg:h-96 lg:w-96 object-contain rounded-full border-2 border-orange-300"
      />
    </div>
  );
};

export default Login;
