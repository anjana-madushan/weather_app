import { useAuth0 } from '@auth0/auth0-react';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Footer from "./components/Footer";
import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";
import Spinner from "./components/Spinner";

function App() {

  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  const location = useLocation();
  const [authError, setAuthError] = useState('');

  //Extracts and displays the error description from the URL after an Auth0 login error
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const errorDescription = params.get('error_description');
    if (errorDescription) {
      setAuthError(decodeURIComponent(errorDescription));
    }
  }, [location]);


  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-hidden">
      {authError ? (
        <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center gap-2">
          <p className="text-red-500 text-lg font-semibold max-w-md">
            {authError}
          </p>
          <button className='btn_primary'
            onClick={() => loginWithRedirect()}>
            Retry Login
          </button>
        </div>
      ) : !isAuthenticated ? (
        <div className="flex items-center justify-center min-h-screen w-full">
          <Login />
        </div>
      ) : (
        <div className="flex flex-col min-h-screen">
          <div className="flex-grow pb-16">
            <Dashboard />
          </div>
          <Footer />
        </div>
      )}
    </div>
  );

}

export default App;