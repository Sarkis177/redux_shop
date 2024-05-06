import { createSlice } from '@reduxjs/toolkit';

export interface ModalState {
    value: boolean;
}

const initialState: ModalState = {
    value: false,
};

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        modalOn: state => {
            state.value = true;
            console.log(state.value);
        },
        modalOff: state => {
            state.value = false;
            console.log(state.value);
        },
    },
});

export const { modalOn, modalOff } = modalSlice.actions;

export default modalSlice.reducer;
