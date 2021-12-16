/* eslint-disable */
/* eslint-disable react/prop-types */
import React, { useContext, useState, useMemo } from 'react';
import useFetchProducts from '../hooks/useFetchProducts';
// 1.- Crear Contexto
const EcommerceContext = React.createContext();

// 2.- Crear un componente que tenga el provider del contexto y envuelva a sus hijos

export const EcommerceProvider = ({ children }) => {
  const [token, setToken] = useState(JSON.parse(localStorage.getItem('token')));
  const [products, setProducts] = useState([]);
  const [carrito, setCarrito] = useState(
    localStorage.getItem('carrito')
      ? JSON.parse(localStorage.getItem('carrito'))
      : [],
  );
  const { data } = useFetchProducts(); // recupera los datos detos asincronicos
  const [user, setUser] = useState(null);
  const [isLog, setIsLog] = useState(JSON.parse(localStorage.getItem('isLog')));
  const [rol, setRol] = useState(JSON.parse(localStorage.getItem('rol')));
  const propsToPass = {
    token,
    setToken,
    products,
    setProducts,
    data,
    user,
    setUser,
    isLog,
    setIsLog,
    rol,
    setRol,
    carrito,
    setCarrito,
  }; /*
   useMemo(
    () => ({
      token,
      setToken,
      products,
      setProducts,
      data,
      user,
      setUser,
      isLog,
      setIsLog,
      rol,
      setRol,
    }),
    [data, products, isLog, token, rol],
  ); */

  return (
    <EcommerceContext.Provider value={propsToPass}>
      {children}
    </EcommerceContext.Provider>
  );
};
// 3. Consumir el contexto, ayudemonos de un custom Hook
export const useEcommerce = () => {
  const context = useContext(EcommerceContext);

  if (context === undefined) {
    throw new Error('useContext debe estar dentro de un ThemeContext');
  }
  return context;
};
