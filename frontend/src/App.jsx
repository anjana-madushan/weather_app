import { useState } from "react";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  const [isLogged, isSetLogged] = useState(true);

  return (
    <div className="min-h-screen overflow-hidden">
      {!isLogged ? (
        <div className="flex items-center justify-center min-h-screen w-full overflow-hidden">
          <Login />
        </div>
      ) : (
        <div className="flex flex-col min-h-screen">
          <div className="flex-grow pb-15">
            <Dashboard />
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;