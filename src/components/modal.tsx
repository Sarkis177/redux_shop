import React from 'react';
import { SModalBg, SModalWindow, SSvg } from '../assets/styles/app.styles';
import { ReactComponent as CloseIcon } from '.././assets/icons/cross.svg';

interface ModalProps {
    children: React.ReactNode;
    title: string;
    onClose: () => void;
}

export default function Modal({ children, title, onClose }: ModalProps) {
    return (
        <>
            <SModalBg onClick={onClose} />
            <SModalWindow>
                <SSvg>
                    <CloseIcon onClick={onClose} />{' '}
                </SSvg>
                <h1>{title}</h1>
                {children}
            </SModalWindow>
        </>
    );
}
