import React from "react";

const Signup = ({ setIsLoggedIn }) => {
  const handleSignup = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      <h2>Signup</h2>
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default Signup;
