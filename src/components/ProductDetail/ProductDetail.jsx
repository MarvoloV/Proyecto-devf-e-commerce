/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useFetchProducts from '../../hooks/useFetchProducts';
import { useEcommerce } from '../../context/EcommerceContext';

const ProductDetail = () => {
  const { productid } = useParams();
  const { data: products } = useFetchProducts(productid);
  const { product_name: productName, price, image } = products;
  // eslint-disable-next-line no-unused-vars
  const { isLog, carrito, setCarrito } = useEcommerce();
  // console.log(isLog);
  const handleAddCart = () => {
    const auxCarrito = carrito;
    let isNewCart = true;
    auxCarrito.forEach((cart) => {
      if (cart._id === productid) {
        cart.cant += 1;
        isNewCart = false;
      }
    });
    if (isNewCart) {
      products.cant = 1;
      auxCarrito.push(products);
    }
    if (carrito.length === 0) {
      products.cant = 1;
      auxCarrito.push(products);
      // console.log(auxCarrito);
    }
    setCarrito(auxCarrito);
    localStorage.setItem('carrito', JSON.stringify(auxCarrito));
    console.log(carrito);
  };
  return (
    <>
      <h1>Productos Detail:</h1>
      <hr />
      <div className="card">
        <img src={image} alt={productName} />
        <h2>{productName}</h2>
        <p> $ {price}</p>
        <button
          type="button"
          className={isLog ? 'btn btn-info ' : 'btn btn-info disabled'}
        >
          Comprar
        </button>
        <button
          type="button"
          className={
            isLog
              ? 'btn btn-outline-danger mt-3'
              : 'btn btn-outline-danger disabled mt-3'
          }
          onClick={() => handleAddCart(products)}
        >
          <i className="bi bi-cart4" />
          Agregar Al carrito
        </button>
        {/* "btn btn-outline-danger" */}
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
