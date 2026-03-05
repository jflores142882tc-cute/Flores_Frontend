import { useState, useEffect } from 'react';
import Login from './login'; // Using your lowercase filename
import Dashboard from './Dashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);
    // Simulate a secure connection delay
    setTimeout(() => {
      setIsLoading(false);
      setIsLoggedIn(true);
    }, 2500);
  };

  if (isLoading) {
    return (
      <div className="h-screen w-screen bg-[#020617] flex flex-col items-center justify-center">
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 border-4 border-blue-500/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
        </div>
        <p className="mt-8 text-blue-500 font-black tracking-[0.5em] text-xs uppercase animate-pulse">
          Decrypting Flores_Protocol...
        </p>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen">
      {isLoggedIn ? (
        <Dashboard onLogout={() => setIsLoggedIn(false)} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;