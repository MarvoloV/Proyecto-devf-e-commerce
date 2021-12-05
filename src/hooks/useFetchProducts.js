import { useEffect, useState } from 'react';
import getProducts from '../helpers/getProducts';

const useFetchProducts = (params = '') => {
  const [products, setProducts] = useState({
    data: [],
    loading: true,
  });
  useEffect(() => {
    getProducts(params).then((product) => {
      setProducts({
        data: product,
        loading: false,
      });
    });
  }, []);
  return products;
};
export default useFetchProducts;
