import React from 'react';
import { Link } from 'react-router-dom';

const Logout = () => {
 

  const handleLogout = () => {
    // Perform logout actions (e.g., clear token, state, etc.)
    <Link to="./Loginsignup">Login</Link>// Redirect to login page after logout
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
