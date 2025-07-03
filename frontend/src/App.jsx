import { useAuth0 } from '@auth0/auth0-react';
import Footer from "./components/Footer";
import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";
import Spinner from "./components/Spinner";

function App() {

  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-hidden">
      {!isAuthenticated ? (
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