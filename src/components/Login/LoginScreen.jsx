import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LoginScreen = () => {
  const navigate = useNavigate();
  const handlelogin = () => {
    navigate('/productos', {
      replace: true,
    });
  };
  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <input id="email" placeholder="email" />
      <input id="password" placeholder="contraseña" />
      <button className="btn bt-nprimary" type="button" onClick={handlelogin}>
        Login
      </button>
      <p>
        Si no tienes cuenta registrate
        <Link to="/singup">aquí</Link>
      </p>
    </div>
  );
};

export default LoginScreen;
