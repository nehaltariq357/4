import React from "react";

const Login = ({ setIsLoggedIn }) => {
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
