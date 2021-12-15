/* eslint-disable function-paren-newline */
/* eslint implicit-arrow-linebreak: ["error", "below"] */
const getProductsSearch = (products, name = '') => {
  if (name === '') {
    return products;
  }
  const nameMinuscula = name.toLocaleLowerCase();
  return products.filter((product) =>
    product.product_name.toLowerCase().includes(nameMinuscula),
  );
};
export default getProductsSearch;
