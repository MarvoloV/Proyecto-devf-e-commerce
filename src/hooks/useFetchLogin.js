import { useEffect } from 'react';
import { useEcommerce } from '../context/EcommerceContext';
import postLogin from '../helpers/postLogin';

const useFetchLogin = (email, password) => {
  const { isLog, setToken, setIsLog, setRol } = useEcommerce();
  useEffect(() => {
    postLogin(email, password).then((login) => {
      setToken(login.token);
      setRol(login.role);
      setIsLog(true);
      console.log('login realizado');
    });
  }, []);
  return isLog;
};
export default useFetchLogin;
