import React from 'react';
import {  useNavigate } from 'react-router-dom';

const Notfound: React.FC = () => {
  const navigate = useNavigate();
  const handlehome = () => {
    navigate('/home');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h2>404 Error</h2>
      <p>Sorry, the page you are looking for does not exist</p>
      <button onClick={handlehome} id="backToHomeButton">Back to Home Page</button>
    </div>
  );
};

export default Notfound;