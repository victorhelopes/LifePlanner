import styled from "styled-components";

export const Background = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #ffffff80;
`;

export const Modal = styled.div`
    position: absolute;
    top: 30%;
    right: 30%;
    left: 30%;

    background-color: white;
    padding: 1rem;
    border-radius: 0.5rem;
`;

export const ModalHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1{
        color: var(--black-color);
    }

    span{
        cursor: pointer;
    }
`;

export const Action = styled.div`
    display: flex;
    justify-content: end;
    margin-top: 1rem;

    button:first-of-type{
        margin-right: 1rem;
    }
`