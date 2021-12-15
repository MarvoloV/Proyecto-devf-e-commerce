/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import ProductItem from './ProductItem';
import { useEcommerce } from '../../context/EcommerceContext';
import 'animate.css';

const ProductGrid = () => {
  const { data, setProducts, products } = useEcommerce();
  useEffect(() => {
    setProducts(data);
  }, [data]);
  // const [products, setProducts] = useState([]);
  // eslint-disable-next-line no-unused-vars
  return (
    <>
      <h1>Productos</h1>
      <hr />
      <div className="row row-cols-1 row-cols-md-4 g-4">
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
