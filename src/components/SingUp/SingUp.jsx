/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Alert from './Alert';

import './SingUp.css';
/*  "first_name": "Jorge",
    "last_name": "Adco",
    "birth_date": "1997-12-08",
    "gender": "M",
    "email": "jorgead0812@gmail.com",
    "password": "s0p0rt31",
    "role": "ADMIN" */
const NameSchema = yup.object().shape({
  first_name: yup.string().required(),
});
const SingUp = () => {
  const [alert, setAlert] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(NameSchema),
  });
  const handleSignUp = ({
    first_name,
    last_name,
    email,
    password,
    gender,
    birth_date,
  }) => {
    const data = JSON.stringify({
      first_name,
      last_name,
      email,
      password,
      gender,
      birth_date,
    });
    const url = 'https://ecomerce-master.herokuapp.com/api/v1/signup';
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
        setAlert('Te has registrado Satisfactoriamente, dirígete a Login');
      })
      .catch((error) => {
        console.log(`error:${error}`);
        setAlert(error.result.message);
      });
  };
  return (
    <div>
      <h1>SignUp</h1>
      <Alert message={alert} />
      <form className="signup" onSubmit={handleSubmit(handleSignUp)}>
        <input {...register('first_name')} placeholder="Nombre" />
        {errors.first_name && <p>{errors.first_name.message}</p>}
        <input {...register('last_name')} placeholder="Apellido" />
        <input {...register('email')} placeholder="email" />
        <input
          {...register('password')}
          type="password"
          placeholder="contraseña"
        />
        <select {...register('gender')}>
          <option value="">Select...</option>
          <option value="M">Male</option>
          <option value="F">Female</option>
        </select>
        <input {...register('birth_date')} type="date" />
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Si ya tienes cuenta loggeate
        <Link to="/login">aquí</Link>
      </p>
    </div>
  );
};

export default SingUp;
