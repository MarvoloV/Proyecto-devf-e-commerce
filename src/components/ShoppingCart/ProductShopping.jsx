/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from 'react';
import Proptypes from 'prop-types';
import { useEcommerce } from '../../context/EcommerceContext';

const ProductShopping = ({ productName, price, image, id, cant }) => {
  const [cantidad, setCantidad] = useState(cant);
  const { carrito, setCarrito } = useEcommerce();
  const handleAddCart = () => {
    const auxCarrito = carrito;
    auxCarrito.forEach((cart) => {
      if (cart._id === id) {
        cart.cant = cantidad;
        cart.total = cart.cant * cart.price;
      }
    });
    setCarrito(auxCarrito);
    localStorage.setItem('carrito', JSON.stringify(auxCarrito));
  };
  const handleIncrease = () => {
    setCantidad(cantidad + 1);
  };
  const handleDecrease = () => {
    setCantidad(cantidad - 1);
  };
  useEffect(() => {
    handleAddCart();
  }, [cantidad]);
  return (
    <li className="cart_item clearfix">
      <div className="cart_item_image">
        <img src={image} alt="" />
      </div>
      <div className="cart_item_info d-flex flex-md-row flex-column justify-content-between">
        <div className="cart_item_name cart_info_col">
          <div className="cart_item_title">Nombre</div>
          <div className="cart_item_text">{productName}</div>
        </div>
        <div className="cart_item_quantity cart_info_col">
          <div className="cart_item_title">Cantidad</div>
          <div className="col d-flex mt-3">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleDecrease}
            >
              -
            </button>
            <span className="h3 mx-3">{cantidad}</span>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleIncrease}
            >
              +
            </button>
          </div>
        </div>
        <div className="cart_item_price cart_info_col">
          <div className="cart_item_title">Precio</div>
          <div className="cart_item_text">${price}</div>
        </div>
        <div className="cart_item_total cart_info_col">
          <div className="cart_item_title">Total</div>
          <div className="cart_item_text">${price * cantidad} </div>
        </div>
        <div className="cart_item_total cart_info_col">
          <button type="button" className="btn btn-warning">
            Eliminar
          </button>
        </div>
      </div>
    </li>
  );
};

export default ProductShopping;
ProductShopping.propTypes = {
  productName: Proptypes.string.isRequired,
  price: Proptypes.number,
  image: Proptypes.string,
  id: Proptypes.string.isRequired,
  cant: Proptypes.number.isRequired,
};
ProductShopping.defaultProps = {
  image:
    'https://upload.wikimedia.org/wikipedia/commons/d/da/Imagen_no_disponible.svg',
  price: 0,
};
