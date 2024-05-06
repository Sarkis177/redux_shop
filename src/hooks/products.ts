import React, { useEffect, useState } from 'react';
import { PRODUCTS_URL } from '../constants/api.constatnts';
import axios from 'axios';
import { AxiosError } from 'axios';
import { ProductModel } from '../models/product.model';

export function useProducts() {
    const [productListData, setProductListData] = useState<ProductModel[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    function addProduct(product: ProductModel) {
        setProductListData(prev => [product, ...prev]);
    }
    function deleteProduct(id:any) {
        setProductListData(productListData.filter(product => product.id !== id) );
        console.log(id)
    }

    async function fetchProducts() {
        try {
            setError('');
            setLoading(true);
            const response = await axios.get<ProductModel[]>(PRODUCTS_URL);
            setProductListData(response.data);
            setLoading(false);
        } catch (e: unknown) {
            const error = e as AxiosError;
            setLoading(false);
            setError(error.message);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return { productListData, loading, error, addProduct, deleteProduct };
}
