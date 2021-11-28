import React from 'react';
import {useFetchProducts} from '../hooks/useFetchProducts';
import {ProductItem} from './ProductItem';
export const ProductGrid = () => {
  const { data: products } = useFetchProducts();
  return (
    <>
      <h1>Productos</h1>
      <div className="card-grid">
        {products.map((product) => {
          return (
            <ProductItem
              key={product._id}
              {...product}
            />
          );
        })}
      </div>
    </>
  );
};

