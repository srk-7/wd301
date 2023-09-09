import React from 'react';
import {  useNavigate } from 'react-router-dom';

const Notfound: React.FC = () => {
  const redirect = useNavigate();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <h2 className="text-4xl text-red-500 font-bold mb-2">404 Error</h2>
      <p className="text-gray-600 mb-4">Sorry, the page you are looking for does not exist</p>
      <button className="text-blue-500 hover:underline focus:outline-none focus:ring focus:ring-blue-300 transition" onClick={() => redirect('/home')} id="backToHomeButton">Go Back to Home Page</button>
    </div>
  );
};

export default Notfound;