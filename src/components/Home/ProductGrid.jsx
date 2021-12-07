/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import useFetchProducts from '../../hooks/useFetchProducts';
import ProductItem from './ProductItem';
import useFormProduct from '../../hooks/useFormProduct';
import getProductsSearch from '../../helpers/getProductsSearch';

const ProductGrid = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { data } = useFetchProducts();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(data);
    console.log(products);
  }, [data]);
  // const [products, setProducts] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const { q = '' } = queryString.parse(location.search);
  const [formValues, handleInputChange] = useFormProduct({
    searchText: q,
  });

  const { searchText } = formValues;
  const handleSearch = (e) => {
    const productsSearch = getProductsSearch(data, searchText);
    e.preventDefault();
    navigate(`?q=${searchText}`);
    setProducts({ data: productsSearch, loading: false });
  };

  return (
    <>
      <h1>Productos</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchText}
          placeholder="Producto a buscar"
          name="searchText"
          onChange={handleInputChange}
        />
      </form>

      <hr />
      <div className="card-grid">
        <h1>TOTAL:</h1>
        {products.map((product) => {
          const { product_name: productName, price, image, _id: id } = product;
          return (
            <ProductItem
              key={id}
              productName={productName}
              price={price}
              image={image}
              id={id}
            />
          );
        })}
      </div>
    </>
  );
};
export default ProductGrid;
