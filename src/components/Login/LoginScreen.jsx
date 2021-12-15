/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useEcommerce } from '../../context/EcommerceContext';
import Alert from '../SingUp/Alert';
import './login.css';

const LoginScreen = () => {
  const { setToken, setIsLog, setRol } = useEcommerce();
  const [alert, setAlert] = useState(null);
  const navigate = useNavigate();
  const fetchLogin = (email, password) => {
    const data = JSON.stringify({
      email,
      password,
    });
    const url = 'https://ecomerce-master.herokuapp.com/api/v1/login';
    const config = {
      method: 'post',
      url,
      headers: {
        'Content-Type': 'application/json',
      },
      data,
    };
    axios(config)
      .then((response) => {
        localStorage.setItem('token', JSON.stringify(response.data.token));
        localStorage.setItem('rol', JSON.stringify(response.data.role));
        localStorage.setItem('isLog', JSON.stringify(true));
        setRol(response.data.role);
        setIsLog(true);
        setToken(response.data.token);
        navigate('/productos', { replace: true });
      })
      .catch((error) => {
        console.log(error.response.data.message);
        setAlert(error.response.data.message);
      });
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = ({ email, password }) => {
    fetchLogin(email, password);
  };
  console.log(errors);

  return (
    <div className="container mt-5">
      <h1 className="text-primary title-login">Login</h1>
      <hr />
      <Alert message={alert} />
      <form onSubmit={handleSubmit(handleLogin)}>
        <input
          type="text"
          placeholder="email"
          {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
        />
        <input
          type="password"
          placeholder="password"
          {...register('password', { required: true })}
        />

        <input type="submit" />
      </form>
      <p>
        Si no tienes cuenta registrate
        <Link to="/singup">aquí</Link>
      </p>
    </div>
  );
};

export default LoginScreen;
