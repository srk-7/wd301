// import React from 'react';

// const Dashboard: React.FC = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Dashboard</h1>
//     </div>
//   );
// }

// export default Dashboard;


import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  let navigate = useNavigate();
  const signout = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try 
    {
      localStorage.removeItem("authToken");
      localStorage.removeItem("userData");
      navigate("/signin");
    } 
    catch (error) 
    {
      console.log("sign-in failed", error);
    }
  };
  const userData = JSON.parse(localStorage.getItem("userData") || "{}");
  const { name, email } = userData;

  return (
    <div className="text-center">
      <div className="">
        <h1>Welcome {name}</h1>
      </div>
      <div>
        <h1>Your Email: {email}</h1>
      </div>
      <div>
        <button
          type="submit"
          id="logout-link"
          onClick={signout}
          className="w-half bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-gray mt-4"
        >Signout</button>
      </div>
    </div>
  );
};

export default Dashboard;