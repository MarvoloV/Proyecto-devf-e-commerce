import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchProducts from '../../hooks/useFetchProducts';

const ProductDetail = () => {
  const { productid } = useParams();
  const { data: products } = useFetchProducts(productid);
  const { product_name: productName, price, image, _id: id } = products;
  return (
    <>
      <h1>Productos Detail:</h1>
      <hr />
      <div className="card">
        <img src={image} alt={productName} />
        <h2>{productName}</h2>
        <p>{price}</p>
        <p>{id}</p>
      </div>
    </>
  );
};

export default ProductDetail;
