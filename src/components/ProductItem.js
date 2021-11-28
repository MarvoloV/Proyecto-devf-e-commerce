import React from 'react'

export const ProductItem = ({product_name,price,image}) => {
    return (
        <div className="card">
            <img src={image} alt={product_name} />
            <h1>{product_name}</h1>
            <p>{price}</p>
        </div>
    )
}
