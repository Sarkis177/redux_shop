import React from 'react';
import { SApp, SBtnModal, SError } from './assets/styles/app.styles';
import ProductCard from './components/product/card/product-card.component';
import { useProducts } from './hooks/products';
import Modal from './components/modal';
import CreateProduct from './components/createProduct';
import { ProductModel } from './models/product.model';
import type { RootState } from './store/store';
import { useSelector, useDispatch } from 'react-redux';
import { modalOn, modalOff } from './store/product/modal.slice';

function App() {
    const { productListData, loading, error, addProduct, deleteProduct} = useProducts();
    // const [modal, setModal] = useState(false);
    

    const modal = useSelector((state: RootState) => state.modal.value);
    const dispatch = useDispatch();

    const createHandler = (product: ProductModel) => {
        // setModal(false);
        dispatch(modalOff());
        addProduct(product);
    };

    return (
        <SApp>
            {loading && <p>Loading...</p>}
            {error && <SError>{error}</SError>}
            {productListData.map(product => (
                <ProductCard product={product} key={product.id} deleteProd = {deleteProduct} /> 
            ))}
            {modal && (
                <Modal title='Create new product' onClose={() => dispatch(modalOff())}>
                    <CreateProduct onCreate={createHandler} />
                </Modal>
            )}
            <SBtnModal onClick={() => dispatch(modalOn())}>+</SBtnModal>
        </SApp>
    );
}

export default App;
