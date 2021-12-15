/* eslint-disable camelcase */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';
import { useEcommerce } from '../../context/EcommerceContext';

const AddProduct = () => {
  const { token } = useEcommerce();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const AddProducts = async (
    product_name,
    description,
    price,
    category,
    brand,
    sku,
    image,
  ) => {
    const myHeaders = new Headers();
    myHeaders.append('Authorization', `JWT ${token}`);
    myHeaders.append('Content-Type', 'application/json');
    const raw = JSON.stringify({
      product_name,
      description,
      price,
      category,
      brand,
      sku,
      image,
    });
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };
    const data = await fetch(
      'https://ecomerce-master.herokuapp.com/api/v1/item',
      requestOptions,
    );
    const producto = await data.json();
    return producto;
    // console.log(producto);
  };
  const onSubmit = ({
    product_name,
    description,
    price,
    category,
    brand,
    sku,
    image,
  }) => {
    AddProducts(product_name, description, price, category, brand, sku, image);
  };
  console.log(errors);
  return (
    <div className="mt-5">
      <h1 className="mt-5">Add Product Screen</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Nombre del Producto"
          {...register('product_name', { required: true, maxLength: 80 })}
        />
        <input
          type="text"
          placeholder="descripción"
          {...register('description', { required: true, maxLength: 98 })}
        />
        <input
          type="number"
          placeholder="precio"
          {...register('price', { required: true })}
        />
        <input
          type="text"
          placeholder="categoria"
          {...register('category', { required: true, maxLength: 12 })}
        />
        <input
          type="text"
          placeholder="brand"
          {...register('brand', { required: true })}
        />
        <input
          type="text"
          placeholder="sku"
          {...register('sku', { required: true })}
        />
        <input type="url" placeholder="image" {...register('image', {})} />

        <input type="submit" />
      </form>
    </div>
  );
};
export default AddProduct;
