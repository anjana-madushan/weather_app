import logo from '../assets/images/login-icon.png';

const Login = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-20">
      <div className='flex flex-col gap-20'>
        <h1 className="text-7xl font-bold text-center">Welcome to <br /><span className='text-orange-300'>WeatherCore</span></h1>
        <div>
          <p className="text-sm text-gray-400 text-center">Please sign in to view live weather data.</p>
          <button className="w-full text-sm font-medium text-white bg-primary shadow-lg shadow-purple-600/5 p-[10px] rounded-md my-1 hover:bg-blue-600/15 hover:text-blue-600 cursor-pointer">
            Login
          </button>
        </div>
      </div>
      <img
        src={logo}
        alt="Login Page Icon"
        className="w-150 h-150 object-contain rounded-xl"
      />
    </div>
  );
};

export default Login;
