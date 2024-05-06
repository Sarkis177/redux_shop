import React, { memo, FC } from 'react';
import { ProductModel } from '../../../models/product.model';
import { SImg, STitle, SDescr, SCard, SPrice, SHr } from '../../../assets/styles/app.styles';
import Description from '../../description';
import { MAX_LENGTH } from '../../../constants/api.constatnts';
import { useProducts } from '../../../hooks/products';

interface ProductCardProps {
    product: ProductModel
    deleteProd: (id:any) => void
}

const ProductCard: FC<ProductCardProps> = ({ product, deleteProd}: any) => {
  
    return (
        <>
            <STitle>{product.title}</STitle>
            <SCard>
                <SImg src={product.image} alt={product.title} />
                <SPrice>
                    <SDescr>
                        <Description text={product.description} maxLength={MAX_LENGTH} />
                    </SDescr>
                    <STitle>{product.price} $</STitle>
                </SPrice>
            </SCard>
            <button onClick={() => deleteProd(product.id)}>Delete</button>
            <SHr />
        </>
    );
};
export default memo(ProductCard);
