import React from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductItem = ({ productName, price, image, id }) => (
  <Link to={`/productos/${id}`}>
    <div className="card">
      <img src={image} alt={productName} />
      <h2>{productName}</h2>
      <p>{`$ ${price}`}</p>
      <p>{id}</p>
    </div>
  </Link>
);
export default ProductItem;
ProductItem.propTypes = {
  productName: Proptypes.string.isRequired,
  price: Proptypes.number,
  image: Proptypes.string,
  id: Proptypes.string.isRequired,
};
ProductItem.defaultProps = {
  image:
    'https://upload.wikimedia.org/wikipedia/commons/d/da/Imagen_no_disponible.svg',
  price: 0,
};
