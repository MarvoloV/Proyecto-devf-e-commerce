/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useEcommerce } from '../../context/EcommerceContext';
import Alert from '../SingUp/Alert';
import './login.css';

const LoginScreen = () => {
  const { setToken, setIsLog, setRol } = useEcommerce();
  const [alert, setAlert] = useState(null);
  const navigate = useNavigate();
  const fetchLogin = async (email, password) => {
    const raw = JSON.stringify({
      email,
      password,
    });
    const url = 'https://ecomerce-master.herokuapp.com/api/v1/login';
    const config = {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: raw,
    };
    fetch(url, config)
      .then((response) => response.text())
      .then((result) => {
        const login = JSON.parse(result);
        // console.log(login);
        localStorage.setItem('token', JSON.stringify(login.token));
        localStorage.setItem('rol', JSON.stringify(login.role));
        localStorage.setItem('isLog', JSON.stringify(true));
        setRol(login.role);
        setIsLog(true);
        setToken(login.token);
        setAlert('Te has registrado Satisfactoriamente, dirígete a Login');
      })
      .catch((error) => {
        console.log(`error:${error}`);
        console.log(typeof error);
        // setAlert(error.result.message);
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
  // const [alert, setAlert] = useState(null);

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

/* const login= async(email,) =>{

  } */
/* const handlelogin = () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const data = JSON.stringify({
      email,
      password,
    });
    const url = 'https://ecomerce-master.herokuapp.com/api/v1/login';
    const config = {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data,
    };
    fetch(url, config)
      .then((response) => response.text())
      .then((result) => {
        const datos = JSON.parse(result);
        setToken(datos.token);
        setRol(datos.role);
        localStorage.setItem('login', JSON.stringify(datos));
      })
      .catch((error) => console.log('error', error));
    if (token) {
      setIsLog(true);
      navigate('/productos', {
        replace: true,
      });
    }
  }; */
