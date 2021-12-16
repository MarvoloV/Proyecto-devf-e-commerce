/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable no-return-assign */
/* eslint-disable no-const-assign */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable prettier/prettier */
/* eslint-disable react/style-prop-object */
/* eslint no-plusplus: ["error", { "allowForLoopAfterthoughts": true }] */
import React, { useState, useEffect } from 'react';
import './ShoppingCart.css';
import { Link } from 'react-router-dom';
import { useEcommerce } from '../../context/EcommerceContext';
import ProductShopping from './ProductShopping';

const ShoppingCart = () => {
  const { carrito } = useEcommerce();
  const [pagoTotal, setPagoTotal] = useState(0);
  let totalAux = 0;
  for (let i = 0; i < carrito.length; i++) {
    totalAux += carrito[i].total;
  }
  useEffect(() => {
    setPagoTotal(totalAux);
    // console.log(totalAux);
  }, [carrito]);
  return (
    <div className="cart_section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="cart_container">
              <div className="cart_title">Shopping Cart</div>
              <div className="cart_items">
                <ul className="cart_list">
                  {carrito.map((product) => {
                    const {
                      product_name: productName,
                      price,
                      image,
                      _id: id,
                      cant,
                    } = product;
                    return (
                      <ProductShopping
                        key={id}
                        productName={productName}
                        price={price}
                        image={image}
                        id={id}
                        cant={cant}
                      />
                    );
                  })}
                </ul>
              </div>

              <div className="order_total">
                <div className="order_total_content text-md-right">
                  <div className="order_total_title">Order Total:</div>
                  <div className="order_total_amount">$ {pagoTotal} </div>
                </div>
              </div>
              <div className="cart_buttons">
                <Link to="/productos" className="btn btn-info">
                  Continuar Comprando
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShoppingCart;
