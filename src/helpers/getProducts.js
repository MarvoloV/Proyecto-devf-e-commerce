export const getProducts = async() => {
    const url='https://ecomerce-master.herokuapp.com/api/v1/item';
    const resp= await fetch(url);
    const products = await resp.json();
    return products;
}
