import React from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';
import './ProductItem.scss';

const ProductItem = ({ productName, price, image, id }) => (
  <Link to={`/productos/${id}`}>
    <div className="row">
      <div className="card animate__animated animate__fadeIn h-100">
        <img src={image} alt={productName} className="card-img-top" />
        <div className="card-body text-center">
          <h5 className="card-title text-center ">{productName}</h5>
          <p className="card-text text-center">{`$ ${price}`}</p>
          <button type="button" className="btn btn-info ">
            Comprar
          </button>
        </div>
      </div>
    </div>
  </Link>
  /* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to buil
  </div>
</div> */
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
