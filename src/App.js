import React, { useState } from 'react';
import './App.css';
import Home from './Home';
import Button from './Button';

function App() {
  const [showHome, setShowHome] = useState(false);

  const handleButtonClick = () => {
    setShowHome(true);
  };

  return (
    <div className="App">
      {showHome ? (
        <Home />
      ) : (
        <Button onClick={handleButtonClick} />
      )}
    </div>
  );
}

export default App;
