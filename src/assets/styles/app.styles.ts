import styled from 'styled-components';

export const SApp = styled.div`
    text-align: center;
`;

export const SImg = styled.img`
    max-width: 240px;
    margin-right: 25px;
`;

export const STitle = styled.h1`
    font-size: 20px;
    margin-bottom: 25px;
`;

export const SDescr = styled.div`
    width: 300px;
    font-size: 15px;
    display: inline-block;
`;
export const SCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
    min-height: 300px;
`;
export const SPrice = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
export const SDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const SBtnDetails = styled.button`
    margin-top: 15px;
    cursor: pointer;
    padding: 5px;
    width: 100px;
    background: cornsilk;
    border: 1px solid black;
    :hover {
        background: grey;
        color: white;
    }
`;
export const SHr = styled.hr`
    width: 600px;
`;
export const SModalBg = styled.div`
    position: fixed;
    background: black;
    opacity: 50%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`;
export const SModalWindow = styled.div`
    width: 500px;
    padding: 5px;
    background: white;
    position: fixed;
    top: 0;
    left: 30%;
    margin-top: 55px;
    border-radius: 5px;
`;
export const SError = styled.p`
    color: red;
    font-size: 25px;
`;
export const SForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 15px;
`;
export const SInput = styled.input`
    width: 300px;
    margin-bottom: 15px;
    font-size: 15px;
`;

export const SBtnModal = styled.button`
    position: fixed;
    bottom: 15px;
    right: 15px;
    border-radius: 50%;
    background: cornsilk;
    width: 40px;
    height: 40px;
    font-size: 25px;
    cursor: pointer;
    :hover {
        transform: scale(1.2);
    }
`;

export const SSvg = styled.div`
    position: absolute;
    right: 9px;
    cursor: pointer;
    :hover {
        transform: scale(1.2);
    }
`;
