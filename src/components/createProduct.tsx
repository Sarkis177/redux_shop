import React, { useState } from 'react';
import { ProductModel } from '../models/product.model';
import axios from 'axios';
import { PRODUCTS_URL } from '../constants/api.constatnts';
import { SError } from '../assets/styles/app.styles';
import { SForm, SInput, SBtnDetails } from '../assets/styles/app.styles';

const productData: ProductModel = {
    title: '',
    price: 13.5,
    description: '',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating: {
        rate: 42,
        count: 10,
    },
};

interface CreateProductProps {
    onCreate: (product: ProductModel) => void;
}

export default function CreateProduct({ onCreate }: CreateProductProps) {
    const [innerValue, setInnerValue] = useState('');
    const [descValue, setDescValue] = useState('');
    const [error, setError] = useState('');

    const submitHandler = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        if (innerValue.trim().length === 0) {
            setError('Please enter valid title!');
            return;
        }

        productData.title = innerValue;
        productData.description = descValue;

        const response = await axios.post<ProductModel>(PRODUCTS_URL, productData);

        onCreate(response.data);
    };

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInnerValue(e.target.value);
    };
    const changeDescHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDescValue(e.target.value);
    };

    return (
        <SForm onSubmit={submitHandler}>
            <SInput type='text' 
                placeholder='Enter product name...' 
                value={innerValue} 
                onChange={changeHandler} 
            />
            <SInput
                type='text'
                placeholder='Enter product description...'
                value={descValue}
                onChange={changeDescHandler}
            />
            {error && <SError>{error}</SError>}
            <SBtnDetails type='submit'>Create</SBtnDetails>
        </SForm>
    );
}
