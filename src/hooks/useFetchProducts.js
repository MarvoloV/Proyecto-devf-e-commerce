import { useEffect, useState } from 'react'
import {getProducts} from '../helpers/getProducts'
export const useFetchProducts = () => {
    const [products, setProducts] = useState({
        data:[],
        loading:true
    });
    useEffect(() => {
        getProducts()
            .then(products=>{
                setProducts({
                    data:products,
                    loading:false,
                });
            });
    }, []);
    return products;
}


