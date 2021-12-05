const getProducts = async (id = '') => {
  const url = `https://ecomerce-master.herokuapp.com/api/v1/item/${id}`;
  const resp = await fetch(url);
  const products = await resp.json();
  return products;
};
export default getProducts;
