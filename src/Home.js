import React from "react";

const Home = ({ setIsLoggedIn }) => {
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <h2>Home</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
