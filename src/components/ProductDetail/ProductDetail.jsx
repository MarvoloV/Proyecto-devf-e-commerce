/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useFetchProducts from '../../hooks/useFetchProducts';
import { useEcommerce } from '../../context/EcommerceContext';

const ProductDetail = () => {
  const { productid } = useParams();
  const { data: products } = useFetchProducts(productid);
  const { product_name: productName, price, image } = products;
  const { isLog } = useEcommerce();
  console.log(isLog);
  return (
    <>
      <h1>Productos Detail:</h1>
      <hr />
      <div className="card">
        <img src={image} alt={productName} />
        <h2>{productName}</h2>
        <p>{price}</p>
        <button
          type="button"
          className={isLog ? 'btn btn-info' : 'btn btn-info disabled'}
        >
          Comprar
        </button>
      </div>
      {isLog ? (
        ''
      ) : (
        <p className="mt-3">
          Si deseas registrarte haz click
          <Link to="/singup">Aqui</Link>o si tienes una cuenta registrada hacer
          click
          <Link to="/login">Aqui</Link>
        </p>
      )}
    </>
  );
};

export default ProductDetail;
