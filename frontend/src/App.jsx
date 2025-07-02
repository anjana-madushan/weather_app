import { useState } from "react";
import { useAuth0 } from '@auth0/auth0-react';
import Footer from "./components/Footer";
import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";

function App() {

  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-400 text-sm">Loading authentication...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-hidden">
      {!isAuthenticated ? (
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